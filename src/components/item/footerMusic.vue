<template>
  <div class="FooterMusic">
    <div class="footerLeft" @click="updateDetailShow">
      <img :src="playList[playListIndex].al.picUrl" />
      <div>
        <p>{{ playList[playListIndex].al.name }}</p>
        <span>横滑切换歌曲</span>
      </div>
    </div>
    <div class="footerRight">
      <svg class="icon" aria-hidden="true" @click="play" v-if="isbtnShow">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true" @click="play" v-else>
        >
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon liebiao" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}`"
    ></audio>
    <van-popup
      v-model:show="detailShow"
      position="bottom"
      :style="{ height: '100%', width: '100%' }"
    >
      <MusicDetail :musicList="playList[playListIndex]" :play="play" :isbtnShow="isbtnShow" :addDuration="addDuration"/>
    </van-popup>
  </div>
</template>

<script>
import MusicDetail from "./MusicDetail.vue"
import { computed } from "vue";
import { mapState, mapMutations, useStore } from "vuex";
import { useState } from "@/hooks/useState.js";

export default {
  data() {
    return {
      interVal:0
    }
  },
  components:{
    MusicDetail
  },
  // computed: {
  //   ...mapState(["playList", "playListIndex", "isbtnShow"]),
  // },
  // mounted() {
  //   console.log(this.$refs);
  // },
  updated() {
    this.$store.dispatch("getLyric",this.playList[this.playListIndex].id)
    this.addDuration()
  },
  mounted() {
    this.$store.dispatch("getLyric",this.playList[this.playListIndex].id)
     this.updateTime()
  },
  methods: {
    play() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updateIsbtnShow(false);
        this.updateTime()
      } else {
        this.$refs.audio.pause();
        this.updateIsbtnShow(true);
        clearInterval(this.interVal())
      }
    },
    addDuration(){
      this.updateDuration(this.$refs.audio.duration)
    },
    updateTime(){
      this.interVal = setInterval(() => {
        this.updateCurrentTime(this.$refs.audio.currentTime)
      },1000)
    },
    ...mapMutations(["updateIsbtnShow", "updateDetailShow","updateCurrentTime","updateDuration"]),
  },
  setup() {
    const storeState = useState([
      "playList",
      "playListIndex",
      "isbtnShow",
      "detailShow",
    ]);
    // function play() {
    //   if (this.$refs.audio.paused) {
    //     this.$refs.audio.play();
    //     this.updateIsbtnShow(false);
    //   } else {
    //     this.$refs.audio.pause();
    //     this.updateIsbtnShow(true);
    //   }
    // }
    return {
      ...storeState,
    };
  },
  watch: {
    playListIndex() {
      this.$refs.audio.autoplay = true;
      if (this.$refs.audio.paused) {
        this.updateIsbtnShow(false);
      }
    },
    playList() {
      if (this.isbtnShow) {
        this.$refs.audio.autoplay = true;
        this.updateIsbtnShow(false);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.FooterMusic {
  width: 100%;
  height: 1.6rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #999;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  .footerLeft {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
  }
  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}
</style>
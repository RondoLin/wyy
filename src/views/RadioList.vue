<template>
  <div>
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-xiangzuojiantou"></use>
    </svg>
    <p class="title">电台节目</p>
    <div class="content" v-for="List in list" :key="List">
       <img :src="List.blurCoverUrl" class="bigimg" />
      <img :src="List.coverUrl" class="smallimg"/>
      <p class="p1">名称：{{ List.name }}</p>
      <p class="p3">描述：{{ List.description }}</p>
      <p class="p2">收听量：{{ changeCount(List.listenerCount) }}</p>
      <audio
        controls
        :src="`https://music.163.com/song/media/outer/url?id=${List.mainSong.id}`"
      ></audio>
    </div>
  </div>
</template>

<script>
import { getDJList } from "@/api/home";
export default {
  data() {
    return {
      list: [],
      id: this.$route.query.id,
    };
  },
  mounted() {
    this.getDJlist();
  
  },
  methods: {
    async getDJlist() {
      let result = await getDJList(this.id);
      console.log(result);
      if (result.data.code == 200) {
        this.list = result.data.programs;
      }
    },


    changeCount(num) {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.icon {
  margin-top: 0.2rem;
}
.title {
  font-size: 0.4rem;
  font-weight: 900;
  margin-left: 40%;
}
.content {
  position: relative;
  width: 7rem;
  height: 4rem;
  background: rgb(232, 232, 237);
  margin-left: 0.3rem;
  margin-top: 0.2rem;
  border-radius: 0.2rem;
  .bigimg{
     position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(20px);
  }
  .smallimg {
    width: 2rem;
    height: 2rem;
    border-radius: 0.2rem;
    margin-top: 0.5rem;
    margin-left: 0.2rem;
  }
  .p1 {
    font-weight: 900;
    position: absolute;
    width: 3rem;
    height: 0.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    top: 0.4rem;
    left: 3.5rem;
  }
  .p2 {
    position: absolute;
    width: 3rem;

    top: 2rem;
    left: 3.5rem;
  }
  .p3 {
    position: absolute;
    width: 3rem;
    height: 0.8rem;
    overflow: hidden;
    top: 1rem;
    left: 3.5rem;
  }
}
</style>
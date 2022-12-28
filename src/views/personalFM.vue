<template>
  <div>

    <div v-for="list in list" :key="list">
        <img :src="list.album.picUrl" class="img" />
    </div>
    <div class="detailTop">
      <svg class="icon liebiao" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-xiangzuojiantou"></use>
      </svg>
    </div>
    <div v-for="list in list" :key="list" class="content">
      <div class="leftMarquee">
        <Vue3Marquee>
          {{ list.album.name }}
        </Vue3Marquee>
      </div>
      <img :src="list.album.picUrl" class="bgimg" />
    </div>
  </div>
</template>

<script>
import { getpersonalFM } from "@/api/home";
export default {
  data() {
    return {
      list: [],
      cookie: JSON.parse(localStorage.getItem("cookies")),
    };
  },
  methods: {
    async getPersonalFM() {
      let result = await getpersonalFM(this.cookie);
      console.log(result);
      if (result.data.code == 200) {
        this.list = result.data.data;
      }
    },
  },
  mounted() {
    this.getPersonalFM();
  },
};
</script>

<style lang="less" scoped>

.img {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(70px);
}
.detailTop {
  width: 1rem;
  height: 0.5rem;
  margin-top: 0.2rem;
}
.content {
background: antiquewhite;
  height: 4rem;
  margin-top: .2rem;
  position: relative;
  .bgimg {
    margin-top: .2rem;
    width: 4rem;
    height: 3rem;
    position: absolute;
    left: 20%;
  }
  .leftMarquee {

    margin-left: 3rem;
  }
}
</style>
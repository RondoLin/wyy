<template>
  <div>
    <img
      src="https://p1.music.126.net/EhGo19iZ02wBJdgV8ujKaw==/109951163382019918.jpg"
      class="bigImg"
    />
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-xiangzuojiantou"></use>
    </svg>
    <p class="top">专栏</p>

      <div class="content" v-for="list in list" :key="list">
            <router-link :to="{ path: '/collectList', query: { id: list.data.id } }">
      <img :src="list.data.picUrl" >
      <p class="title">{{list.data.name}}</p>
      <p class="ar">{{list.data.dj.nickname}}</p>
        </router-link>
    </div>

  </div>
</template>

<script>
import { getTopic } from "@/api/infoUser";
export default {
  data() {
    return {
      list: [],
      cookie: JSON.parse(localStorage.getItem("cookies")),
     
    };
  },
  methods: {
    async getPlayList() {
      let result = await getTopic(this.cookie);
      console.log(result);
      if (result.data.code == 200) {
        this.list = result.data.data.list;
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
  mounted() {
    this.getPlayList();
  },
};
</script>

<style lang="less" scoped>
.bigImg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(70px);
}
.icon {
  margin-top: 0.2rem;
}
.top {
  font-size: 0.4rem;
  font-weight: 900;
  margin-left: 45%;
  color: blue;
}
.content {
  position: relative;
  width: 7rem;
  height: 3rem;
  background: rgb(232, 232, 237);
  margin-left: 0.3rem;
  margin-top: 0.2rem;
  border-radius: 0.2rem;
  img {
    width: 2rem;
    height: 2rem;
    border-radius: 0.2rem;
    margin-top: 0.5rem;
    margin-left: 0.2rem;
  }
  .title {
    position: absolute;
    width: 4rem;
    top: 0.5rem;
    color: brown;
    font-weight: 600;
    left: 2.5rem;
  }
  .ar {
    position: absolute;
    width: 4rem;
    top: 1.6rem;
    left: 2.5rem;
  }
  .read {
    position: absolute;
    width: 4rem;
    top: 2rem;
    left: 2.5rem;
  }
  .p1 {
    position: absolute;
    width: 3rem;
    height: 2.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    top: 0.4rem;
    left: 3.5rem;
  }
  .p2 {
    position: absolute;
    width: 3rem;
    top: 3rem;
    left: 3.5rem;
  }
}
</style>
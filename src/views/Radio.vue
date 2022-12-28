<template>
  <div>
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-xiangzuojiantou"></use>
    </svg>
    <p class="title">热门电台</p>
    
      <div class="content" v-for="List in list" :key="List">
      <router-link :to="{ path: '/RadioList', query: { id: List.id } }">
      <img :src="List.picUrl" class="bigimg" />
          <img :src="List.picUrl" class="smallimg"/>
        <p class="p1">电台名称：{{ List.name }}</p>
        <p class="p3">描述：{{ List.rcmdText }}</p>
        <p class="p2">收听量：{{ changeCount(List.playCount) }}</p>
      </router-link>
      </div>
  
  </div>
</template>

<script>
import { getDJ } from "@/api/home";
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getDj();
  },
  methods: {
    async getDj() {
      let result = await getDJ();
      console.log(result);
      if (result.data.code == 200) {
        this.list = result.data.data;
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
    width: 3rem;
    height: 3rem;
    border-radius: 0.2rem;
    margin-top: 0.5rem;
    margin-left: 0.2rem;
  }
  .p1 {
    font-weight: 900;
    position: absolute;
    width: 3rem;
    height: 1.5rem;
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
  .p3 {
    position: absolute;
    width: 3rem;
    top: 1.5rem;
    left: 3.5rem;
  }
}
</style>
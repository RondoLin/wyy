<template>
  <div>
      <img :src="this.Toplist.coverUrl" class="bigImg" />
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-xiangzuojiantou"></use>
    </svg>
    <div class="Top">
      <p>{{ this.Toplist.name }}</p>
    
    </div>
    <div class="content" v-for="List in List" :key="List">
      <router-link :to="{ path: '/itemMusic', query: { id: List.id } }">
      <img :src="List.coverImgUrl" />
      <p class="p1">{{List.description}}</p>
      <p class="p2">播放量：{{changeCount(List.playCount)}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getTop } from "@/api/home";
export default {
  data() {
    return {
      Toplist: {},
      List: [],
    };
  },
  methods: {
    async getToplist() {
      let result = await getTop();
      console.log(result);
      if (result.data.code == 200) {
        this.Toplist = result.data.artistToplist;
        this.List = result.data.list;
      }
    },
    changeCount(num){
      if(num>=100000000){
        return (num/100000000).toFixed(1) + '亿'
      }else if(num>=10000){
        return (num/10000).toFixed(1) + '万'
      }
    }
  },
  mounted() {
    this.getToplist();
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
.Top {
  p {
    font-size: 0.4rem;
    font-weight: 900;
    margin-left: 40%;
  }
}
.content {
  position: relative;
  width: 7rem;
  height: 4rem;
  background: rgb(232, 232, 237);
  margin-left: 0.3rem;
  margin-top: 0.2rem;
  border-radius: 0.2rem;
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 0.2rem;
    margin-top: 0.5rem;
    margin-left: .2rem;
  }
  .p1{
    position: absolute;
    width: 3rem;
    height: 2.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    top: .4rem;
    left: 3.5rem;
  }
  .p2{
    position: absolute;
    width: 3rem;
    top: 3rem;
    left: 3.5rem;
  }
}
</style>
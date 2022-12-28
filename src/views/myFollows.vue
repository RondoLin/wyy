<template>
  <div>
    <div class="FollowsTop">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-xiangzuojiantou"></use>
      </svg>
      <span>关注</span>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
    <div class="FollowsContent">
      <div
        class="myFollows"
        v-for="myfollows in followsList"
        :key="myfollows"
      >
      <router-link :to="{ path: '/infoFollows', query: { id: myfollows.userId } }">
        <img src="https://p2.music.126.net/UyDVlWWgOn8p8U8uQ_I1xQ==/7934075907687518.jpg" class="bigimg"/>
        <img :src="myfollows.avatarUrl" class="smallimg"/>
        <p class="p1">{{ myfollows.nickname }}</p>
        <p class="p2">{{ myfollows.playlistCount }}个歌单</p>
        <p class="p3">关注数:{{changeCount(myfollows.followeds)}}</p>
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      followsList: [],
    };
  },
  computed: {
    ...mapGetters(["getUserData"]),

    user() {
      return this.getUserData || {};
    },
  },
  mounted() {
    this.getFollows();
  },

  methods: {
    async getFollows() {
      let res = await this.$store.dispatch(
        "getFollows",
        this.user.profile.userId
      );
      console.log(res);
      this.followsList = res.data.follow;
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
.FollowsTop {
  margin: 0 auto;
  display: flex;
  width: 7rem;
  height: 1rem;
  align-items: center;
  justify-content: space-between;
  span {
    font-weight: 600;
  }
}
.FollowsContent {
  margin-left: 0.2rem;
  border-radius: 0.2rem;
  top: 0.2rem;
  width: 7rem;
  background: rgb(232, 232, 237);
  position: relative;
  .myFollows {
    position: relative;
    width: 6rem;
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    margin-bottom: 0.2rem;
      .bigimg{
     position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(20px);
  }
    .smallimg {
      margin-top: 0.1rem;
      margin-left: 0.1rem;
      width: 2rem;
      height: 2rem;
      border-radius: 0.1rem;
    }
    .p1 {
      position: absolute;
      left: 2.5rem;
      top: 0.2rem;
    }
    .p2 {
      position: absolute;
      left: 2.5rem;
      top: 0.7rem;
    }
    .p3 {
      position: absolute;
      left: 2.5rem;
      top: 1.2rem;
    }
  }
}
</style>
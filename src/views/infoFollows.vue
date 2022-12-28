<template>
  <div>
    <div class="Top" v-for="userFollows in userFollows" :key="userFollows" v-show="this.id == userFollows.userId">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-xiangzuojiantou"></use>
      </svg>
      <img src="https://p1.music.126.net/8N1fsMRm2L5HyZccc6I3ew==/109951164007377169.jpg" class="bigImg">
      <img :src="userFollows.avatarUrl" class="profileimg" />
      <div class="userMessage">
        <div class="name">{{ userFollows.nickname }}</div>
        <div class="others">
          <span>关注：{{ userFollows.follows }}</span>
          <span>粉丝：{{ changeCount(userFollows.followeds) }}</span>
        </div>
      </div>
    </div>
    <p class="playlisy">TA的歌单</p>
    <div class="infoPlayList">
      <div
        class="playlist"
        v-for="followsPlaylist in followsPlaylist"
        :key="followsPlaylist"
      >
        <router-link
          :to="{ path: '/itemMusic', query: { id: followsPlaylist.id } }"
        >
          <img :src="followsPlaylist.coverImgUrl" />
          <p class="p1">{{ followsPlaylist.name }}</p>
          <p class="p2">{{ followsPlaylist.trackCount }}首</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {getUserPLaylist} from '@/api/infoUser'

export default {
  data() {
    return {
      id:this.$route.query.id,
      userfollows:{},
      followsplaylist:[]
    }
  },
  computed: {
    ...mapGetters(["getUserData"]),

    user() {
      return this.getUserData || {};
    },
    userFollows(){
      return this.userfollows || []
    },
    followsPlaylist(){
      return this.followsplaylist.slice(1) || []
    },
  
  
  },
  mounted() {
    this.getFollows();
    this.FollowsPlayList();
    
  },

  methods: {
    async getFollows() {
      let res = await this.$store.dispatch(
        "getFollows",
        this.user.profile.userId
      );
      console.log(res);
      this.userfollows = res.data.follow

      
    },
    async FollowsPlayList() {
      let Id = this.id
      
      let result = await getUserPLaylist(Id)
      console.log(result);
      this.followsplaylist = result.data.playlist
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
.bigImg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(70px);
}
.Top {
  position: relative;
  width: 100%;
  height: 4.5rem;
  display: flex;
  border-radius: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .icon {
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
  }
  .profileimg {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    position: absolute;
    top: 0.2rem;
  }
  .userMessage {
    z-index: -1;
    position: absolute;
    position: relative;
    width: 7rem;
    height: 3rem;
    background: rgb(232, 232, 237);
    border-radius: 0.2rem;
    top: 5%;
    .name {
      position: absolute;
      color: red;
      top: 40%;
      left: 40%;
      font-weight: 700;
      font-size: 0.3rem;
    }
    .others {
      position: absolute;
      top: 65%;
      left: 25%;
      span {
        margin-left: 0.3rem;
      }
    }
  }
 
}
.playlisy {
  position: absolute;
  top: 4.2rem;
  left: 0.3rem;
  font-weight: 700;
}
.infoPlayList {
  position: absolute;
  margin-left: 0.2rem;
  border-radius: 0.2rem;
  top: 0.1rem;
  width: 7rem;
  background: rgb(232, 232, 237);
  position: relative;
  .playlist {
    position: relative;
    width: 6rem;
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    img {
      margin-top: 0.1rem;
      margin-left: 0.1rem;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 0.1rem;
    }
    .p1 {
      position: absolute;
      left: 2rem;
      top: 0.2rem;
    }
    .p2 {
      position: absolute;
      left: 2rem;
      top: 1.1rem;
    }
  }
}
</style>
<template>
  <div>
    <div class="infoUserTop">
      <svg class="icon" aria-hidden="true" @click="$router.push('/')">
        <use xlink:href="#icon-xiangzuojiantou"></use>
      </svg>
      <img :src="user.profile.avatarUrl" class="profileimg" />
      <div class="userMessage">
        <div class="name">{{ user.profile.nickname }}</div>
        <div class="others">
          <span>{{ user.profile.follows }}关注</span>
          <span>{{ user.profile.cCount }}粉丝</span>
          <span>Lv.{{ user.level }}</span>
        </div>
      </div>
      <div class="logout">
        <p @click="Logout">退出登录</p>
      </div>
    </div>
    <div class="infoUserContent">
      <div class="contentIcon1" @click="$router.push('/myFollows')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wodehaoyou"></use>
        </svg>
        <span>我的好友</span>
      </div>
      <div class="contentIcon2" @click="$router.push('/recentlyPlay')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-goutongye_bofangjian_bofangyangshi"></use>
        </svg>
        <span>最近播放</span>
      </div>
      <div class="contentIcon3" @click="$router.push('/collect')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shoucang"></use>
        </svg>
        <span>收藏专栏</span>
      </div>
      
    </div>
    <p class="myplaylisy">我的歌单</p>
    <div class="infoUserPlayList">
      <div class="playlist" v-for="(userList) in userlist" :key="userList">
        <router-link :to="{ path: '/myItemMusic', query: { id: userList.id } }">
          <img :src="userList.coverImgUrl" />
          <p class="p1">{{ userList.name }}</p>
          <p class="p2">{{ userList.trackCount }}首</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>

import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      userplaylist:[]
    }
  },

  computed: {
    ...mapGetters(["getUserData"]),
    user() {
      return this.getUserData || {};
    },
    userlist(){
      return this.userplaylist.slice(1)
    }

  
  },
  mounted() {
    this.UserPlayList();
  },

  methods: {
    Logout() {
      this.$store.commit("deleteUser");
      localStorage.clear();
      this.$router.push("/");
    },
    async UserPlayList() {
      let result = await this.$store.dispatch(
        "getPLaylist",
        this.user.profile.userId
      );
      console.log(result);
      this.userplaylist = result.data.playlist
    
    },
  },
};
</script>
<style lang="less" scoped>
.infoUserTop {
  position: relative;
  width: 100%;
  height: 4rem;
  display: flex;
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
    height: 2.5rem;
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
  .logout {
    position: absolute;
    right: 0.2rem;
    top: 0.2rem;
    color: rgb(255, 0, 51);
  }
}
.infoUserContent {
  display: flex;
  justify-content: space-around;
  position: relative;
  position: absolute;
  top: 28%;
  margin-left: 0.2rem;
  width: 7rem;
  height: 1.8rem;
  background: rgb(232, 232, 237);
  border-radius: 0.2rem;
  color: #ff4c5e;
  .icon {
    width: 0.6rem;
    height: 0.6rem;
    margin-top: 0.2rem;
    fill: #ff4c5e;
  }

  .contentIcon1 {
    width: 0.7rem;
  }
  .contentIcon2 {
    width: 0.7rem;
  }
  .contentIcon3 {
    width: 0.7rem;
  }
  .contentIcon4 {
    width: 0.7rem;
  }

  .p1 {
    position: absolute;
    left: 2rem;
    top: 0.2rem;
  }
  .p2 {
    position: absolute;
    left: 2rem;
    top: 0.7rem;
  }
}
.myplaylisy {
  position: absolute;
  top: 5.8rem;
  left: 0.3rem;
  font-weight: 700;
  height: 10rem;
}
.infoUserPlayList {
  position: absolute;
  margin-left: 0.2rem;
  border-radius: 0.2rem;
  top: 2.4rem;
  width: 7rem;
  background: rgb(232, 232, 237);
  position: relative;
  .playlist {
    position: relative;
    width: 6rem;
    overflow: hidden;
    
    margin-top: 0.1rem;
    margin-left: 0.1rem;
    img {
      margin-top: 0.1rem;
      margin-left: 0.1rem;
      width: 1rem;
      height: 1rem;
      border-radius: 0.1rem;
    }
    .p1 {
      position: absolute;
      left: 2rem;
      top: 0.2rem;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .p2 {
      position: absolute;
      left: 2rem;
      top: 0.7rem;
    }
  }
}
</style>
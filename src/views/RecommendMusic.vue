<template>
    <div class="All">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-xiangzuojiantou"></use>
    </svg>
    <div class="title">每日推荐歌单</div>
     <div class="RecommendPlayList">
      <div class="playlist" v-for="playlist in playlist" :key="playlist">
        <router-link
          :to="{ path: '/itemMusic', query: { id: playlist.id } }"
        >
          <img :src="playlist.picUrl" />
          <p class="p1">{{ playlist.name }}</p>
          <p class="p2">{{ playlist.trackCount }}首</p>
        </router-link>
      </div>
    </div>
    </div>
</template>

<script>
import {getRecommendMusic} from '@/api/home'
export default {
    data() {
        return {
            playlist:{},
            cookie:JSON.parse(localStorage.getItem('cookies'))
        }
    },
    methods: {
        async getPlayList(){
            let result = await getRecommendMusic(this.cookie)
            console.log(result)
            if(result.data.code==200){
                this.playlist = result.data.recommend
            }
        }
    },
    mounted() {
        this.getPlayList()
    },
}
</script>

<style lang="less" scoped>

.All{
    position: relative;
    .icon {
    margin-top:.2rem ;
}
.title {
    position: absolute;
    left: 40%;
    font-weight: 900;
}
 .RecommendPlayList {
  position: absolute;
  margin-left: 0.2rem;
  border-radius: 0.2rem;
  top: 0.6rem;
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
}

</style>
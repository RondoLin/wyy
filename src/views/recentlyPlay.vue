<template>
<div>
  <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-xiangzuojiantou"></use>
      </svg>
  <p class="Top">播放历史</p>
  <img src="https://p1.music.126.net/ILPTAKXmn-cz_JLzu0W9Cg==/18228803277016756.jpg" class="bigImg">
  <div class="itemList">
      <div class="item" v-for="(item, i) in list" :key="i">
        <div class="itemLeft" @click="playMusic(i)">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div>
            <p>{{ item.data.name }}</p>
            <span v-for="(item1, index) in item.data.ar" :key="index">{{
              item1.name+ '\t'
            }}</span>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon bofang" aria-hidden="true" v-if='item.mv !=0'>
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-liebiao"></use>
          </svg>
        </div>
        <audio controls :src="`https://music.163.com/song/media/outer/url?id=${item.data.id}`"></audio>
      </div>
    </div>
</div>
</template>

<script>
import {getRecord} from '@/api/infoUser'
import {mapGetters,mapMutations} from 'vuex'

export default {
  data() {
    return {
      list:[],
      cookie:JSON.parse(localStorage.getItem('cookies'))
    }
  },
  computed:{
      ...mapGetters(["getUserData"]),
    user() {
      return this.getUserData || {};
    }
  },
  mounted() {
   
    this.getList()
    
  },
  methods: {
      playMusic(i){
        this.UpdatePlayList(this.list)
        this.updatePlayListIndex(i)
      },
    async getList(){
      let result = await getRecord(this.cookie)
      console.log(result)
    if(result.data.code == 200){
        this.list = result.data.data.list
    }

    },
      ...mapMutations(['UpdatePlayList','updatePlayListIndex'])
  },
}
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
  margin-top: .2rem;
  margin-left: .2rem;
}
.Top {
  font-weight: 900;
  font-size: .4rem;
  color: red;
  margin-left: 40%;
}
.itemList {
  margin-top: .2rem;
    width: 100%;
    .item {
      margin-top: .2rem;
      border-radius: .2rem;
       background: rgb(232, 232, 237);
      width: 100%;
      height: 2.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
          audio{
        position: absolute;
        top:50%
      }
      .itemLeft {
        width: 85%;
        height: 100%;
        display: flex;
        padding-top: .2rem;
        .leftSpan {
          display: inline-block;
          width: 0.2rem;
          text-align: center;
        
        }
        div {
          p {
            width: 4.54rem;
            height: .4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          span{
            font-weight: 400;
            font-size: .24rem;
            color: #999;
          }
          margin-left: 0.3rem;
        }
      }
      .itemRight{
        width: 20%;
        height: 100%;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        position: relative;
        .icon{
          fill: #999;
        }
         .bofang{
            position: absolute;
            left: 0;
          }
         .liebiao{
            position: absolute;
            right: 0;
          }
      }
    }
  }
</style>
import { createStore } from 'vuex'
import { getMusicLyric } from '@/api/item'
import { getEmailLogin,getqr1Login,getqr2Login,getqr3Login } from '@/api/home'
import {getUserPLaylist,getUserFollows} from '@/api/infoUser'

export default createStore({
  state: {
    playList: [{
      al: {
        id: 135727928,
        name: "烟火星辰(cover刘宇宁)",
        pic: 109951166589562610,
        picUrl: "http://p3.music.126.net/6ljiGcGvgLFnekllY5lfzA==/109951166589562609.jpg",
        pic_str: "109951166589562609"
      },
      id: 1892552292,
      ar: [{
        name: '哈利Jony'
      }]


    }],   
   
    playListIndex: 0,
    isbtnShow: true,
    detailShow: false,
    lyricList:{},
    currentTime:0,
    duration:0,
    isLogin:false,
    isFooter:true,
    token:"",
    user:{},
    key:'',
    timestamp:'',
    qrurl:'',
    qrimage:'',
    cookies:'',
  },
  getters: {
    getUserData(state,value){
      state.user = JSON.parse(localStorage.getItem('user'))
      return state.user.data || {}
    },
  //   getPLayList(state,value){
  //     state.userPlayList = JSON.parse(localStorage.getItem('userPlayList'))
  //     return state.userPlayList.data.playlist || []
  //   },
  //   getfollows(state,value){
  //     state.userFollows = JSON.parse(localStorage.getItem('userFollows'))
  //     return state.userFollows.data.follow || []
  //   },
  //   getfollowsPlaylist(state,value){
  //     state.followsPlayList = JSON.parse(localStorage.getItem('followsPlayList'))
  //     return state.followsPlayList.data.playlist || []
  //   },
  },
  mutations: {
    updateIsbtnShow(state, value) {
      state.isbtnShow = value
    },
    updatePlayList(state, value) {
      state.playList = value
    },
    UpdatePlayList(state, value) {
      state.PlayList = value
    },
    updatePlayListIndex(state, value) {
      state.playListIndex = value
    },
    updateDetailShow(state) {
      state.detailShow = !state.detailShow
    },
    updateLyricList(state,value){
      state.lyricList = value
    },
    updateCurrentTime(state,value){
      state.currentTime = value
    },
    updateDuration(state,value){
      state.duration = value
    },
    pushPlayList(state,value){
      state.playList.push(value)
    },
    updateIsLogin(state,value){
      state.isLogin = true
     
    },

    updateUser(state,value){
      state.user=value
      localStorage.setItem('user',JSON.stringify(state.user))
    },
    // updateUserPlayList(state,value){
    //   state.userPlayList=value
    //   localStorage.setItem('userPLayList',JSON.stringify(state.userPlayList))
    // },
    // updateUserFollows(state,value){
    //   state.userFollows=value
    //   localStorage.setItem('userFollows',JSON.stringify(state.userFollows))
    // },
    // updateFollowsPlayList(state,value){
    //   state.followsPlayList=value
    //   localStorage.setItem('followsPlayList',JSON.stringify(state.followsPlayList))
    // },
    updateqrKey(state,value){
      state.key = value
    },
    updateTimestamp(state,value){
      state.timestamp = value
    },
    updateqrUrl(state,value){
      state.qrurl = value
    },
    updateqrImg(state,value){
      state.qrimage = value
    },
    updateqrCookies(state,value){
      state.cookies = value
      localStorage.setItem('cookies',JSON.stringify(state.cookies))
    },
    deleteUser(state,value){
      state.user.isLogin = false;
      state.user.account = {};
      state.user.token = {};
    }
  },
  actions: {
    async getLyric(context,value){
        let result = await getMusicLyric(value)
        // console.log(result)
        context.commit('updateLyricList',result.data.lrc)
    },
    async getLogin1(context,value){
      let res=await getEmailLogin(value);
      // console.log(res);
      return res
    },
    // async getLogin2(context,value){
    //   let res = await getregisterLogin(value)
    //   console.log(res)
    //   return res
    // },
    async getqrLogin1(){
      let res1 = await getqr1Login()
      return res1
    },
    async getqrLogin2(context,value){
      let res2 = await getqr2Login(value)
      return res2
    },
    async getqrLogin3(context,value){
      let res3 = await getqr3Login(value)
      return res3
    },
    async getPLaylist(context,value){
      let res4 = await getUserPLaylist(value)
      return res4
    },
    async getFollows(context,value){
      let res5 = await getUserFollows(value)
      return res5
    },

  },
  modules: {
  }
})

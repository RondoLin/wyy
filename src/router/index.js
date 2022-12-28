import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store/index.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/itemMusic',
    name: 'itemMusic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/itemMusic.vue')
    }
  },
  {
    path: '/myItemMusic',
    name: 'myItemMusic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/myItemMusic.vue')
    }
  },
  {
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Search.vue')
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Login.vue')
    }
  },
  {
    path: '/myFollows',
    name: 'myFollows',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/myFollows.vue')
    }
  },
  {
    path: '/recentlyPlay',
    name: 'recentlyPlay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/recentlyPlay.vue')
    }
  },
  {
    path: '/collect',
    name: 'collect',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/collect.vue')
    }
  },
  {
    path: '/infoFollows',
    name: 'infoFollows',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/infoFollows.vue')
    }
  },
  {
    path: '/Radio',
    name: 'Radio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Radio.vue')
    }
  },
  {
    path: '/RadioList',
    name: 'RadioList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/RadioList.vue')
    }
  },

  {
    path: '/RecommendMusic',
    name: 'RecommendMusic',
    beforeEnter:(to,from,next)=>{
      if(store.state.isLogin || store.state.cookies || localStorage.getItem('cookies')){
        next()
      }else{
        next('/login')
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/RecommendMusic.vue')
    }
  },
  {
    path: '/PlayList',
    name: 'PlayList',
    beforeEnter:(to,from,next)=>{
      if(store.state.isLogin || store.state.cookies || localStorage.getItem('cookies')){
        next()
      }else{
        next('/login')
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/PlayList.vue')
    }
  },
  {
    path: '/collectList',
    name: 'collectlist',
    beforeEnter:(to,from,next)=>{
      if(store.state.isLogin || store.state.cookies || localStorage.getItem('cookies')){
        next()
      }else{
        next('/login')
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/collectList.vue')
    }
  },
  {
    path: '/Ranking',
    name: 'Ranking',
    beforeEnter:(to,from,next)=>{
      if(store.state.isLogin || store.state.cookies || localStorage.getItem('cookies')){
        next()
      }else{
        next('/login')
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Ranking.vue')
    }
  },
  {
    path: '/personalFM',
    name: 'personalFM',
    beforeEnter:(to,from,next)=>{
      if(store.state.isLogin || store.state.cookies || localStorage.getItem('cookies')){
        next()
      }else{
        next('/login')
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/personalFM.vue')
    }
  },
  {
    path: '/infoUser',
    name: 'InfoUser',
    beforeEnter:(to,from,next)=>{
      if(store.state.isLogin || store.state.cookies || localStorage.getItem('cookies')){
        next()
      }else{
        next('/login')
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "infoUser" */ '../views/infoUser.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if (to.path == '/login') {
    store.state.isFooter = false
  }else if(to.path == '/Video'){
    store.state.isFooter = false
  }
  else if(to.path == '/Radio'){
    store.state.isFooter = false
  }
  else if(to.path == '/RadioList'){
    store.state.isFooter = false
  }
  else if(to.path == '/recentlyPlay'){
    store.state.isFooter = false
  }
  else if(to.path == '/collect'){
    store.state.isFooter = false
  }
  else {
    store.state.isFooter = true
  }

})

export default router

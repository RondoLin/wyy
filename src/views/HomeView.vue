<template>
  <div>
    <TopNav />

    <SwiperTop />
    <iconList />
    <MusicList />

  </div>
</template>

<script>
// @ is an alias to /src

import TopNav from "../components/home/TopNav.vue";
import SwiperTop from "@/components/home/SwiperTop.vue";
import iconList from "@/components/home/iconList.vue";
import MusicList from "@/components/home/MusicList.vue";

export default {
  name: "HomeView",
  components: {
    TopNav,
    SwiperTop,
    iconList,
    MusicList
    
  },
};
</script>

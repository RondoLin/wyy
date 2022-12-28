<template>
  <div>
    <router-view />
    <footerMusic v-show="$store.state.isFooter"/>
  </div>
</template>

<script>
import footerMusic from "@/components/item/footerMusic.vue";

export default {
  components: {
    footerMusic,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.icon {
  width: 0.4rem;
  height: 0.4rem;
}
a {
  color: black;
}
</style>

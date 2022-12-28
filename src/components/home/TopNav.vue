<template>
  <div class="topNav">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-liebiao" @click="$router.push('/infoUser')"></use>
    </svg>
    <div class="topContent">
      <span @click="$router.push('/infoUser')">我的</span>
      <span class="active">发现</span>
      <span @click="$router.push('/Radio')">电台</span>
     
    </div>
    <svg class="icon" aria-hidden="true"  @click="$router.push('/search')">
      <use xlink:href="#icon-sousuo">

      </use>
    </svg>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "TopNav",
};
</script>

<style lang="less" scoped>
.topNav {
  width: 100%;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .topContent {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 0.3rem;
    .active {
      font-weight: 900;
    }
  }
}
</style>

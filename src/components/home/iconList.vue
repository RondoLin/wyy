<template>
  <div class="iconList">
    <div class="iconItem" @click="$router.push('/RecommendMusic')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem" @click="$router.push('/personalFM')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-zhibo"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem" @click="$router.push('/PlayList')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem" @click="$router.push('/Ranking')">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "iconList",
};
</script>

<style lang="less" scoped>
.iconList {
  width: 100%;
  margin-top: .5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  .iconItem {
    width: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    flex-direction: column;
    .icon{
      width: 0.8rem;
      height: 0.8rem;
      fill: red;
    }
  }
}
</style>  
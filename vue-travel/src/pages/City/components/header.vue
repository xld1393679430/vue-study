<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <span>城市选择</span>
  </div>
</template>

<script>
export default {
  name: "CityHeader",
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position relative
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  overflow hidden
  background-color $bgColor
  font-size .32rem
  .back-icon
    position absolute
    left 0
    top 0
    width .64rem
    text-align center
    font-size .4rem
    color #fff
</style>

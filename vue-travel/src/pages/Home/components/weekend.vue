<template>
  <div>
    <div class="title">周末推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array,
  },
  data () {
    return {
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl'
.title
  font-size: .3rem
  line-height: .8rem
  text-indent: 0.2rem
  background-color #eee
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 37%
  .item-img
    width: 100%
.item-info
  padding .1rem
  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()
  .item-desc
    line-height .4rem
    color #ccc
    ellipsis()
</style>

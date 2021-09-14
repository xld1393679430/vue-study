<template>
  <div>
    <div class="title">周末推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.url" alt="">
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
  data () {
    return {
      list: [
        {
          id: 1,
          url: 'https://img1.qunarzz.com/travel/poi/1612/f3/8609c55a69ecae37.jpg_640x480x70_6c171e8e.jpg',
          title: '兵马俑半日游',
          desc: '兵马俑半日游【多场次上门接/可选长恨歌/人工讲解/赠皮影】'
        },
        {
          id: 2,
          url: 'https://img1.qunarzz.com/travel/poi/1612/f3/8609c55a69ecae37.jpg_640x480x70_6c171e8e.jpg',
          title: '兵马俑半日游',
          desc: '兵马俑半日游【多场次上门接/可选长恨歌/人工讲解/赠皮影】'
        },

      ]
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl'
.title
  font-size: .3rem
  margin-top: .2rem
  line-height: .8rem
  text-indent: 0.2rem
  background-color #eee
.item-img-wrapper
  overflow hidden
  height 0
  padding-bottom 50%
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

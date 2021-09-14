<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.url" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      list: [
        {
          id: 1,
          url: 'https://imgs.qunarzz.com/p/tts6/2101/a1/1c0a59b31b18302.jpg_160x160_98041ead.jpg',
          title: '兵马俑半日游',
          desc: '兵马俑半日游【多场次上门接/可选长恨歌/人工讲解/赠皮影】'
        },
         {
          id: 2,
          url: 'https://imgs.qunarzz.com/p/tts6/2101/a1/1c0a59b31b18302.jpg_160x160_98041ead.jpg',
          title: '兵马俑半日游',
          desc: '兵马俑半日游【多场次上门接/可选长恨歌/人工讲解/赠皮影】'
        },
         {
          id: 3,
          url: 'https://imgs.qunarzz.com/p/tts6/2101/a1/1c0a59b31b18302.jpg_160x160_98041ead.jpg',
          title: '兵马俑半日游',
          desc: '兵马俑半日游【多场次上门接/可选长恨歌/人工讲解/赠皮影】'
        }
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
.item
  overflow: hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height 1.7rem
    padding 0.1rem
  .item-info
    flex 1
    padding .1rem
    overflow hidden
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
     line-height .4rem
     color #ccc
     ellipsis()
    .item-button
      line-height .44rem
      margin-top .16rem
      background-color #ff9300
      padding 0 .1rem
      border-radius .06rem
      color #fff
</style>

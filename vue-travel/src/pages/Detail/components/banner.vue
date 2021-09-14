<template>
  <div>
    <div class="banner" @click="handleClickBanner">
      <img
        class="banner-img"
        src="https://img1.qunarzz.com/vs_ceph_b2c_001/7e68cd8c-917a-44cb-a811-ba9f9992afb0.jpg_r_640x420x95_20a70b41.jpg"
        alt="banner"
      />
      <div class="banner-info">
        <div class="banner-title">
          丽江出发-跟团游
          悦享🔥小团直飞丽江+泸沽湖纯玩5日游：玉龙雪山+蓝月谷+女儿国+猪槽船
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          <span>39</span>
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" @close="handleClose" v-show="showGallary" />
  </div>
</template>

<script>
import CommonGallary from "common/gallary";
export default {
  name: "DetailBanner",
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: [
          'https://img1.qunarzz.com/vs_ceph_b2c_001/7e68cd8c-917a-44cb-a811-ba9f9992afb0.jpg_r_1280x840x95_275ba593.jpg',
          'https://img1.qunarzz.com/vs_ceph_b2c_001/1eca2c57-528f-4e21-a1b5-5dd97d236b3c.jpg_r_1280x840x95_c4351c7f.jpg'
        ]
    }
  },
  methods: {
    handleClickBanner () {
      this.showGallary = true
    },
    handleClose () {
       this.showGallary = false
    },
  },
};
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.banner
  position relative
  width 100%
  height 0
  padding-bottom 55%
  overflow hidden
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
      ellipsis()
    .banner-number
      height .38rem
      line-height .38rem
      margin-top .14rem
      padding 0 .4rem
      border-radius .2rem
      background-color rgba(0, 0, 0, .8)
      font-size .26rem
      .banner-icon
        font-size .26rem
</style>

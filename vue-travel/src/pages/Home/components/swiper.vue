<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in list" :key="item.id">
        <img
          class="swiper-img"
          :src="item.imgUrl"
          alt=""
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      list: [
        {
          id: 1,
          imgUrl: 'https://source.qunarzz.com/site/images/wns/20210909_qunar_dujia_homepage_750_192_3.jpg'
        }, {
          id: 2,
          imgUrl: 'https://source.qunarzz.com/site/images/wns/20210909_qunar_dujia_A750x192_5.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 25.6%
  background-color: #eee
  // >>> .swiper-pagination-bullet-active {
  //   background-color: red
  // }
  .swiper-img
    width: 100%
</style>

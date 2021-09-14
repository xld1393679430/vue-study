<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="list.length">
      <swiper-slide v-for="item of list" :key="item.id">
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
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 29%
  background-color: #eee
  // >>> .swiper-pagination-bullet-active {
  //   background-color: red
  // }
  .swiper-img
    width: 100%
</style>

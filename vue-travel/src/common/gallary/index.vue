<template>
  <div class="container" @click="handleClickGarray">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="gallary-img" :src="item" alt="banner" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "commonGallary",
  props: {
    imgs: {
      type: Array,
      default () {
        return [
          'https://img1.qunarzz.com/vs_ceph_b2c_001/7e68cd8c-917a-44cb-a811-ba9f9992afb0.jpg_r_1280x840x95_275ba593.jpg',
          'https://img1.qunarzz.com/vs_ceph_b2c_001/1eca2c57-528f-4e21-a1b5-5dd97d236b3c.jpg_r_1280x840x95_c4351c7f.jpg'
        ]
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // observer和observeParents参赛必须加上
        observer: true,
        observeParents: true,
      }
    }
  },
  methods: {
    handleClickGarray() {
      this.$emit('close')
    }
  },
};
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  z-index 99
  background-color #000
  .wrapper
    width 100%
    height 0
    padding-bottom 100%
    .gallary-img
      width 100%
    .swiper-pagination
      color: #fff
      bottom  -1rem
</style>

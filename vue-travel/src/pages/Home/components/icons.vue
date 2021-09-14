<template>
  <div class="icons">
    <swiper :options="swiperOptions" v-if="pages.length">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="icon" />
          </div>
          <p class="icon-desc">{{ item.name }}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array,
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height: 0
  padding-bottom: 50%
.icon
  width: 25%
  height: 0
  overflow: hidden
  padding-bottom: 25%
  float: left
  text-align: center
  .icon-img
    img
      margin: 0.15rem 0 0.15rem
      width: 60%
  .icon-desc
    color: $darkTextColor
    font-size: .3rem
    ellipsis()
</style>

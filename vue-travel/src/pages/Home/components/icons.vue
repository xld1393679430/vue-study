<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.url" alt="icon" />
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
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true
      },
      icons: [
        {
          id: 1,
          url: "https://s.qunarzz.com/homenode/images/touchheader/hotel.png",
          name: "酒店"
        },
        {
          id: 2,
          url: "https://s.qunarzz.com/homenode/images/touchheader/flight.png",
          name: "机票"
        },
        {
          id: 3,
          url: "https://s.qunarzz.com/homenode/images/touchheader/train.png",
          name: "火车票"
        },
        {
          id: 4,
          url: "https://s.qunarzz.com/homenode/images/touchheader/package.png",
          name: "度假"
        },
        {
          id: 5,
          url: "https://s.qunarzz.com/homenode/images/touchheader/package.png",
          name: "度假"
        },
        {
          id: 6,
          url: "https://s.qunarzz.com/homenode/images/touchheader/package.png",
          name: "度假"
        },
        {
          id: 7,
          url: "https://s.qunarzz.com/homenode/images/touchheader/package.png",
          name: "度假"
        },
        {
          id: 8,
          url: "https://s.qunarzz.com/homenode/images/touchheader/package.png",
          name: "度假"
        },
        {
          id: 9,
          url: "https://s.qunarzz.com/homenode/images/touchheader/package.png",
          name: "度假度假度假度假"
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
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
    ellipsis()
</style>

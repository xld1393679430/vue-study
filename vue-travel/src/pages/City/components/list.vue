<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前位置</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="city in item" :key="city.id">
            {{ city.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    cities: Object,
    hotCities: Array,
    letter: String,
  },
  mounted() {
    this.bscroll = new Bscroll(this.$refs.wrapper);
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.bscroll.scrollToElement(element)
      }
    }
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
 &:before
  border-color #ccc
 &:after
  border-color #ccc
.list
  position absolute
  top 1.8rem
  left 0
  right 0
  bottom 0
  overflow hidden
  .title
    line-height .54rem
    background-color #eee
    padding-left .2rem
    color #666
    font-size .3rem
  .button-list
    padding .1rem .6rem .1rem .1rem
    overflow hidden
    .button-wrapper
      float left
      width 33.33%
      .button
        margin .1rem
        padding .1rem 0
        text-align center
        border .02rem solid #ccc
        border-radius .06rem
  .item-list
  .item
      line-height .76rem
      color #666
      padding-left .2rem
</style>

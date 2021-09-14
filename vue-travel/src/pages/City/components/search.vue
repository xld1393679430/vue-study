<template>
  <div>
    <div class="search">
      <input
        class="search-input"
        type="text"
        placeholder="请输入城市名或拼音"
        v-model="keyword"
        autocomplete= "new-password"
      />
    </div>
    <div class="search-content" ref="search-content" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleClickCity(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没用搜索到内容
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    ...mapMutations('cityStore', ['changeCity']),
    handleClickCity (value) {
      this.changeCity(value)
      // this.$store.dispatch('changeCity', value) // 使用mapMutations y优化
      this.keyword = ''
      this.$router.push('/')
    },
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const list = []
        for(let i in this.cities) {
          this.cities[i].forEach(item => {
            const {spell, name} = item
            if (spell.indexOf(this.keyword) > -1 || name.indexOf(this.keyword) > -1) {
              list.push(item)
            }
          })
        }

        this.list = list
      }, 200)
    }
  },
  mounted () {
    this.bscroll = new Bscroll(this.$refs['search-content'], { mouseWheel: true, click: true, tap: true })
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.search
  height .72rem
  padding .1rem
  background-color $bgColor
  .search-input
    width 100%
    height  .62rem
    line-height .62rem
    padding 0 .1rem
    box-sizing border-box
    text-align center
    border-radius .06rem
    color #666
.search-content
  position absolute
  top 1.8rem
  left 0
  right 0
  bottom 0
  overflow hidden
  background-color pink
  z-index 1
  background-color #eee
  .search-item
    line-height .62rem
    padding-left .2rem
    background-color #fff
    color #666
</style>

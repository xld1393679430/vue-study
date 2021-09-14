<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleClickLetter(item)"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      currentLetter: "",
      startY: 0,
      timer: null
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (let key in this.cities) {
        letters.push(key);
      }
      return letters;
    }
  },
  updated() {
    const firstLetter = this.letters[0];
    this.startY = this.$refs[firstLetter][0].offsetTop;
  },
  methods: {
    handleClickLetter(value) {
      if (this.currentLetter === value) {
        return;
      }
      this.currentLetter = value;
      this.$emit("change", value);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const letters = this.letters;
          const startY = this.startY;
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - startY) / 20);
          if (index >= 0 && index < letters.length) {
            this.$emit("change", letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.8rem
  right 0
  bottom 0
  width .6rem
  background-color #eee
  .item
    text-align center
    line-height .44rem
    color $bgColor
</style>

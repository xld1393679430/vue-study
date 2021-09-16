<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__item" v-for="(item, index) of 5" :key="index">
      <img
        class="nearby__item__img"
        src="http://www.dell-lee.com/imgs/vue3/near.png"
        alt=""
      />

      <div class="nearby__content">
        <div class="nearby__content__title">沃尔玛</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">预售1w+</span>
          <span class="nearby__content__tag">预售1w+</span>
          <span class="nearby__content__tag">预售1w+</span>
        </div>
        <p class="nearby__content__highlight">VIP尊享满99减4元</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Nearby"
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";

.nearby {
  &__title {
    margin: 0.16rem 0 0.04rem;
    font-size: 0.18rem;
    color: $content-font-color;
    font-weight: normal;
  }
  &__item {
    display: flex;
    padding-top: 0.12rem;
    &__img {
      margin-right: 0.16rem;
      width: 0.56rem;
      height: 0.56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    border-bottom: 0.01rem solid $content-bg-color;
    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-font-color;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-font-color;
    }
    &__tag {
      margin-right: 0.16rem;
    }
    &__highlight {
      margin-top: 0.08rem;
      margin-bottom: 0;
      color: #e93b3b;
      line-height: 0.18rem;
      font-size: 0.13rem;
    }
  }
}
</style>

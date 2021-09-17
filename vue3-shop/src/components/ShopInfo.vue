<template>
  <div class="shop">
      <img class="shop__img" :src="shop.imgUrl" v-show="shop.imgUrl" alt="shop" />
      <div :class="{'shop__content': true, 'shop__content--border': showBorder}">
        <div class="shop__content__title">沃尔玛</div>
        <div class="shop__content__tags">
          <span class="shop__content__tag">月售: {{ shop.sales }}</span>
          <span class="shop__content__tag">起送: {{ shop.expressLimit }}</span>
          <span class="shop__content__tag"
            >基础运费: {{ shop.expressPrice }}</span
          >
        </div>
        <p class="shop__content__highlight">{{ shop.slogan }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "ShopInfo",
  props: {
      shop: Object,
      showBorder: {
          type: Boolean,
          default: true
      }
  },
};
</script>

<style lang="scss" scoped>
@import "../style/variables.scss";

.shop {
  display: flex;
  padding-top: 0.12rem;
  &__img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }

  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    &--border {
        border-bottom: 0.01rem solid $content-bg-color;
    }
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

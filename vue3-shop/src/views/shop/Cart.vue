<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img
          class="check__icon__img"
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          alt=""
        />
        <span class="check__icon__tag">1</span>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; 127 </span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCart",
};
</script>

<style lang="scss" scoped>
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.check {
  display: flex;
  height: .49rem;
  line-height: .49rem;
  border-top: .01rem solid #f1f1f1;
  &__icon {
    width: 0.84rem;
    position: relative;
    &__img {
      display: block;
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }
    &__tag {
        position: absolute;
        top: .04rem;
        right: .2rem;
        width: .2rem;
        height: .2rem;
        text-align: center;
        line-height: .2rem;
        transform: scale(.5, .5);
        font-size: .12rem;
        background-color: #e93b3b;
        border-radius: 50%;
        color: #fff;
    }
  }
  &__info {
    flex: 1;
    color: #333;
    font-size: 0.12rem;
    &__price {
      color: #e93b3b;
      font-size: 0.18rem;
    }
  }
  &__btn {
    width: 0.98rem;
    background-color: #4fb0f9;
    color: #fff;
    font-size: 0.14rem;
    text-align: center;
  }
}
</style>

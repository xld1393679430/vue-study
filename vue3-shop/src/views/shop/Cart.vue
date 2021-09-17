<template>
  <div>
    <div
      class="mask"
      @click="() => handleToggleCartProducts()"
      v-show="showCartProducts"
    />
    <div class="cart">
      <div class="product" v-show="showCartProducts">
        <div class="product__header">
          <div class="product__header__all">
            <span
              class="iconfont product__header__icon"
              v-html="allCheck ? '&#xe652;' : '&#xe66c;'"
              @click="() => setCartProductsCheck(shopId)"
            ></span>
            <span>全选</span>
          </div>
          <div
            class="product__header__clear"
            @click="() => clearCartProducts(shopId)"
          >
            清空购物车
          </div>
        </div>
        <template v-for="item in list">
          <div class="product__item" :key="item._id" v-if="item.count > 0">
            <div
              :class="{
                iconfont: true,
                product__item__checked: item.check,
                product__item__dis__checked: !item.check,
              }"
              v-html="item.check ? '&#xe652;' : '&#xe66c;'"
              @click="() => handleChangeProductCheck(shopId, item._id)"
            ></div>
            <img class="product__item__img" :src="item.imgUrl" alt="product" />
            <div class="product__item__detail">
              <h4 class="product__item__title">{{ item.name }}</h4>
              <p class="product__item__price">
                <span class="product__item__yen">&yen;</span>{{ item.price }}
                <span class="product__item__origin"
                  >&yen;{{ item.oldPrice }}</span
                >
              </p>
            </div>
            <div class="product__number">
              <span
                class="product__number__minus"
                @click="() => handleChangeCart(shopId, item._id, item, -1)"
                >-</span
              >
              <span class="product__number__count">{{ item.count || 0 }}</span>
              <span
                class="product__number__plus"
                @click="() => handleChangeCart(shopId, item._id, item, 1)"
                >+</span
              >
            </div>
          </div>
        </template>
      </div>
      <div class="check">
        <div class="check__icon">
          <img
            class="check__icon__img"
            src="http://www.dell-lee.com/imgs/vue3/basket.png"
            alt="basket"
            @click="() => handleToggleCartProducts()"
          />
          <span class="check__icon__tag">{{ totalCount }}</span>
        </div>
        <div class="check__info">
          总计：<span class="check__info__price">&yen; {{ totalPrice }} </span>
        </div>

        <router-link :to="`/orderConfirmation/${shopId}`">
          <div class="check__btn">
            去结算
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { useCommonCartEffect } from "./commonCartEffect";
export default {
  name: "ShopCart",
  setup() {
    const store = useStore();
    const route = useRoute();
    const { cartList, handleChangeCart } = useCommonCartEffect();
    const shopId = route.params.id;
    const showCartProducts = ref(false);

    let totalCount = computed(() => {
      const productList = cartList[shopId]?.productList;
      let count = 0;
      if (productList) {
        for (let i in productList) {
          const product = productList[i];
          count += product.count;
        }
      }
      return count;
    });

    let totalPrice = computed(() => {
      const productList = cartList[shopId]?.productList;
      let price = 0;
      if (productList) {
        for (let i in productList) {
          const product = productList[i];
          if (product.check) {
            price += product.count * product.price;
          }
        }
      }
      return price.toFixed(2);
    });

    let list = computed(() => {
      return cartList[shopId]?.productList || [];
    });

    let allCheck = computed(() => {
      const productList = cartList[shopId]?.productList;
      let isAllCheck = true;
      if (productList) {
        for (let i in productList) {
          const product = productList[i];
          if (product.count > 0 && !product.check) {
            isAllCheck = false;
            break;
          }
        }
      } else {
        isAllCheck = false;
      }
      return isAllCheck;
    });

    const handleChangeProductCheck = (shopId, productId) => {
      store.commit("changeProductCheck", { shopId, productId });
    };

    const clearCartProducts = (shopId) => {
      handleToggleCartProducts();
      store.commit("clearCartProducts", { shopId });
    };

    const setCartProductsCheck = (shopId) => {
      store.commit("setCartProductsCheck", { shopId });
    };

    const handleToggleCartProducts = () => {
      if (totalCount.value > 0) {
        showCartProducts.value = !showCartProducts.value;
      }
    };

    return {
      totalCount,
      totalPrice,
      list,
      shopId,
      allCheck,
      showCartProducts,
      handleChangeCart,
      handleChangeProductCheck,
      clearCartProducts,
      setCartProductsCheck,
      handleToggleCartProducts,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/minxins.scss";

.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: #fff;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background-color: #fff;
  &__header {
    display: flex;
    line-height: 0.52rem;
    border-bottom: 0.01rem solid #f1f1f1;
    font-size: 0.14rem;
    color: #333;
    &__all {
      width: 0.64rem;
      margin-left: 0.18rem;
    }
    &__icon {
      color: #0091ff;
      font-size: 0.2rem;
      margin-right: 0.05rem;
      vertical-align: top;
    }
    &__clear {
      flex: 1;
      text-align: right;
      margin-right: 0.16rem;
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bg-color;
    &__checked {
      color: #0091ff;
      font-size: 0.2rem;
      line-height: 0.5rem;
      margin-right: 0.2rem;
    }
    &__dis__checked {
      color: #bbb;
      font-size: 0.2rem;
      line-height: 0.5rem;
      margin-right: 0.2rem;
    }
    &__img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__title {
      margin: 0;
      font-size: 0.14rem;
      line-height: 0.2rem;
      color: #333;
      @include ellipsis;
    }
    &__price {
      margin: 0.06rem 0 0;
      font-size: 0.14rem;
      line-height: 0.2rem;
      color: #e93b3b;
    }
    &__yen {
      font-size: 0.12rem;
    }
    &__origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: #999;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: 0.12rem;
      &__count {
        font-size: 0.14rem;
      }
      &__minus,
      &__plus {
        display: inline-block;
        width: 0.18rem;
        height: 0.18rem;
        line-height: 0.2rem;
        border-radius: 50%;
        font-size: 0.2rem;
        text-align: center;
        box-sizing: border-box;
      }
      &__minus {
        border: 0.01rem solid #666;
        color: #666;
        margin-right: 0.08rem;
      }
      &__plus {
        background-color: #0091ff;
        color: $bgColor;
        margin-left: 0.08rem;
      }
    }
  }
}
.check {
  display: flex;
  height: 0.49rem;
  line-height: 0.49rem;
  border-top: 0.01rem solid #f1f1f1;
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
      left: 0.4rem;
      top: 0.02rem;
      min-width: 0.1rem;
      height: 0.24rem;
      padding: 0 0.08rem;
      line-height: 0.24rem;
      text-align: center;
      transform: scale(0.5, 0.5);
      font-size: 0.14rem;
      background-color: #e93b3b;
      border-radius: 0.1rem;
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
    font-size: 0.14rem;
    text-align: center;
  }
  a {
      color: #fff;
      text-decoration: none;
    }
}
</style>

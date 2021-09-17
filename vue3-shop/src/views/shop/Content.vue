<template>
  <div class="content">
    <div class="categary">
      <div
        v-for="item of categaries"
        :key="item.tab"
        :class="{
          categary__item: true,
          'categary__item--active': currentTab === item.tab,
        }"
        @click="handleChangeTab(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="product">
      <div class="product__item" v-for="item in list" :key="item._id">
        <img class="product__item__img" :src="item.imgUrl" alt="product" />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售 {{ item.sales }} 件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{ item.price }}
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__number">
          <span
            class="product__number__minus"
            @click="
              () => {
                handleChangeCart(shopId, item._id, item, -1, shopName);
                changeShopName(shopId, shopName);
              }
            "
            >-</span
          >
          <span class="product__number__count">{{
            cartList?.[shopId]?.productList?.[item._id]?.count || 0
          }}</span>
          <span
            class="product__number__plus"
            @click="
              () => {
                handleChangeCart(shopId, item._id, item, 1);
                changeShopName(shopId, shopName);
              }
            "
            >+</span
          >
        </div>
      </div>
    </div>

    <Toast v-show="show" :message="message" />
  </div>
</template>

<script>
import { ref, reactive, toRefs, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStore } from 'vuex'
import { useCommonCartEffect } from "./commonCartEffect";
import { get } from "../../utils/request";
import Toast, { toastConfigure } from "../../components/Toast.vue";

const categaries = [
  {
    name: "全部商品",
    tab: "all",
  },
  {
    name: "秒杀",
    tab: "seckill",
  },
  {
    name: "新鲜水果",
    tab: "fruit",
  },
];

const useToastEffect = () => {
  const { show, message, toggleToast } = toastConfigure();
  return {
    show,
    message,
    toggleToast,
  };
};

const useTabEffect = () => {
  const currentTab = ref(categaries[0].tab);
  const handleChangeTab = (tab) => {
    currentTab.value = tab;
  };

  return {
    currentTab,
    handleChangeTab,
  };
};

const useContentListEffect = (currentTab, toggleToast, shopId) => {
  const store = useStore()
  const data = reactive({ list: [] });

  const getContentList = async () => {
    toggleToast("正在加载中...", 1000);
    const result = await get(`/api/shop/${shopId}/products`, {
      tab: currentTab.value,
    });
    if (result?.errno === 0 && result?.data) {
      data.list = result.data;
    }
  };

  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', { shopId, shopName })
  }

  watchEffect(() => getContentList());

  const { list } = toRefs(data);

  return {
    list,
    changeShopName,
  };
};

export default {
  name: "ShopContent",
  props: ['shopName'],
  components: { Toast },
  setup() {
    const route = useRoute();
    const shopId = route.params.id;
    const { show, message, toggleToast } = useToastEffect();
    const { currentTab, handleChangeTab } = useTabEffect();
    const { list, changeShopName } = useContentListEffect(currentTab, toggleToast, shopId);
    const { cartList, handleChangeCart } = useCommonCartEffect();

    return {
      show,
      message,
      categaries,
      currentTab,
      list,
      cartList,
      shopId,
      handleChangeCart,
      handleChangeTab,
      changeShopName,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/minxins.scss";

.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: 0.5rem;
  display: flex;
}
.categary {
  overflow-y: scroll;
  width: 0.76rem;
  height: 100%;
  background-color: $content-bg-color;
  &__item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.14rem;
    color: #333;
    &--active {
      background-color: #fff;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;
  height: 100%;
  &__item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bg-color;
    &__img {
      width: 0.68rem;
      height: 0.68rem;
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
    &__sales {
      margin: 0.06rem 0;
      font-size: 0.12rem;
      line-height: 0.16rem;
      color: #333;
    }
    &__price {
      margin: 0;
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
        font-size: .14rem;
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
</style>

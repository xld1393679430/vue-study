<template>
  <div class="wrapper">
    <div class="search">
      <div @click="handleBack" class="iconfont search__back">&#xe608;</div>
      <div class="search__content">
        <span class="iconfont search__content__icon">&#xe657;</span>
        <input class="search__content__input" placeholder="请输入商品名称" />
      </div>
    </div>
    <ShopInfo :shop="shop" :showBorder="false" />
    <ShopContent :shopName="shop.name" />
    <ShopCart />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import ShopInfo from "../../components/ShopInfo.vue";
import ShopContent from "./Content.vue"
import ShopCart from './Cart.vue'
import { get } from "../../utils/request";

const useShopInfoEffect = () => {
  const route = useRoute();
  const data = reactive({ shop: {} });
  const { shop } = toRefs(data);
  const getShopInfo = async () => {
    const result = await get(`/api/shop/${route.params.id}`);
    if (result?.errno === 0 && result?.data) {
      data.shop = result.data;
    }
  };

  return {
    shop,
    getShopInfo,
  };
};

const useBackEffect = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return {
    handleBack,
  };
};

export default {
  name: "Shop",
  components: { ShopInfo, ShopContent, ShopCart },
  setup() {
    const { shop, getShopInfo } = useShopInfoEffect();
    const { handleBack } = useBackEffect();
    getShopInfo();

    return { shop, handleBack };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";

.wrapper {
  padding: 0 0.18rem;
}

.search {
  display: flex;
  margin: 0.14rem 0 0.04rem;
  line-height: 0.32rem;
  &__back {
    height: 0.32rem;
    width: 0.3rem;
    font-size: 0.24rem;
    color: #b6b6b6;
  }
  &__content {
    display: flex;
    flex: 1;
    background-color: $content-bg-color;
    border-radius: 0.16rem;
    &__icon {
      width: 0.44rem;
      text-align: center;
      color: #b7b7b7;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: 0.2rem;
      border: none;
      outline: none;
      background: none;
      height: 0.32rem;
      color: $content-font-color;
      font-size: 0.14rem;
      &::placeholder {
        color: $content-font-color;
      }
    }
  }
}
</style>

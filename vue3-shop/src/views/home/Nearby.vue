<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link
      v-for="(item, index) of list"
      :key="index"
      :to="`/shop/${item._id}`"
    >
      <ShopInfo :shop="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import { get } from "../../utils/request";
import ShopInfo from "../../components/ShopInfo.vue";
export default {
  name: "Nearby",
  components: {
    ShopInfo,
  },
  setup() {
    let list = ref([]);
    const getData = async () => {
      const result = await get("/api/shop/hot-list");
      console.log(result);
      if (result?.errno === 0 && result?.data.length) {
        list.value = result.data;
      }
    };

    getData();

    return {
      list,
    };
  },
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
  a {
    text-decoration: none;
  }
}
</style>

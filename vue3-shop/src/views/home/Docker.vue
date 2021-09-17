<template>
  <div class="docker">
    <div
      v-for="(item, index) of dockerList"
      :class="{ docker__item: true, 'docker__item--active': index === current }"
      :key="item.text"
    >
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon"></div>
        <div class="docker__title">{{ item.text }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Docker",
  props: ["current"],
  setup() {
    const dockerList = [
      {
        icon: "&#xe745;",
        text: "首页",
        to: { name: "Home" },
      },
      {
        icon: "&#xe638;",
        text: "购物车",
        to: { name: "CartList" },
      },
      {
        icon: "&#xe636;",
        text: "订单",
        to: { name: "CartList" },
      },
      {
        icon: "&#xe612;",
        text: "我的",
        to: { name: "My" },
      },
    ];

    return {
      dockerList,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
.docker {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 0.18rem;
  width: 100%;
  height: 0.49rem;
  box-sizing: border-box;
  border-top: 0.01rem solid $content-bg-color;
  &__item {
    flex: 1;
    text-align: center;
    a {
      color: $content-font-color;
      text-decoration: none;
    }
    &--active {
      a {
        color: #1fa4fc;
      }
    }
    .iconfont {
      margin: 0.07rem 0 0.02rem;
      font-size: 0.18rem;
    }
  }
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>

<template>
  <div>
    <div class="position">
      <span class="iconfont position__icon">&#xe64f;</span>
      <span>上海长宁区</span>
      <span class="iconfont position__notice">&#xe7e5;</span>
    </div>
    <div class="search">
      <input class="search__input" type="text" placeholder="搜索内容">
    </div>
    <div class="banner">
      <img
        class="banner__img"
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
        alt="banner"
      />
    </div>

    <div class="icons">
      <div class="icons__item" v-for="(item, index) of iconList" :key="index">
        <img
          :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
          alt="图片"
          class="icons__item__img"
        />
        <p class="icons__item__desc">{{ item.desc }}</p>
      </div>
    </div>

    <div class="gap"></div>
  </div>
</template>

<script>
export default {
  name: "StaticPart",
  setup() {
    const iconList = [
      {
        imgName: "超市",
        desc: "超市便利",
      },
      {
        imgName: "菜市场",
        desc: "菜市场",
      },
      {
        imgName: "水果店",
        desc: "水果店",
      },
      {
        imgName: "鲜花",
        desc: "鲜花",
      },
      {
        imgName: "医药健康",
        desc: "医药健康",
      },
      {
        imgName: "家居",
        desc: "家居时尚",
      },
      {
        imgName: "蛋糕",
        desc: "蛋糕",
      },
      {
        imgName: "签到",
        desc: "签到",
      },
      {
        imgName: "大牌免运",
        desc: "大牌免运",
      },
      {
        imgName: "红包",
        desc: "红包",
      },
    ];

    return {
      iconList,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../style/variables.scss";
@import "../../style/minxins.scss";

.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  font-size: 0.16rem;
  line-height: 0.22rem;
  @include ellipsis;
  color: $content-font-color;
  font-size: 0.14rem;
  .position__icon {
    position: relative;
    top: 0.01rem;
    font-size: 0.2rem;
  }
  .position__notice {
    position: absolute;
    top: 0.17rem;
    right: 0;
    font-size: 0.2rem;
  }
}
.search {
  margin-bottom: 0.12rem;
  line-height: 0.32rem;
  background-color: $content-bg-color;
  color: #b7b7b7;
  border-radius: 0.16rem;
  font-size: 0.14rem;
  padding: 0 0.25rem;
  &__input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}

.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }
    &__desc {
      text-align: center;
      margin: 0.06rem 0 0.16rem;
      color: $content-font-color;
    }
  }
}

.gap {
  height: 0.1rem;
  background-color: $content-bg-color;
  margin: 0 -0.18rem;
}
</style>

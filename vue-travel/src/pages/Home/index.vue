<template>
  <div>
    <home-header />
    <home-swiper :list="swiperList" />
    <home-icons :list="iconList" />
    <home-recommend :list="recommendList" />
    <home-weekend :list="weekendList" />
  </div>
</template>

<script>
// import HomeHeader from "./components/header";
import HomeSwiper from "./components/swiper";
import HomeIcons from "./components/icons";
import HomeRecommend from "./components/recommend";
import HomeWeekend from "./components/weekend";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    HomeHeader: () => import('./components/header'),
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      lastCity: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  computed: {
    ...mapState({
      city: state => state.cityStore.city
    })
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeData();
  },
  activated() {
    console.log("activated");
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeData();
    }
  },
  methods: {
    getHomeData() {
      axios.get(`/static/mock/index.json?city=${this.city}`).then(res => {
        // axios.get(`/api/index.json?city=${this.city}`).then(res => {
        if (res.data.ret && res.data.data) {
          const {
            city,
            swiperList,
            iconList,
            recommendList,
            weekendList
          } = res.data.data;
          this.swiperList = swiperList;
          this.iconList = iconList;
          this.recommendList = recommendList;
          this.weekendList = weekendList;
        }
      });
    }
  }
};
</script>

<style scoped></style>

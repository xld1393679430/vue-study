<template>
  <div>
    <div class="wrapper">
      <StaticPart />
      <Nearby />
    </div>
    <Docker :current="0" />
  </div>
</template>

<script>
import StaticPart from "./StaticPart.vue";
import Nearby from "./Nearby.vue";
import Docker from "./Docker.vue";
export default {
  name: "Home",
  setup() {},
  components: {
    StaticPart,
    Nearby,
    Docker,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0.5rem;
  padding: 0 0.18rem 0.3rem;
  overflow-y: auto;
}
</style>

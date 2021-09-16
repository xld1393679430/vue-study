<template>
  <div>
    <span>current Name: {{ name }}</span>
    <button @click="handleChangeName">改变store里的name</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { toRefs } from "vue";
export default {
  name: "ChangeName",
  setup() {
    const store = useStore();
    const { name } = toRefs(store.state);
    const handleChangeName = () => {
        // store.dispatch('changeName', 'vue@next')
        store.commit('changeName', 'vue@next')
    };
    return {
      name,
      handleChangeName,
    };
  },
};
</script>

<style></style>

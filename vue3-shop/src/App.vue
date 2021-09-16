<template>
  <div>
    <div>
      <input type="text" v-model="inputValue" />
      <button @click="handleSubmit">提交</button>
    </div>
    <ul>
      <li v-for="(item, index) of list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>

import { ref, reactive } from 'vue'
export default {
  name: "App",
  setup () {
    const inputValue = ref('')
    const list = reactive([])
    const handleSubmit = () => {
      list.push(inputValue.value)
      inputValue.value = ''
    }

    return {
      inputValue,
      list,
      handleSubmit
    }
  }
};
</script>

<style>
</style>

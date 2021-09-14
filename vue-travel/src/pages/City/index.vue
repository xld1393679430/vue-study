<template>
  <div>
    <city-header />
    <city-search />
  </div>
</template>

<script>
import CityHeader from './components/header.vue'
import CitySearch from './components/search.vue'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style>

</style>

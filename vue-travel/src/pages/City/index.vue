<template>
  <div>
    <city-header />
    <city-search :cities='cities' />
    <city-list :cities='cities' :hotCities='hotCities' :letter='letter' />
    <city-alphabet :cities='cities' @change="handleLetterChange" />
  </div>
</template>

<script>
import CityHeader from './components/header.vue'
import CitySearch from './components/search.vue'
import CityList from './components/list.vue'
import CityAlphabet from './components/alphabet.vue'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  mounted () {
    this.getCityData()
  },
  methods: {
    getCityData () {
      axios.get('/static/mock/city.json').then(res => {
      // axios.get('/api/city.json').then(res => {
        if (res.data.ret && res.data.data) {
          const { cities, hotCities} = res.data.data
          this.cities = cities
          this.hotCities = hotCities
        }
      })
    },
    handleLetterChange (value) {
      this.letter = value
    }
  }
}
</script>

<style>

</style>

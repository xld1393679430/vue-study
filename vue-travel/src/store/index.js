import Vue from 'vue'
import Vuex from 'vuex'
import city from './city'
import student from './student'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cityStore: city,
    studentStore: student
  }
})

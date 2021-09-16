import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChangeName from '../views/ChangeName.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/changeName',
    name: 'ChangeName',
    component: ChangeName
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

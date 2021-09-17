import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/register/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter(to, from, next) {
      const isLogin = localStorage.isLogin
      if (isLogin) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }, {
    path: '/shop/:id',
    name: 'Shop',
    // !!! 异步组件加载 !!!
    component: () => import( /* webpackChunkName: "shop" */ '../views/shop/Shop.vue')
  }, 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isLoginorRegister = name === 'Login' || name === 'Register'
  if (isLogin || isLoginorRegister) {
    next()
  } else {
    next({ name: 'Login' })
  }
  next()
})

export default router

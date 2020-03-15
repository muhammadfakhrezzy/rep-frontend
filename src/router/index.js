import Vue from 'vue'
import VueRouter from 'vue-router'
import navbar from '@/components/navbar/Navbar'
import login from '@/components/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Navbar',
    component: navbar
  },
  {
    path: '/login',
    name: 'Login',
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

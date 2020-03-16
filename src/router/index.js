import Vue from 'vue'
import VueRouter from 'vue-router'
import navbar from '@/components/navbar/Navbar'
import login from '@/components/views/Login'
import dashboardView from '@/components/views/DashboardView'
import dailyList from '@/components/views/DailyQuest'
import dailyAbsensi from '@/components/views/DailyAbsensi'
import dailyComplete from '@/components/views/DailyComplete'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Navbar',
    component: navbar,
    children: [
      {    
        path: '/dashboard',
        component: dashboardView
      },
      {
        path: 'daily',
        component: dailyList
      },
      {
        path: 'dailyAbsensi',
        component: dailyAbsensi
      },
      {
        path: 'dailyComplete',
        component: dailyComplete
      }
    ]
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

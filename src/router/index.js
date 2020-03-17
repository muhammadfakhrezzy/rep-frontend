import Vue from 'vue'
import VueRouter from 'vue-router'
import navbar from '@/components/navbar/Navbar'
import login from '@/components/views/Login'
import dashboardView from '@/components/views/DashboardView'
import dailyList from '@/components/views/DailyQuest'
import dailyAbsensi from '@/components/views/daily-missions/DailyAbsensi'
import dailyComplete from '@/components/views/DailyComplete'
import dailyBBC from '@/components/views/daily-missions/DailyBBC'
import dailyCermi from '@/components/views/daily-missions/DailyCermi'
import dailyLTAI from '@/components/views/daily-missions/DailyLTAI'
import dailyShare from '@/components/views/daily-missions/DailyShare'
import dailyVLC from '@/components/views/daily-missions/DailyVLC'
import mainQuest from '@/components/views/MainQuest'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Navbar',
        component: navbar,
        children: [
            {
                path: '/',
                component: dashboardView
            },
            {    
                path: '/dashboard',
                component: dashboardView
            },
            {
                path: 'daily',
                component: dailyList,
            },
            {
                path: 'dailyabsensi',
                component: dailyAbsensi
            },
            {
                path: 'dailybbc',
                component: dailyBBC
            },
            {
                path: 'dailycermi',
                component: dailyCermi
            },
            {
                path: 'dailyltai',
                component: dailyLTAI
            },
            {
                path: 'dailyshare',
                component: dailyShare
            },
            {
                path: 'dailyvlc',
                component: dailyVLC
            },
            {
                path: 'dailyComplete',
                component: dailyComplete
            },
            {
                path: 'main',
                component: mainQuest
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

import Vue from 'vue'
import VueRouter from 'vue-router'
import navbar from '@/components/navbar/Navbar'
import login from '@/components/login/Login'
import dashboardView from '@/components/views/DashboardView'

import dailyList from '@/components/views/daily-quest/DailyList'
import dailyComplete from '@/components/views/daily-quest/DailyComplete'
import dailyAbsensi from '@/components/views/daily-quest/DailyAbsensi'
import dailyBBC from '@/components/views/daily-quest/DailyBBC'
import dailyCermi from '@/components/views/daily-quest/DailyCermi'
import dailyLTAI from '@/components/views/daily-quest/DailyLTAI'
import dailyShare from '@/components/views/daily-quest/DailyShare'
import dailyVLC from '@/components/views/daily-quest/DailyVLC'

import mainList from '@/components/views/main-quest/MainList'
import mainComplete from '@/components/views/main-quest/MainComplete'
import mainS6 from '@/components/views/main-quest/MainS6'
import mainS5 from '@/components/views/main-quest/MainS5'
import mainS4 from '@/components/views/main-quest/MainS4'
import mainS3 from '@/components/views/main-quest/MainS3'
import mainS2 from '@/components/views/main-quest/MainS2'
import mainsNondit from '@/components/views/main-quest/MainNondit'
import mainsDitlabmas from '@/components/views/main-quest/MainDitlabmas'
import mainsScopus from '@/components/views/main-quest/MainScopus'

import extraList from '@/components/views/extra-quest/ExtraList'
import extraComplete from '@/components/views/extra-quest/ExtraComplete'
import extraSpecial from '@/components/views/extra-quest/ExtraSpecial'

import secretList from '@/components/views/secret-quest/SecretList'
import secretComplete from '@/components/views/secret-quest/SecretComplete'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
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

            // Daily Quest
            {
                path: 'daily',
                component: dailyList,
            },
            {
                path: 'dailyComplete',
                component: dailyComplete
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


            // Main Quest
            {
                path: 'main',
                component: mainList
            },
            {
                path: 'maincomplete',
                component: mainComplete
            },
            {
                path: 'mains6',
                component: mainS6
            },
            {
                path: 'mains5',
                component: mainS5
            },
            {
                path: 'mains4',
                component: mainS4
            },
            {
                path: 'mains3',
                component: mainS3
            },
            {
                path: 'mains2',
                component: mainS2
            },
            {
                path: 'mainnondit',
                component: mainsNondit
            },
            {
                path: 'mainditlabmas',
                component: mainsDitlabmas
            },
            {
                path: 'mainscopus',
                component: mainsScopus
            },


            // Extra Quest
            {
                path: 'extra',
                component: extraList
            },
            {
                path: 'extracomplete',
                component: extraComplete
            },
            {
                path: 'extraspecial',
                component: extraSpecial
            },


            // Secret Quest
            {
                path: 'secret',
                component: secretList
            },
            {
                path: 'secretcomplete',
                component: secretComplete
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

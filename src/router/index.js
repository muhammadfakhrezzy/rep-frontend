import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/components/login/Login'

import UserNavbar from '@/components/user/navbar/UserNavbar'
import UserOverview from '@/components/user/profile/UserOverview'
import helpCenter from '@/components/user/help-center/HelpCenter'
import whyRep from '@/components/user/why-rep/WhyRep'

import rankDaily from '@/components/user/rank/RankDaily'
import rankWeekly from '@/components/user/rank/RankWeekly'
import rankMonthly from '@/components/user/rank/RankMonthly'
import rankGlobal from '@/components/user/rank/RankGlobal'
import rankAll from '@/components/user/rank/RankAll'

import dailyList from '@/components/user/views/daily-quest/DailyList'
import dailyComplete from '@/components/user/views/daily-quest/DailyComplete'
import dailyAbsensi from '@/components/user/views/daily-quest/DailyAbsensi'
import dailyBBC from '@/components/user/views/daily-quest/DailyBBC'
import dailyCermi from '@/components/user/views/daily-quest/DailyCermi'
import dailyLTAI from '@/components/user/views/daily-quest/DailyLTAI'
import dailyShare from '@/components/user/views/daily-quest/DailyShare'
import dailyVLC from '@/components/user/views/daily-quest/DailyVLC'

import mainList from '@/components/user/views/main-quest/MainList'
import mainComplete from '@/components/user/views/main-quest/MainComplete'
import mainS6 from '@/components/user/views/main-quest/MainS6'
import mainS5 from '@/components/user/views/main-quest/MainS5'
import mainS4 from '@/components/user/views/main-quest/MainS4'
import mainS3 from '@/components/user/views/main-quest/MainS3'
import mainS2 from '@/components/user/views/main-quest/MainS2'
import mainsNondit from '@/components/user/views/main-quest/MainNondit'
import mainsDitlabmas from '@/components/user/views/main-quest/MainDitlabmas'
import mainsScopus from '@/components/user/views/main-quest/MainScopus'

import extraList from '@/components/user/views/extra-quest/ExtraList'
import extraComplete from '@/components/user/views/extra-quest/ExtraComplete'
import extraSpecial from '@/components/user/views/extra-quest/ExtraSpecial'

import secretList from '@/components/user/views/secret-quest/SecretList'
import secretComplete from '@/components/user/views/secret-quest/SecretComplete'
import store from '../store'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: UserNavbar,
        meta: { user: true },
        children: [
            {
                path: '/',
                component: () => import('@/components/user/rank/RankDaily')
            },
            {
                path: 'myoverview',
                component: UserOverview
            },


            {
                path: 'helpcenter',
                component: helpCenter
            },
            {
                path: 'whyrep',
                component: whyRep
            },


            // Ranking
            {
                path: 'dailyrank',
                component: () => import('@/components/user/rank/RankDaily')
            },
            {
                path: 'weeklyrank',
                component: rankWeekly
            },
            {
                path: 'monthlyrank',
                component: rankMonthly
            },
            {
                path: 'globalrank',
                component: rankGlobal
            },
            {
                path: 'allranking',
                component: rankAll
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
    },
    {
        path: '/admin',
        component: () => import('@/components/admin/navbar/AdminNavbar'),
        children: [
            {
                path: 'choose',
                component: () => import('@/components/admin/views/ChooseDifficulty')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

const waitForStorageToBeReady = async(to, from, next) => {
    await store.restored
    next()
}
router.beforeEach(waitForStorageToBeReady)

router.beforeEach((to, from, next) => {
	if(to.matched.some(record => record.meta.user)) {
		if (store.state.token) {
			next()
			return
		}
		next('/login') 
    }
    else if(to.matched.some(record => record.meta.admin)){
        if (store.state.token) {
            next()
            return
        }
        next('/login')
    }
	else {
		next() 
	}
})

export default router

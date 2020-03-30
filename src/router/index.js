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
import dailyStart from '@/components/user/views/daily-quest/DailyStart'
import dailyComplete from '@/components/user/views/daily-quest/DailyComplete'

import mainList from '@/components/user/views/main-quest/MainList'
import mainComplete from '@/components/user/views/main-quest/MainComplete'
import mainsStart from '@/components/user/views/main-quest/MainStart'

import extraList from '@/components/user/views/extra-quest/ExtraList'
import extraComplete from '@/components/user/views/extra-quest/ExtraComplete'
import extraStart from '@/components/user/views/extra-quest/ExtraStart'

import secretList from '@/components/user/views/secret-quest/SecretList'
import secretComplete from '@/components/user/views/secret-quest/SecretComplete'
import secretStart from '@/components/user/views/secret-quest/SecretStart'
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
                path: 'daily/:quest_name/:quest_id',
                name: 'questDailyStart',
                component: dailyStart
            },
            {
                path: 'dailycomplete',
                component: dailyComplete
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
                path: 'main/:quest_name/:quest_id',
                name: 'questMainStart',
                component: mainsStart
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
                path: 'extra/:quest_name/:quest_id',
                name: 'questExtraStart',
                component: extraStart
            },


            // Secret Quest
            {
                path: 'secret',
                component: secretList
            },
            {
                path: 'secretcomplete',
                component: secretComplete
            },
            {
                path: '/secret/:quest_name/:quest_id',
                name: 'questSecretStart',
                component: secretStart
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
                path: 'createdifficulty',
                component: () => import('@/components/admin/views/CreateDifficulty')
            },
            {
                path: 'choosedifficulty',
                component: () => import('@/components/admin/views/ChooseDifficulty')
            },
            {
                path: 'createquest',
                component: () => import('@/components/admin/views/CreateQuest')
            },
            {
                path: 'allquest',
                component: () => import('@/components/admin/views/AllQuest')
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

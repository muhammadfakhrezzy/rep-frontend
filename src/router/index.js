import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/components/login/Login'
import chart from '@/components/charts'

import UserNavbar from '@/components/user/navbar/UserNavbar'
import UserOverview from '@/components/user/profile/UserOverview'
import helpCenter from '@/components/user/help-center/HelpCenter'
import contactUs from '@/components/user/help-center/ContactUs'
import Answered from '@/components/user/help-center/Answered'
import whyRep from '@/components/user/why-rep/WhyRep'
import Construction from '@/components/user/views/Construction'
import Level from '@/components/user/views/ShowLevel'
import AdminNavbar from '@/components/admin/navbar/AdminNavbar'

import rankDaily from '@/components/user/rank/RankDaily'
import rankWeekly from '@/components/user/rank/RankWeekly'
import rankMonthly from '@/components/user/rank/RankMonthly'
import rankGlobal from '@/components/user/rank/RankGlobal'
import rankAll from '@/components/user/rank/RankAll'

import rankLogin from '@/components/user/views/Rank/RankLogin'
import myHistory from '@/components/user/views/Rank/MyHistory'
import Likes from '@/components/user/views/Rank/Likes'

import dailyList from '@/components/user/views/daily-quest/DailyList'
import dailyStart from '@/components/user/views/daily-quest/DailyStart'
import dailyComplete from '@/components/user/views/daily-quest/DailyComplete'
import dailyReview from '@/components/user/views/daily-quest/DailyReview'

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
                path: '/profile/:id/:email',
                name: 'view-profile',
                component: () => import('@/components/user/profile/ViewProfile')
            },


            {
                path: 'helpcenter',
                component: helpCenter
            },

            {
                path:'contactus',
                component:contactUs
            },

            {
                path: 'whyrep',
                component: whyRep
            },
            {
                path:'chart',
                component:chart
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
            {
                path: 'dailyreview',
                component: dailyReview
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
            },
            {
                path: 'Answered',
                component: Answered
            },
            {
                path:'underConstruction',
                component:Construction
            },
            {
                path:'showlevel',
                component:Level
            },

            //Rank
            {
                path:'ranklogin',
                component:rankLogin
            },
            {
                path:'myhistory',
                component:myHistory
            },
            {
                path:'likes',
                component:Likes
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
        component: AdminNavbar,
        meta: { user: true },
        children: [
            {
                path: '/admin',
                component: () => import('@/components/admin/views/AllPlayers')
            },
            {
                path: 'createdifficulty',
                component: () => import('@/components/admin/views/Difficulty/CreateDifficulty')
            },
            {
                path: 'choosedifficulty',
                component: () => import('@/components/admin/views/Difficulty/ChooseDifficulty')
            },
            {
                path: 'createquest',
                component: () => import('@/components/admin/views/Quests/CreateQuest')
            },
            {
                path: 'allquest',
                component: () => import('@/components/admin/views/Quests/AllQuest')
            },
            {
                path: 'favquest',
                component: () => import('@/components/admin/views/Quests/FavQuest')
            },
            {
                path: 'listdifficulty',
                component: () => import('@/components/admin/views/Difficulty/ListDifficulty')
            },
            {
                path: 'faqadmin',
                component: () => import('@/components/admin/views/FAQ/FAQAdmin')
            },
            {
                path: 'adduser',
                component: () => import('@/components/admin/views/User/AddUser')
            },
            {
                path: 'user',
                component: () => import('@/components/admin/views/User/AllUser')
            },
            {
                path: 'allplayers',
                component: () => import('@/components/admin/views/AllPlayers')
            },
            {
                path: 'showquests',
                component: () => import('@/components/admin/views/ShowQuests')
            },
            {
                path: 'showecp',
                component: () => import('@/components/admin/views/ShowECP')
            },
            {
                path: 'showlevel',
                component: () => import('@/components/admin/views/ShowLevel')
            },
            {
                path: 'likes',
                component: () => import('@/components/admin/views/Likes/Daily')
            },
            {
                path: 'adminrank',
                component: () => import('@/components/admin/views/Rank/RankLogin')
            },
            {
                path: 'adminhistory',
                component: () => import('@/components/admin/views/Rank/MyHistory')
            },
            {
                path: 'construction',
                component: () => import('@/components/user/views/Construction')
            },
            {
                path: 'dailyrank',
                component: () => import('@/components/admin/views/PlayerRank/AdminRankDaily')
            },
            {
                path: 'weeklyrank',
                component: () => import('@/components/admin/views/PlayerRank/AdminRankWeekly')
            },
            {
                path: 'monthlyrank',
                component: () => import('@/components/admin/views/PlayerRank/AdminRankMonthly')
            },
            {
                path: 'globalrank',
                component: () => import('@/components/admin/views/PlayerRank/AdminRankGlobal')
            },
            {
                path: 'allranking',
                component: rankAll
            },
        ]
    },
    

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

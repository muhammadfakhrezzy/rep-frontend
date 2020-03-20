import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        status: '',
        token: '',
        userId: ''
    },
    mutations: {
        AUTH_LOAD(state) {
            state.status = 'loading'
        },
        AUTH_ERROR(state) {
            state.status = 'error'
        }
    },
    actions: {
        ssoGoogle({commit}, googleToken) {
            commit('AUTH_LOAD')
            console.log(googleToken)
            axios.post("https://dytlan.alphabeticubator.id/api/auth/callback/google", googleToken)
                .then(res => {
                    console.log(res)
                })
                .catch(error => {
                    console.log(error)
                    console.log(error.response)
                    commit('AUTH_ERROR')
                })
        },
        userGet() {
            axios.get('http://1acfb946.ngrok.io/rep-backend/public/api/superuser/users')
        },
        logout(){
            axios.post('http://1acfb946.ngrok.io/rep-backend/public/api/superuser/users')
        }
    },
    modules: {
    }
})

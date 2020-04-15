import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersistence({
    key: 'vuex',
    storage: window.localStorage
})

export default new Vuex.Store({
    state: {
        status: '',
        token: '',
        user: {},
        like: false,
        dislike: false
    },
    mutations: {
        AUTH_LOAD(state) {
            state.status = 'loading'
        },
        AUTH_ERROR(state) {
            state.status = 'error'
        },
        AUTH_SUCCESS(state, token) {
            state.status = 'success'
            state.token = token
        },
        AUTH_LOGOUT(state) {
            state.token = '',
            state.user = {},
            state.status = 'logout'
        },
        AUTH_USER(state, userData) {
            state.user.id = userData.Detail_user.id
            state.user.name = userData.Detail_user.name
            state.user.email = userData.Detail_user.email
            state.user.photo = userData.Media[0].path
        },
        BEBAS(state){
            state.like = true
        },
        SERAH(state){
            state.dislike = true
        }
    },
    actions: {
        button({commit}) {
            commit('BEBAS')
        },
        tombol({commit}) {
            commit('SERAH')
        },
        ssoGoogle({commit}, access) {
            commit('AUTH_LOAD')
            axios.post("https://dev.alphabetincubator.id/rep-backend/public/api/auth/callback/google", access)
                .then(response => {
                    console.log(response)
                    commit('AUTH_SUCCESS', response.data.access_token)
                    axios.defaults.headers.common["Authorization"] = 'Bearer ' + response.data.access_token
                    Swal.fire({
                        position: 'top',
                        imageUrl: "../assets/REP logo.png",
                        imageSize: '600x600',
                        title: 'Welcome to REP',
                        text: 'Login Successful',
                        showConfirmButton: false,
                        timer: 3500
                    })
                    router.push('/')
                })
                .catch(error => {
                    console.log(error)
                    console.log(error.response)
                    commit('AUTH_ERROR')
                })
        },
        addDataUser({commit}, data) {
            commit('AUTH_USER', data)
        },
        logout({commit}){
            axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/auth/logout')
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
            commit('AUTH_LOGOUT')
            axios.defaults.headers.common["Authorization"] = ''
            router.push('/login')
        }
    },
    plugins: [vuexLocalStorage.plugin],
    getters: {
        isLogin: state => {return state.token}
    },
    modules: {
    }
})

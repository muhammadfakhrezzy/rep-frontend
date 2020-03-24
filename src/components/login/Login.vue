<style>
    .infi-animation{
        animation: loader 1.5s infinite;
        animation-timing-function: linear;
    }
    @keyframes loader {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>

<template>
    <div class="hold-transition login-page">
        <div class="login-box">
            <div class="login-logo">
                <a href="../../index2.html"><b>REP</b> Login</a>
            </div>

            <div class="card">
                <div class="card-body login-card-body">
                    <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure" :logoutButton="false" class="social-auth-links text-center mb-3">
                        <a href="#" class="btn btn-block btn-danger p-3">
                            <font-awesome-icon v-if="!load" :icon="['fab', 'google']" class="mr-2" /> 
                            <font-awesome-icon v-else :icon="['fas', 'spinner']" class="mr-2 infi-animation" />
                            <p v-if="!load" class="d-inline">Login using Rinfo</p>
                            <p v-else class="d-inline">Loading...</p>
                        </a>
                    </GoogleLogin>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import GoogleLogin from '@/plugin/sso-google/GoogleLogin'
const CLIENT_ID = "1040958847983-mt1h043vfn6cs6ts1akmfgb2f3ecvm72.apps.googleusercontent.com"
export default {
    data() {
        return {
            email: "",
            password: "",
            params: {
                client_id: CLIENT_ID
            },
            renderParams: {
                width: 250,
                height: 50,
                longtitle: true
            }
        }
    },
    components: {
        GoogleLogin
    },
    methods: {
        onSuccess(googleUser) {
            const accessToken = {
                access_token: googleUser.uc.access_token
            }
            console.log(accessToken)
            this.$store.dispatch("ssoGoogle", accessToken)
        },
        onFailure(error) {
            console.log(error);
        }
    },
    computed: {
        load() {
            return this.$store.state.status === 'loading'
        }
    },
    created() {
        if(!this.$store.getters.isLogin){
            return
        }
        this.$router.push('/')
    }
}
</script>
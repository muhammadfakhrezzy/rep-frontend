<template>
    <div class="hold-transition login-page">
        <div class="login-box">
            <div class="login-logo">
                <a href="../../index2.html"><b>REP</b> Login</a>
            </div>

            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Opss.. Anda belum login</p>
                    <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure" :logoutButton="false" class="social-auth-links text-center mb-3">
                        <a href="#" class="btn btn-block btn-danger p-3">
                            <font-awesome-icon :icon="['fab', 'google']" class="mr-2" /> 
                            Sign in using Rinfo
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
            this.$store.dispatch('ssoGoogle', accessToken)
        },
        onFailure(error) {
            console.log(error);
        }
    }
}
</script>
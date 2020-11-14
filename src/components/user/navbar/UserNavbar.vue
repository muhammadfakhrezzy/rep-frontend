<script>
import axios from 'axios'
import DigitalClock from 'vue-digital-clock'
import Swal from 'sweetalert2'
import motivationWord from '../../Quotes/MotivationWord'
export default {
    data() {
        return {
            motivationText : [...motivationWord],
            name: this.$store.state.user.name,
            photo: this.$store.state.user.photo,
            // role: this.$store.state.user.role
        }
    },
    mounted () {
        const numberRandom = Math.floor(Math.random() * 10);
        this.motivationText = {
            ...this.motivationText[numberRandom]
        }
    },
    components: {
        DigitalClock
    },
    computed: {
        dateNow() {
            const d = new Date()
            const h = d.getHours()
            const m = d.getMinutes()
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            return days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + '  '
        }
    },
    // ' + d.getDate() + '
    methods: {
        logout() {
            Swal.fire({
                text: "Are you sure want to logout?",
                imageUrl: 'https://lh3.googleusercontent.com/-L0L0yfE5VpA/XpfifMdyIXI/AAAAAAAABFU/ZrtQpPoKXHsAj0kgc70Gn8IwWsybi0nbACK8BGAsYHg/s0/2020-04-15.png',
                imageWidth: 150,
                imageHeight: 60,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
            })
                .then(result => {
                    if(result.value) {
                        Swal.fire({
                        imageUrl: "https://lh3.googleusercontent.com/-L0L0yfE5VpA/XpfifMdyIXI/AAAAAAAABFU/ZrtQpPoKXHsAj0kgc70Gn8IwWsybi0nbACK8BGAsYHg/s0/2020-04-15.png",
                        imageWidth: 150,
                        imageHeight: 60,
                        text:'Success'
                            }
                        )
                        this.$store.dispatch('logout')
                    }
                })
        }
    },
    async created() {
        await axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/auth/user')
            .then(response => {
                // console.log(response)
                if(response.data.error){
                    Swal.fire({
                        imageUrl: "https://lh3.googleusercontent.com/-L0L0yfE5VpA/XpfifMdyIXI/AAAAAAAABFU/ZrtQpPoKXHsAj0kgc70Gn8IwWsybi0nbACK8BGAsYHg/s0/2020-04-15.png",
                        imageWidth: 150,
                        imageHeight: 60,
                        text: 'Your token has been expired!.'
                    })
                    this.$store.dispatch('logout')
                    return
                }
                this.name = response.data.User.Detail_user.name
                this.photo = response.data.User.Media[0].path
                this.$store.dispatch('addDataUser', response.data.User)                
            })
            .catch(error => console.log(error))
    }
}
</script>

<style>
    .menu-open a p svg {
        transform: rotate(-90deg);
    }
    .hi-dropdown{
        position: relative;
    }
    .hi-dropdown-content{
        position: absolute;
        top: 50%;
        left: -85%;
        transform: translateY(-50%);
        display: none;
        z-index: 1;
    }
    .hi-dropdown-content p{
        cursor: pointer
    }
    .hi-dropdown:hover .hi-dropdown-content{
        display: block;
        animation: ani-logout .3s ease-out;
    }
    @keyframes ani-logout {
        from {
            transform: translateX(30%) translateY(-50%);
            opacity: 0;
        }
        to {
            transform: translateX(0) translateY(-50%);
            opacity: 1;
        }
    }
</style>

<template>
    <div class="wrapper">
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light" style="background-color: #619E85">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" style="color: #fff">
                        <font-awesome-icon icon="bars" />
                    </a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                    <router-link to="/" class="nav-link" style="color: #fff">Home</router-link>
                </li>
            </ul>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
            <!-- Notifications Dropdown Menu -->

            <!-- <li class="nav-item dropdown">
                <a class="nav-link" data-toggle="dropdown" href="#" style="color: #fff">
                    <font-awesome-icon :icon="['far', 'bell']" />
                    <span class="badge badge-warning navbar-badge">0</span>
                </a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span class="dropdown-item dropdown-header">0 Notifications</span>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item">...
                    </a>
                </div>
            </li> -->

                <li class="nav-item">
                    <div class="hi-dropdown">
                        <a @click="logout()" class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" style="color: #fff">
                            <font-awesome-icon icon="sign-out-alt" />
                        </a>
                        <div class="hi-dropdown-content">
                            <p @click="logout()" class="m-0 text-white">Logout</p>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-teal elevation-4" style="background-color: rgb(97,158,133);">
            <!-- Brand Logo -->
            <div class="brand-link" style="padding: .5rem 0; background-color: #rgb(104,162,137); border-color: #fff">
                <img src="../../../assets/REP logo.png" style="height: 30px" class="d-block mx-auto">
            </div>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 mb-0 d-flex flex-column align-items-center my-2" style="border-color: #fff; white-space: normal ">
                    <div class="image" style="padding-left: 0">
                        <router-link to="/myoverview">
                            <img :src="photo" class="img-circle elevation-2" alt="User Image" style="width: 3rem;">
                        </router-link>
                    </div>
                    <div class="info mb-1 text-white" style="white-space: normal">
                        <router-link to="/myoverview" style="text-align: center" class="d-block text-white">{{ name }}</router-link>
                        <p style="text-align: center; font-size: 13px;" class="d-block">
                            {{dateNow}}
                            <digital-clock :blink="true" />
                        </p>
                        <p class="text-center mb-0"><q style="font-size: 13px">{{motivationText.motivation}}</q></p>
                        <i class="text-right" style="font-size: 13px">{{motivationText.person}}</i>
                    </div>
                </div>

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library -->
                        <li class="nav-item user-panel pb-2" style="border-color: #fff">
                            <router-link to="/myoverview" class="nav-link text-white">
                                <font-awesome-icon :icon="['fas', 'user-circle']" class="nav-icon" />
                                <p>
                                    My Viewboard
                                </p>
                            </router-link>
                        </li>
                        <li class="header mt-3 mb-1" style="color: rgba(255,255,255,.7)">Quest Navigation</li>
                        <li class="nav-item has-treeview">
                            <a class="nav-link text-white" style="cursor: pointer">
                                <p>
                                    Daily Quests
                                    <font-awesome-icon icon="angle-left" class="right" />
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <router-link to="/daily" class="nav-link text-white">
                                        <font-awesome-icon icon="list" class="nav-icon" />
                                        <p>List Quest</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/dailycomplete" class="nav-link text-white">
                                        <font-awesome-icon icon="tasks" class="nav-icon" />
                                        <p>Quest History</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/dailyreview" class="nav-link text-white">
                                        <font-awesome-icon icon="tasks" class="nav-icon" />
                                        <p>Review Quest</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item has-treeview">
                            <router-link to="/main" class=" text-white" style="cursor: pointer">
                            <p>
                                <p>Main Quest</p>
                                <!-- <font-awesome-icon icon="angle-left" class="right" /> -->
                            <!-- </p> -->
                            </router-link>
                            <ul class="nav nav-treeview">
                                <!-- <li class="nav-item">
                                    <router-link to="/main" class="nav-link text-white">
                                        <font-awesome-icon icon="list" class="nav-icon" />
                                        <p>List Quest</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/maincomplete" class="nav-link text-white">
                                        <font-awesome-icon icon="tasks" class="nav-icon" />
                                        <p>Mission Complete</p>
                                    </router-link>
                                </li> -->
                            </ul>
                        </li>
                        <li class="nav-item has-treeview">
                            <router-link to="/underConstruction" class="text-white" style="cursor: pointer">
                            <p>
                                <p>Extra Quest</p>
                                <!-- <font-awesome-icon icon="angle-left" class="right" /> -->
                            <!-- </p> -->
                            </router-link>
                            <ul class="nav nav-treeview">
                                <!-- <li class="nav-item">
                                    <router-link to="/extra" class="nav-link text-white">
                                        <font-awesome-icon icon="list" class="nav-icon" />
                                        <p>List Quest</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/extracomplete" class="nav-link text-white">
                                        <font-awesome-icon icon="tasks" class="nav-icon" />
                                        <p>Mission Complete</p>
                                    </router-link>
                                </li> -->
                            </ul>
                        </li>
                        <li class="nav-item has-treeview">
                            <router-link to="/underConstruction" class="text-white" style="cursor: pointer">
                            <p>
                                <p>Secret Quest</p>
                                <!-- <font-awesome-icon icon="angle-left" class="right" /> -->
                            <!-- </p> -->
                            </router-link>
                            <ul class="nav nav-treeview">
                                <!-- <li class="nav-item">
                                    <router-link to="/secret" class="nav-link text-white">
                                        <font-awesome-icon icon="list" class="nav-icon" />
                                        <p>List Quest</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/secretcomplete" class="nav-link text-white">
                                        <font-awesome-icon icon="tasks" class="nav-icon" />
                                        <p>Mission Complete</p>
                                    </router-link>
                                </li> -->
                            </ul>
                        </li>
                        <li class="nav-item has-treeview">
                            <a class="nav-link text-white" style="cursor: pointer">
                                <font-awesome-icon icon="angle-left" class="right" />
                                <p>
                                    All Rank
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <router-link to="/ranklogin" class="nav-link text-white">
                                        <font-awesome-icon icon="sign-in-alt" class="nav-icon" />
                                        <p>Rank Login</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/myhistory" class="nav-link text-white">
                                        <font-awesome-icon icon="tasks" class="nav-icon" />
                                        <p>My Login History</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/likes" class="nav-link text-white">
                                        <font-awesome-icon icon="tasks" class="nav-icon" />
                                        <p>Rank Likes</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/ranklevel" class="nav-link text-white">
                                        <font-awesome-icon icon="tasks" class="nav-icon" />
                                        <p>Rank Level</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <!-- <li class="nav-item">
                            <router-link to="/underConstruction" class="nav-link text-white">
                                <font-awesome-icon :icon="['fab', 'hackerrank']" class="nav-icon" />
                                <p>
                                    <i>All Rank</i>
                                </p>
                            </router-link>
                        </li> -->
                        <li v-if="role === administrator" class="nav-item">
                            <router-link to="/admin" class="nav-link text-white">
                                <font-awesome-icon icon="question-circle" class="nav-icon" />
                                <p>Secret Chamber 
                                </p>
                            </router-link>
                        </li>
                        <li class="header mt-5" style="color: rgba(255,255,255,.7)">Documentation</li>
                        <li class="nav-item">
                            <router-link to="/faq" class="nav-link text-white">
                                <font-awesome-icon icon="question-circle" class="nav-icon" />
                                <p>Help Center 
                                </p>
                            </router-link>
                        </li>
                        <li class="nav-item mb-5">
                            <!-- <router-link to="/whyrep" class="nav-link text-white"> -->
                                <!-- <font-awesome-icon :icon="['fas', 'question']" class="nav-icon" /> -->
                                <a class="nav-link text-white" href="https://rep.alphabetincubator.id/why-rep/" target="_blank">Why REP ?</a>
                                <a class="nav-link text-white" href="https://alphabetincubator.id/2020/11/07/%e2%9c%a8skup-pra-startup-research-enrichment-program-rep%e2%9c%a8-2/" target="_blank">SKuP Pra StartUp 2020</a>
                            <!-- </router-link> -->
                        </li>

                    </ul>
                </nav>
            <!-- /.sidebar-menu -->
            </div>
            <p class="version text-center">REP Version 1.0</p>
        </aside>

        <router-view />
<!-- ./wrapper -->
    </div>
</template>

<style scoped>
 .version {
     margin-top:150px;
 color:white;
 }
 .blinking{
	animation:blinkingText 0.8s infinite;
}
@keyframes blinkingText{
	0%{		color: #000;	}
	49%{	color: red;	}
	50%{	color: blue;	}
	99%{	color:green;	}
	100%{	color: #000;	}
}
</style>
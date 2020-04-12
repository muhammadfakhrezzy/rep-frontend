<script>
import axios from 'axios'
import DigitalClock from 'vue-digital-clock'
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            name: this.$store.state.user.name,
            photo: this.$store.state.user.photo
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
            return days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + '  '
        }
    },
    methods: {
        logout() {
            Swal.fire({
                title: "Are you sure want to logout?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
            })
                .then(result => {
                    if(result.value) {
                        Swal.fire(
                            'Success!',
                            'success'
                        )
                        this.$store.dispatch('logout')
                    }
                })
        }
    },
    async created() {
        await axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/auth/user')
            .then(response => {
                console.log(response)
                if(response.data.error){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
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
                <img src="../../../assets/REP logo.png" style="height: 40px" class="d-block mx-auto">
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
                        <router-link to="/profile" style="text-align: center" class="d-block text-white">{{ name }}</router-link>
                        <p style="text-align: center; font-size: 13px;" class="d-block">
                            {{dateNow}}
                            <digital-clock :blink="true" />
                        </p>
                        <p class="text-center mb-0"><q style="font-size: 13px">If you cannot do great things, do small things in a great way.</q></p>
                        <i class="text-right" style="font-size: 13px">-Napoleon Hill</i>
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
                            <router-link to="/underConstruction" class=" text-white" style="cursor: pointer">
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
                        <li class="nav-item">
                            <router-link to="/underConstruction" class="nav-link text-white">
                                <font-awesome-icon :icon="['fab', 'hackerrank']" class="nav-icon" />
                                <p>
                                    <i>All Rank</i>
                                </p>
                            </router-link>
                        </li>

                        <li class="header mt-5" style="color: rgba(255,255,255,.7)">Documentation</li>
                        <li class="nav-item">
                            <router-link to="/underConstruction" class="nav-link text-white">
                                <font-awesome-icon icon="question-circle" class="nav-icon" />
                                <p>Help Center</p>
                            </router-link>
                        </li>
                        <li class="nav-item mb-5">
                            <!-- <router-link to="/whyrep" class="nav-link text-white"> -->
                                <!-- <font-awesome-icon :icon="['fas', 'question']" class="nav-icon" /> -->
                                <a class="nav-link text-white" href="https://rep.alphabetincubator.id/why-rep/" target="_blank">Why REP ?</a>
                            <!-- </router-link> -->
                        </li>

                    </ul>
                </nav>
            <!-- /.sidebar-menu -->
            </div>
        </aside>

        <router-view />
<!-- ./wrapper -->
    </div>
</template>
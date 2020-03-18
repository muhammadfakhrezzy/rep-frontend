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
                <router-link to="/dashboard" class="nav-link" style="color: #fff">Home</router-link>
            </li>
            </ul>

            <!-- Right navbar links -->
            <ul class="navbar-nav ml-auto">
            <!-- Notifications Dropdown Menu -->
            <li class="nav-item dropdown">
                <a class="nav-link" data-toggle="dropdown" href="#" style="color: #fff">
                    <font-awesome-icon :icon="['far', 'bell']" />
                    <span class="badge badge-warning navbar-badge">0</span>
                </a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span class="dropdown-item dropdown-header">0 Notifications</span>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item">...
                    </a>
                    <!-- <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a> -->
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" style="color: #fff">
                    <font-awesome-icon icon="sign-out-alt" />
                </a>
            </li>
            </ul>
        </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-teal elevation-4" style="background-color: rgb(97,158,133); min-height: 800px">
            <!-- Brand Logo -->
            <div class="brand-link" style="padding: .5rem 0; background-color: #rgb(104,162,137); border-color: #fff">
                <img src="../../assets/REP logo.png" style="height: 40px" class="d-block mx-auto">
            </div>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 mb-3 d-flex flex-column align-items-center" style="border-color: #fff">
                    <div class="image" style="padding-left: 0">
                        <router-link to="/profile">
                            <img src="@/assets/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" style="width: 3rem;">
                        </router-link>
                    </div>
                    <div class="info mb-1">
                        <router-link to="/profile" style="text-align: center" class="d-block text-white">Muhammad Iqbal</router-link>
                        <p style="text-align: center; font-size: 13px;" class="d-block text-white">
                            {{dateNow}}
                        </p>
                        <p style="color: #fff; margin-bottom: 0.2rem; text-align: center;">Are you ready ?</p>
                    </div>
                </div>

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library -->
                        <li class="nav-item">
                            <a href="pages/widgets.html" class="nav-link text-white">
                            <font-awesome-icon :icon="['fas', 'user-circle']" class="nav-icon" />
                            <p>
                                My Overview
                            </p>
                            </a>
                        </li>
                        <li class="nav-item has-treeview">
                            <a href="#" class="nav-link text-white">
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
                                    <router-link to="/dailyComplete" class="nav-link text-white">
                                        <font-awesome-icon icon="tasks" class="nav-icon" />
                                        <p>Mission Complete</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item has-treeview">
                            <a href="#" class="nav-link text-white">
                            <p>
                                Main Quests
                                <font-awesome-icon icon="angle-left" class="right" />
                            </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <router-link to="main" class="nav-link text-white">
                                        <font-awesome-icon icon="list" class="nav-icon" />
                                        <p>List Quest</p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/maincomplete" class="nav-link text-white">
                                        <font-awesome-icon icon="tasks" class="nav-icon" />
                                        <p>Mission Complete</p>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item has-treeview">
                            <a href="#" class="nav-link text-white">
                            <p>
                                Extra Quests
                                <font-awesome-icon icon="angle-left" class="right" />
                            </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
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
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item has-treeview">
                            <a href="#" class="nav-link text-white">
                            <p>
                                Secret Quests
                                <font-awesome-icon icon="angle-left" class="right" />
                            </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
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
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="pages/widgets.html" class="nav-link text-white">
                            <font-awesome-icon :icon="['fab', 'hackerrank']" class="nav-icon" />
                            <p>
                                All Ranking
                            </p>
                            </a>
                        </li>

                        <li class="nav-header text-white">Documentation</li>
                        <li class="nav-item">
                            <router-link to="/faq" class="nav-link text-white">
                                <font-awesome-icon icon="question-circle" class="nav-icon" />
                                <p>Help Center</p>
                            </router-link>
                        </li>
                        <li class="nav-item mt-3">
                            <router-link to="/faq" class="nav-link text-white">
                                <p>Why REP ?</p>
                            </router-link>
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

<script>
export default {
    computed: {
        dateNow() {
            const d = new Date()
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            return days[d.getDay()] + ', ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear()
        }
    }
}
</script>
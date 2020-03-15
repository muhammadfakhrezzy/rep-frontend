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
                <a href="index3.html" class="nav-link" style="color: #fff">Home</a>
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
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="index3.html" class="brand-link">
                <img src="../../assets/REP logo.png" class="brand-image img-circle elevation-3">
                <span class="brand-text font-weight-light text-center" style="letter-spacing: 5px;" >REP</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 mb-3 d-flex flex-column align-items-center">
                    <div class="image" style="padding-left: 0">
                    <img src="@/assets/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" style="width: 3rem;">
                    </div>
                    <div class="info mb-1">
                    <a href="#" class="d-block">Muhammad Iqbal</a>
                    <p style="color: #fff; margin-bottom: 0.2rem; text-align: center;">Are you ready ?</p>
                    <a style="text-align: center; font-size: 13px;" class="d-block">
                        <font-awesome-icon icon="circle" class="mr-1 text-success" />
                        online
                    </a>
                    </div>
                </div>

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class
                        with font-awesome or any other icon font library -->
                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                        <p>
                            Daily Quest
                            <font-awesome-icon icon="angle-left" class="right" />
                        </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="./index.html" class="nav-link">
                                    <font-awesome-icon icon="list" class="nav-icon" />
                                    <p>List Quest</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="./index2.html" class="nav-link">
                                    <font-awesome-icon icon="tasks" class="nav-icon" />
                                    <p>Mission Complete</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                        <p>
                            Main Quest
                            <font-awesome-icon icon="angle-left" class="right" />
                        </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="pages/layout/top-nav.html" class="nav-link">
                                    <font-awesome-icon icon="list" class="nav-icon" />
                                    <p>List Quest</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="pages/layout/top-nav-sidebar.html" class="nav-link">
                                    <font-awesome-icon icon="tasks" class="nav-icon" />
                                    <p>Mission Complete</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                        <p>
                            Secret Quest
                            <font-awesome-icon icon="angle-left" class="right" />
                        </p>
                        </a>
                        <ul class="nav nav-treeview">
                            <li class="nav-item">
                                <a href="pages/charts/chartjs.html" class="nav-link">
                                    <font-awesome-icon icon="list" class="nav-icon" />
                                    <p>List Quest</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="pages/charts/flot.html" class="nav-link">
                                    <font-awesome-icon icon="tasks" class="nav-icon" />
                                    <p>Mission Complete</p>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a href="pages/widgets.html" class="nav-link">
                        <font-awesome-icon :icon="['fab', 'hackerrank']" class="nav-icon" />
                        <p>
                            Ranking
                        </p>
                        </a>
                    </li>
                    
                    <li class="nav-header">Documentation</li>
                    <li class="nav-item">
                        <a href="https://adminlte.io/docs/3.0" class="nav-link">
                        <font-awesome-icon icon="file" class="nav-icon" />
                        <p>FAQ</p>
                        </a>
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
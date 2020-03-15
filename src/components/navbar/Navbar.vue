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
                        <i class="nav-icon far fa-question-circle"></i>
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
                        <i class="nav-icon fas fa-question-circle"></i>
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
                        <i class="nav-icon fas fa-question"></i>
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
            <!-- /.sidebar -->
        </aside>

    <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Dashboard</h1>
                    </div>
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card card-widget widget-user">
                                <div class="widget-user-header" style="background-color: #BF814D">
                                    <h3 class="widget-user-username">RANK 3</h3>
                                    <h5 class="widget-user-desc">Angga Widianto</h5>
                                </div>
                                <div class="widget-user-image">
                                    <img src="@/assets/img/user5-128x128.jpg" class="img-circle elevation-2">
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="description-block">
                                            <h5 class="description-header">876</h5>
                                            <span class="description-text">POIN</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-widget widget-user">
                                <div class="widget-user-header" style="background-color: #E7AB30">
                                    <h3 class="widget-user-username">RANK 1</h3>
                                    <h5 class="widget-user-desc">Muhammad Iqbal</h5>
                                </div>
                                <div class="widget-user-image">
                                    <img src="@/assets/img/user1-128x128.jpg" class="img-circle elevation-2">
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                    <div class="col-sm-12">
                                        <div class="description-block">
                                        <h5 class="description-header">1091</h5>
                                        <span class="description-text">POIN</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-widget widget-user">
                                <div class="widget-user-header" style="background-color: #BFBFBF">
                                    <h3 class="widget-user-username">RANK 2</h3>
                                    <h5 class="widget-user-desc">Aditya Lityanian</h5>
                                </div>
                                <div class="widget-user-image">
                                    <img src="@/assets/img/user4-128x128.jpg" class="img-circle elevation-2">
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                    <div class="col-sm-12">
                                        <div class="description-block">
                                        <h5 class="description-header">931</h5>
                                        <span class="description-text">POIN</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header border-0">
                                    <h3 class="card-title">Top 10</h3>
                                </div>
                                <div class="card-body table-responsive p-0">
                                    <table class="table table-striped table-valign-middle">
                                        <thead>
                                            <tr></tr>
                                            <tr></tr>
                                            <tr></tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>04</td>
                                                <td>
                                                    <img src="@/assets/img/default-150x150.png" class="img-circle img-size-32 mr-2">
                                                    Amin Bahrul Ulum
                                                </td>
                                                <td>822 POIN</td>
                                            </tr>
                                            <tr>
                                                <td>05</td>
                                                <td>
                                                    <img src="@/assets/img/default-150x150.png" class="img-circle img-size-32 mr-2">
                                                    Fahri Tri Setio
                                                </td>
                                                <td>789 POIN</td>
                                            </tr>
                                            <tr>
                                                <td>06</td>
                                                <td>
                                                    <img src="@/assets/img/default-150x150.png" class="img-circle img-size-32 mr-2">
                                                    Muhammad Zamrozi
                                                </td>
                                                <td>751 POIN</td>
                                            </tr>
                                            <tr>
                                                <td>07</td>
                                                <td>
                                                    <img src="@/assets/img/default-150x150.png" class="img-circle img-size-32 mr-2">
                                                    Damar Pamungkas
                                                </td>
                                                <td>721 POIN</td>
                                            </tr>
                                            <tr>
                                                <td>08</td>
                                                <td>
                                                    <img src="@/assets/img/default-150x150.png" class="img-circle img-size-32 mr-2">
                                                    Miftahul Fallah
                                                </td>
                                                <td>579 POIN</td>
                                            </tr>
                                            <tr>
                                                <td>09</td>
                                                <td>
                                                    <img src="@/assets/img/default-150x150.png" class="img-circle img-size-32 mr-2">
                                                    Rifaldy Thoriq
                                                </td>
                                                <td>522 POIN</td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>
                                                    <img src="@/assets/img/default-150x150.png" class="img-circle img-size-32 mr-2">
                                                    Muhammad Abdul Azis
                                                </td>
                                                <td>501 POIN</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                <!-- /.container-fluid -->
                </div>
            <!-- /.content -->
            </div>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
            <footer class="main-footer">
                <strong>Copyright &copy; 2020 <a href="http://raharja.ac.id">Universitas Raharja</a>.</strong>
                All rights reserved.
                <div class="float-right d-none d-sm-inline-block">
                <b>Version</b> 0.0.1
                </div>
            </footer>
        </div>
<!-- ./wrapper -->
    </div>
</template>
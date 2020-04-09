<template>
    <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0 text-dark mb-1">Top Ranking</h1>
                        </div>
                    </div><!-- /.row -->
                    <router-link to="/dailyrank" class="btn btn-warning mr-2">Daily Rank</router-link>
                    <router-link to="/weeklyrank" class="btn btn-outline-info mr-2">Weekly Rank</router-link>
                    <router-link to="/monthlyrank" class="btn btn-outline-success mr-2">Monthly Rank</router-link>
                    <router-link to="/globalrank" class="btn btn-outline-success">Global Rank</router-link>
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12 mt-3">
                            <h3 class="text-center">DAILY RANK</h3>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-widget widget-user m-3">
                                <div class="widget-user-header" style="background-color: #BFBFBF">
                                    <h3 class="widget-user-username">RANK 2</h3>
                                    <h5 class="widget-user-desc">Aditya Lityanian</h5>
                                </div>
                                <div class="widget-user-image" style="top: 33%">
                                    <img src="@/assets/img/user5-128x128.jpg" class="img-circle elevation-2">
                                </div>
                                <div class="widget-user-image" style="margin-left: 0; top: 48%; transform: translateX(-50%) translateY(-50%)">
                                    <img src="@/assets/img/silver.png" style="border: none; width: 150px; cursor: pointer" data-toggle="modal" data-target="#modal-rank2">
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col-sm-4 border-right">
                                            <div class="description-block">
                                                <h5 class="description-header">401</h5>
                                                <span class="description-text">QUEST</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 border-right">
                                            <div class="description-block">
                                                <h5 class="description-header">931</h5>
                                                <span class="description-text">POINT</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="description-block">
                                                <h5 class="description-header">79</h5>
                                                <span class="description-text">LEVEL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-widget widget-user m-3">
                                <div class="widget-user-header" style="background-color: #E7AB30">
                                    <h3 class="widget-user-username">RANK 1</h3>
                                    <h5 class="widget-user-desc">Muhammad Iqbal</h5>
                                </div>
                                <div class="widget-user-image" style="top: 33%">
                                    <img src="@/assets/img/user1-128x128.jpg" style="cursor: pointer" class="img-circle elevation-2">
                                </div>
                                <div class="widget-user-image" style="margin-left: 0; top: 48%; transform: translateX(-50%) translateY(-50%)" data-toggle="modal" data-target="#modal-rank1">
                                    <img src="@/assets/img/gold.png" style="border: none; width: 150px; cursor:pointer">
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                    <div class="col-sm-4 border-right">
                                            <div class="description-block">
                                                <h5 class="description-header">421</h5>
                                                <span class="description-text">QUEST</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 border-right">
                                            <div class="description-block">
                                                <h5 class="description-header">1091</h5>
                                                <span class="description-text">POINT</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="description-block">
                                                <h5 class="description-header">82</h5>
                                                <span class="description-text">LEVEL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-widget widget-user m-3">
                                <div class="widget-user-header" style="background-color: #BF814D">
                                    <h3 class="widget-user-username">RANK 3</h3>
                                    <h5 class="widget-user-desc">Angga Widianto</h5>
                                </div>
                                <div class="widget-user-image" style="top: 33%">
                                    <img src="@/assets/img/user4-128x128.jpg" style="cursor: pointer" class="img-circle elevation-2">
                                </div>
                                <div class="widget-user-image" style="margin-left: 0; top: 48%; transform: translateX(-50%) translateY(-50%)" data-toggle="modal" data-target="#modal-rank3">
                                    <img src="@/assets/img/bronze.png" style="border: none; width: 150px; cursor:pointer;">
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col-sm-4 border-right">
                                            <div class="description-block">
                                                <h5 class="description-header">349</h5>
                                                <span class="description-text">QUEST</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 border-right">
                                            <div class="description-block">
                                                <h5 class="description-header">876</h5>
                                                <span class="description-text">POINT</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4">
                                            <div class="description-block">
                                                <h5 class="description-header">76</h5>
                                                <span class="description-text">LEVEL</span>
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
                                            <tr>
                                                <th style="padding: 0; width: 7rem"></th>
                                                <th style="padding: 0; width: 70%"></th>
                                                <th style="padding: 0;"></th>
                                                <th style="padding: 0"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>04</td>
                                                <td>
                                                    <img src="@/assets/img/default-150x150.png" class="img-circle img-size-32 mr-2">
                                                    Amin Bahrul Ulum
                                                </td>
                                                <td>822 POINT</td>
                                                <td>LEVEL 74</td>
                                            </tr>
                                            <tr>
                                                <td>05</td>
                                                <td>
                                                    <img src="@/assets/img/default-150x150.png" class="img-circle img-size-32 mr-2">
                                                    Fahri Tri Setio
                                                </td>
                                                <td>789 POINT</td>
                                                <td>LEVEL 70</td>
                                            </tr>
                                            <tr>
                                                <td>06</td>
                                                <td>
                                                    <img src="@/assets/img/default-150x150.png" class="img-circle img-size-32 mr-2">
                                                    Muhammad Zamrozi
                                                </td>
                                                <td>751 POINT</td>
                                                <td>LEVEL 69</td>
                                            </tr>
                                            <tr>
                                                <td>07</td>
                                                <td>
                                                    <img src="@/assets/img/default-150x150.png" class="img-circle img-size-32 mr-2">
                                                    Damar Pamungkas
                                                </td>
                                                <td>721 POINT</td>
                                                <td>LEVEL 67</td>
                                            </tr>
                                            <tr>
                                                <td>08</td>
                                                <td>
                                                    <img src="@/assets/img/default-150x150.png" class="img-circle img-size-32 mr-2">
                                                    Miftahul Fallah
                                                </td>
                                                <td>579 POINT</td>
                                                <td>LEVEL 63</td>
                                            </tr>
                                            <tr>
                                                <td>09</td>
                                                <td>
                                                    <img src="@/assets/img/default-150x150.png" class="img-circle img-size-32 mr-2">
                                                    Rifaldy Thoriq
                                                </td>
                                                <td>522 POINT</td>
                                                <td>LEVEL 59</td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>
                                                    <img src="@/assets/img/default-150x150.png" class="img-circle img-size-32 mr-2">
                                                    Muhammad Abdul Azis
                                                </td>
                                                <td>501 POINT</td>
                                                <td>LEVEL 55</td>
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
                <div class="modal fade" id="modal-rank2">
                    <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">#Rank 2</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <font-awesome-icon icon="times" aria-hidden="true" />
                                </button>
                            </div>
                            <div class="modal-body p-0">
                                <div class="card card-olive card-outline mb-0">
                                    <div class="card-body box-profile">
                                        <div class="text-center">
                                            <img src="../../../assets/img/user1-128x128.jpg" class="profile-user-img img-fluid img-circle" style="border-color: #619E85">
                                        </div>
                                        <h3 class="profile-username text-center">Muhammad Iqbal</h3>
                                        <p class="text-muted text-center">Sistem Informasi</p>
                                        <ul class="list-group list-group-unbordered">
                                            <li class="list-group-item">
                                                <b>Level</b>
                                                <a class="float-right">76</a>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="card card-success mb-0 collapsed-card">
                                                    <div class="card-header" data-card-widget="collapse" style="cursor: pointer">
                                                        <h3 class="card-title">Total Point</h3>
                                                        <div class="card-tools">
                                                            <a class="float-right">1082</a>
                                                        </div>
                                                    </div>
                                                    <div class="card-body px-2 py-0">
                                                        <ul class="list-group list-group-unbordered">
                                                            <li class="list-group-item">
                                                                <b>BBC</b>
                                                                <a class="float-right">230</a>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <b>Cermi</b>
                                                                <a class="float-right">165</a>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <b>LTAI</b>
                                                                <a class="float-right">489</a>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <b>VLC</b>
                                                                <a class="float-right">76</a>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <b>Absensi</b>
                                                                <a class="float-right">160</a>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <b>Jurnal Scopus</b>
                                                                <a class="float-right">1</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="modal-rank1">
                    <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">#Rank 1</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <font-awesome-icon icon="times" aria-hidden="true" />
                                </button>
                            </div>
                            <div class="modal-body p-0">
                                <div class="card card-olive card-outline mb-0">
                                    <div class="card-body box-profile">
                                        <div class="text-center">
                                            <img src="../../../assets/img/user1-128x128.jpg" class="profile-user-img img-fluid img-circle" style="border-color: #619E85">
                                        </div>
                                        <h3 class="profile-username text-center">Muhammad Iqbal</h3>
                                        <p class="text-muted text-center">Sistem Informasi</p>
                                        <ul class="list-group list-group-unbordered">
                                            <li class="list-group-item">
                                                <b>Level</b>
                                                <a class="float-right">76</a>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="card card-success mb-0 collapsed-card">
                                                    <div class="card-header" data-card-widget="collapse" style="cursor: pointer">
                                                        <h3 class="card-title">Total Point</h3>
                                                        <div class="card-tools">
                                                            <a class="float-right">1082</a>
                                                        </div>
                                                    </div>
                                                    <div class="card-body px-2 py-0">
                                                        <ul class="list-group list-group-unbordered">
                                                            <li class="list-group-item">
                                                                <b>BBC</b>
                                                                <a class="float-right">230</a>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <b>Cermi</b>
                                                                <a class="float-right">165</a>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <b>LTAI</b>
                                                                <a class="float-right">489</a>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <b>VLC</b>
                                                                <a class="float-right">76</a>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <b>Absensi</b>
                                                                <a class="float-right">160</a>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <b>Jurnal Scopus</b>
                                                                <a class="float-right">1</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="modal-rank3">
                    <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">#Rank 3</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <font-awesome-icon icon="times" aria-hidden="true" />
                                </button>
                            </div>
                            <div class="modal-body p-0">
                                <div class="card card-olive card-outline mb-0">
                                    <div class="card-body box-profile">
                                        <div class="text-center">
                                            <img src="../../../assets/img/user1-128x128.jpg" class="profile-user-img img-fluid img-circle" style="border-color: #619E85">
                                        </div>
                                        <h3 class="profile-username text-center">Muhammad Iqbal</h3>
                                        <p class="text-muted text-center">Sistem Informasi</p>
                                        <ul class="list-group list-group-unbordered">
                                            <li class="list-group-item">
                                                <b>Level</b>
                                                <a class="float-right">76</a>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="card card-success mb-0 collapsed-card">
                                                    <div class="card-header" data-card-widget="collapse" style="cursor: pointer">
                                                        <h3 class="card-title">Total Point</h3>
                                                        <div class="card-tools">
                                                            <a class="float-right">1082</a>
                                                        </div>
                                                    </div>
                                                    <div class="card-body px-2 py-0">
                                                        <ul class="list-group list-group-unbordered">
                                                            <li class="list-group-item">
                                                                <b>BBC</b>
                                                                <a class="float-right">230</a>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <b>Cermi</b>
                                                                <a class="float-right">165</a>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <b>LTAI</b>
                                                                <a class="float-right">489</a>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <b>VLC</b>
                                                                <a class="float-right">76</a>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <b>Absensi</b>
                                                                <a class="float-right">160</a>
                                                            </li>
                                                            <li class="list-group-item">
                                                                <b>Jurnal Scopus</b>
                                                                <a class="float-right">1</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
</template>
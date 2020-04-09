<script>
import axios from 'axios'
export default {
    data () {
        return {
            name: this.$store.state.user.name,
            photo: this.$store.state.user.photo,
            rank : ''
        }
    },
    created () {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/detail/2')
        .then(response => {
            this.rank = response.data
            console.log(this.rank)
        })
    }
}
</script>
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
                    <router-link to="/dailyrank" class="btn btn-outline-warning mr-2">Daily Rank</router-link>
                    <router-link to="/weeklyrank" class="btn btn-outline-info mr-2">Weekly Rank</router-link>
                    <router-link to="/monthlyrank" class="btn btn-success mr-2">Monthly Rank</router-link>
                    <router-link to="/globalrank" class="btn btn-outline-success">Global Rank</router-link>
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12 mt-3">
                            <h3 class="text-center">MONTHLY RANK</h3>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-widget widget-user m-3">
                                <div class="widget-user-header" style="background-color: #BFBFBF">
                                    <h3 class="widget-user-username">RANK 2</h3>
                                    <h5 class="widget-user-desc">Aditya Lityanian</h5>
                                </div>
                                <div class="widget-user-image" style="top: 33%">
                                    <img src="@/assets/img/user5-128x128.jpg" style="cursor: pointer" class="img-circle elevation-2">
                                </div>
                                <div class="widget-user-image" style="margin-left: 0; top: 51%; transform: translateX(-50%) translateY(-54%)">
                                    <img src="@/assets/img/Monthly-Silver.png" style="border: none; width: 158px">
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
                                <div class="widget-user-image" style="margin-left: 0; top: 51%; transform: translateX(-50%) translateY(-54%)">
                                    <img src="@/assets/img/Monthly-Gold.png" style="border: none; width: 158px">
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
                                <div class="widget-user-image" style="margin-left: 0; top: 51%; transform: translateX(-50%) translateY(-54%)">
                                    <img src="@/assets/img/Monthly-Bronze.png" style="border: none; width: 158px">
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
                                <h4 class="modal-title">#Rank2 | Aditya Lityanian</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <font-awesome-icon icon="times" aria-hidden="true" />
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>One fine body&hellip;</p>
                            </div>
                            <div class="modal-footer justify-content-flexend">
                                <button class="btn btn-default" data-dismiss="modal">Close</button>
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
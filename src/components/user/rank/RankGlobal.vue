<script>
import axios from 'axios'
export default {
    data () {
        return {
            name: this.$store.state.user.name,
            photo: this.$store.state.user.photo,
            rank : '',
        detail:'',
            latest_rank: '',
            all_quest: []
        }
    },
    methods: {
        getUserRank (id) {
            axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/detail/' + id)
            .then(response => {
                this.detail = response.data
                this.all_quest = detail.quests
                console.log(this.detail)
            })
    }
    },
    created () {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/experience/monthly')
        .then(response => {
            console.log(response)
            let res = response.data
            this.rank = res.sort((a, b) => (a.total_value < b.total_value) ? 1 : (a.total_value === b.total_value) ?
            ((a.detail_user.name > b.detail_user.name) ? 1 : -1) : -1)
            this.rank.forEach(element => {
                axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/detail/' + element.detail_user.id)
                    .then(response => {
                        let res = response
                        this.all_quest.push(res)
                    })
            });
            console.log('all_quest',this.all_quest)
            let a = [...this.rank]
            a.splice(0, 3)
            this.latest_rank = a
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
                    <router-link to="/monthlyrank" class="btn btn-outline-success mr-2">Monthly Rank</router-link>
                    <router-link to="/globalrank" class="btn btn-success">Global Rank</router-link>
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12 mt-3">
                            <h3 class="text-center">GLOBAL RANK</h3>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-widget widget-user m-3">
                                <div class="widget-user-header" style="background-color: #BFBFBF">
                                    <h3 class="widget-user-username">RANK 2</h3>
                                    <h5 class="widget-user-desc">{{rank[1].detail_user.name}}</h5>
                                </div>
                                <div class="widget-user-image" style="top: 33%">
                                    <img :src="rank[1].media" class="img-circle elevation-2">
                                </div>
                                <div class="widget-user-image" style="margin-left: 0; top: 50%; transform: translateX(-48%) translateY(-50%)">
                                    <img src="@/assets/img/Global-Silver.png" style="border: none; width: 250px; cursor: pointer" data-toggle="modal" :data-target="['#modal' + rank[1].detail_user.id]">
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col-sm-4 border-right">
                                            <div class="description-block">
                                                <h5 class="description-header">{{rank[1].total_quest}}</h5>
                                                <span class="description-text">QUEST</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 border-right">
                                            <div class="description-block">
                                                <h5 class="description-header">{{rank[1].total_value}}</h5>
                                                <span class="description-text">ECP</span>
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
                                    <h5 class="widget-user-desc">{{rank[0].detail_user.name}}</h5>
                                </div>
                                <div class="widget-user-image" style="top: 33%">
                                    <img :src="rank[0].media" style="cursor: pointer" class="img-circle elevation-2">
                                </div>
                                <div class="widget-user-image" style="margin-left: 0; top: 50%; transform: translateX(-48%) translateY(-50%)" data-toggle="modal" :data-target="['#modal' + rank[0].detail_user.id]">
                                    <img src="@/assets/img/Global-Rank.png" style="border: none; width: 250px; cursor:pointer">
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                    <div class="col-sm-4 border-right">
                                            <div class="description-block">
                                                <h5 class="description-header">{{rank[0].total_quest}}</h5>
                                                <span class="description-text">Quest</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 border-right">
                                            <div class="description-block">
                                                <h5 class="description-header">{{rank[0].total_value}}</h5>
                                                <span class="description-text">ECP</span>
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
                                    <h5 class="widget-user-desc">{{rank[2].detail_user.name}}</h5>
                                </div>
                                <div class="widget-user-image" style="top: 33%">
                                    <img :src="rank[2].media" style="cursor: pointer" class="img-circle elevation-2">
                                </div>
                                <div class="widget-user-image" style="margin-left: 0; top: 50%; transform: translateX(-48%) translateY(-50%)" data-toggle="modal" :data-target="['#modal' + rank[1].detail_user.id]">
                                    <img src="@/assets/img/Global-Bronze.png" style="border: none; width: 250px; cursor:pointer;">
                                </div>
                                <div class="card-footer">
                                    <div class="row">
                                        <div class="col-sm-4 border-right">
                                            <div class="description-block">
                                                <h5 class="description-header">{{rank[2].total_quest}}</h5>
                                                <span class="description-text">QUEST</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 border-right">
                                            <div class="description-block">
                                                <h5 class="description-header">{{rank[2].total_value}}</h5>
                                                <span class="description-text">ECP</span>
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
                                            <tr v-for="(value, length) in latest_rank" :key="value.detail_user.id" style="cursor: pointer" data-toggle="modal" :data-target="['#modal' + value.detail_user.id]">
                                                <td>{{ length + 4 }}</td>
                                                <td>
                                                    <img :src="value.media" class="img-circle img-size-32 mr-2">
                                                    {{value.detail_user.name}}
                                                </td>
                                                <td>{{value.total_value}} ECP</td>
                                                <td>{{value.level.name}}</td>
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
                <div class="modal fade" v-for="value in all_quest" :key="value.data.detail_user.id" :id="['modal' + value.data.detail_user.id]">
                    <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                        <div class="modal-content">
                            <div class="modal-header">
                                <!-- <h4 class="modal-title">#Rank 2</h4> -->
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <font-awesome-icon icon="times" aria-hidden="true" />
                                </button>
                            </div>
                            <div class="modal-body p-0">
                                <div class="card card-olive card-outline mb-0">
                                    <div class="card-body box-profile">
                                        <div class="text-center">
                                            <img :src="value.data.media[0].path" class="profile-user-img img-fluid img-circle" style="border-color: #619E85">
                                        </div>
                                        <h3 class="profile-username text-center">{{ value.data.detail_user.name }}</h3>
                                        <!-- <p class="text-muted text-center">Sistem Informasi</p> -->
                                        <ul class="list-group list-group-unbordered">
                                            <li class="list-group-item">
                                                <b>Rank</b>
                                                <a class="float-right">{{ value.data.level }}</a>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="card card-success mb-0 collapsed-card">
                                                    <div class="card-header" data-card-widget="collapse" style="cursor: pointer">
                                                        <h3 class="card-title">Total ECP</h3>
                                                        <div class="card-tools">
                                                            <a class="float-right">{{ value.data.total_value }}</a>
                                                        </div>
                                                    </div>
                                                    <div class="card-body px-2 py-0">
                                                        <ul class="list-group list-group-unbordered">
                                                            <li class="list-group-item" v-for="(valueIn, length) in value.data.quests" :key="length">
                                                                <b>{{ valueIn.name }}</b>
                                                                <a class="float-right">{{ valueIn.total }}</a>
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
                <strong>Copyright 2020 <a href="raharja.ac.id" target="_blank">Universitas Raharja</a> | All Rights Reserved | Powered by <a href="https://alphabetincubator.id/">Alphabet Incubator</a> | Build With Love</strong>
                All rights reserved.
                <div class="float-right d-none d-sm-inline-block">
                <b>Version</b> 1.0
                </div>
            </footer>
        </div>
</template>
<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import router from '../../../../router'
import Chart from 'chart.js'

export default {
    data() {
        return {
            rank:'',
            user: [],
            labels: ["Favorite Quest"],
            types: [],
            totalQuest: '',
            dataCharts : {
                    type: 'doughnut',
                    data: {
                        labels: [],
                        datasets: [{
                            label: '# Quest Favorite',
                            data: [],
                            backgroundColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    }
                    // options: {
                    //     responsive: true,
                    //     lineTension: 1,
                    //     scales: {
                    //         xAxes: [{
                    //             ticks: {
                    //                 padding: 10
                    //             }
                    //         }],
                    //         yAxes: [{
                    //             ticks: {
                    //                 beginAtZero: true,
                    //                 padding: 20
                    //             }
                    //         }]
                    //     },
                    //     animation: {
                    //         animateScale: true
                    //     }
                    // }
                }
        }
    },
    methods:{
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
            type: chartData.type,
            data: chartData.data,
            options: chartData.options,
            });
        }
    },
    created () {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/top/quests')
        .then(response =>{
            const data = response.data
            const questName = []
            const questTotal = []
            data.forEach(element => {
                let name = element.detail_quest.name
                let total = element.total
                questName.push(name)
                questTotal.push(total)
            });
            this.dataCharts.data.labels = questName
            this.dataCharts.data.datasets[0].data = questTotal
        })

        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/secretchamber/statistic')
        .then(response => {
            this.rank = response.data
            console.log('rank', this.rank)
            const userData = []
            this.rank.data.forEach(element => {
                axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/top/quests/' + element.detail_user.id)
                    .then(response => {
                        let resData = {
                            detail_user: {
                                id: element.detail_user.id,
                                name: element.detail_user.name,
                                media: element.detail_user.media.path
                            },
                            data: [...response.data]
                        }
                        console.log('resData', resData)
                        this.user.push(resData)
                    })
            });
        })
    },
    mounted(){
        setTimeout(() => this.createChart('planet-chart', this.dataCharts),1000)
    }
}
</script>

<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="m-0 text-dark">Favorite Quest</h1>
                    </div>
                </div>
            </div>
        </div>


        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                            </div>
                            <div class="card-img-bottom">
                                <canvas id="planet-chart">
                                </canvas>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">All Players</h3>
                            </div>
                            <div class="card-body p-0">
                                <ul class="users-list clearfix">
                                    <li v-for='index in rank.data' :key="index.detail_user.id">
                                        <img :src="index.media" class="img-circle mr-2" style="cursor:pointer; width:40px; height:40px;" data-toggle="modal" :data-target="['#modal' + index.detail_user.id]">
                                        <a class="users-list-name">{{ index.detail_user.name }}</a>
                                        <span class="users-list-date">{{index.lastlogin}}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-footer text-center">
                                <a href="javascript::">View All Users</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="modal fade" v-for="index in user" :key="index.detail_user.id" :id="['modal' + index.detail_user.id]">
            <div class="modal-dialog" style="margin-top: 60vh; transform: translateY(-50%)">
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
                                    <img :src="index.detail_user.media" class="profile-user-img img-fluid img-circle" style="border-color: #619E85; cursor:pointer">
                                </div>
                                <h3 class="profile-username text-center">{{ index.detail_user.name }}</h3>
                                <ul class="list-group list-group-unbordered">
                                    <!-- <li class="list-group-item">
                                        <b>Rank</b>
                                        <a class="float-right">{{ index.data.level }}</a>
                                    </li> -->
                                    <li class="list-group-item">
                                        <div class="card card-success mb-0 collapsed-card">
                                            <div class="card-header" data-card-widget="collapse" style="cursor: pointer">
                                                <h3 class="card-title">Total Quests</h3>
                                            </div>
                                            <div class="card-body px-2 py-0">
                                                <ul class="list-group list-group-unbordered">
                                                    <li class="list-group-item" v-for="valueIn in index.data" :key="valueIn.detail_quest.id">
                                                        <b>{{ valueIn.detail_quest.name }}</b>
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
</template>
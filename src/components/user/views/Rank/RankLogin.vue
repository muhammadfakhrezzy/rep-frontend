<script>
import axios from 'axios'
import router from '../../../../router'
import Swal from 'sweetalert2'

export default {
    data() {
        return {
            login:'',
            mylogin:'',
            labels: ["Login"],
            types: [],
            totalQuest: '',
            warna:["blue","green","red","purple","yellow","black"],
            planetChartData :  {
                type: 'bar',
                data: {
                    labels: [],
                    datasets: [{
                        label: '# Login ranking',
                        data: [],
                        backgroundColor: [
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
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        xAxes: [{
                            ticks: {
                                padding: 10
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                padding: 20
                            }
                        }]
                    },
                    animation: {
                        animateScale: true
                    }
                }
            }
        }
    },
    created() {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/secretchamber/statistic')
        .then(response => {
            console.log('login',response)
            this.login = response.data.data
            let res = response.data
            let dataArray = res.data
            const allNama = []
            const allLogin = []
            dataArray.forEach((element, length) => {
                let nama = element.detail_user.name
                let totalLogin = element.total_login
                allNama.push(nama)
                allLogin.push(totalLogin)
            })
            this.planetChartData.data.labels = allNama
            this.planetChartData.data.datasets[0].data = allLogin
            console.log("planet",this.planetChartData)
            axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/secretchamber/login/history')
            .then(response => {
                console.log('history',response)
            })
        })
    },
    mounted(){
        setTimeout(()=> this.createChart('planet-chart', this.planetChartData), 1000)
    },

    methods: {
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
            type: chartData.type,
            data: chartData.data,
            options: chartData.options,
            });
        }
    }
}
</script>

<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="m-0 text-dark">Rank Login</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <div class="card-body">
                                    <div class="card-body table-responsive p-0">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                <th>No</th>  
                                                <th>Name</th>
                                                <th>Total Login</th>
                                                <th>Last Login</th>
                                                
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(value, length) in login" :key="length">
                                                    <td>{{length + 1}}</td>
                                                    <td>{{ value.detail_user.name }}</td>
                                                    <td>{{ value.total_login }}</td>
                                                    <td>{{ value.lastlogin }}</td>
                                                </tr>
                                            </tbody>
                                            </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h2 class="card-title">Total Login Players</h2>
                            </div>
                            <div class="card-img-bottom">
                                <canvas id="fooCanvas" :count="totalQuest" />
                                    <canvas id="planet-chart">

                                    </canvas>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
</template>
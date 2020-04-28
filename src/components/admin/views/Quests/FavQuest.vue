<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import router from '../../../../router'
import Chart from 'chart.js'

export default {
    data() {
        return {
        labels: ["Favorite Quest"],
        types: [],
        totalQuest: '',
        dataCharts : {
                type: 'bar',
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
            console.log("favorite", response)
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
            console.log(this.dataCharts)
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
                                <h2 class="card-title">Bar</h2>
                            </div>
                            <div class="card-img-bottom">
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
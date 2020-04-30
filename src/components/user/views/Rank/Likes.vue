<script>
import axios from 'axios'
import router from '../../../../router'
import Chart from 'chart.js'
export default {
    data() {
        return {
            like:'',
            weekly:'',
            monthly:'',
            global:'',
            planetChartData :  {
                type: 'doughnut',
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
    created () {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/feedback/daily')
        .then(response => {
            this.like = response.data
            console.log('daily',this.like)
            let res = response.data
            let dataArray = res
            const allNama = []
            const allLogin = []
            dataArray.forEach((element, length) => {
                let nama = element.detail_user.name
                let totalLogin = element.total_feedback
                allNama.push(nama)
                allLogin.push(totalLogin)
            })
            this.planetChartData.data.labels = allNama
            this.planetChartData.data.datasets[0].data = allLogin
            console.log("planet",this.planetChartData)
        })
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/feedback/weekly')
        .then(response => {
            this.weekly = response.data
            console.log('weekly',this.weekly)
        })
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/feedback/monthly')
        .then(response => {
            this.monthly = response.data
            console.log('monthly',this.monthly)
        })
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/feedback/global')
        .then(response => {
            this.global = response.data
            console.log('global',this.global)
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
                <div class="row">
                    <div class="col-sm-12">
                        <p>Rank Likes</p>
                        <div class="card">
                            <div class="card-header p-2">
                            <ul class="nav nav-pills">
                                <li class="nav-item">
                                    <a href="#daily" class="nav-link" data-toggle="tab">Daily
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#weekly" class="nav-link" data-toggle="tab">Weekly
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#monthly" class="nav-link" data-toggle="tab">Monthly
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#global" class="nav-link" data-toggle="tab">Global
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <div class="tab-content">
                                <div class="active tab-pane" id="daily">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Name</th>
                                                <th>Date</th>
                                                <th>Total Likes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(index, length) in like" :key="length">
                                                <td>{{length+1}}</td>
                                                <td>{{index.detail_user.name}}</td>
                                                <td>{{index.date}}</td>
                                                <td>{{index.total_feedback}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane" id="weekly">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Name</th>
                                                <th>Date From</th>
                                                <th>Date To</th>
                                                <th>Total Likes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(index, length) in weekly" :key="length">
                                                <td>{{length+1}}</td>
                                                <td>{{index.detail_user.name}}</td>
                                                <td>{{index.date_from}}</td>
                                                <td>{{index.date_to}}</td>
                                                <td>{{index.total_feedback}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane" id="monthly">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Name</th>
                                                <th>Date</th>
                                                <th>Total Likes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(index, length) in monthly" :key="length">
                                                <td>{{length+1}}</td>
                                                <td>{{index.detail_user.name}}</td>
                                                <td>{{index.date}}</td>
                                                <td>{{index.total_feedback}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane" id="global">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Name</th>
                                                <th>Total Likes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(index, length) in global" :key="length">
                                                <td>{{length+1}}</td>
                                                <td>{{index.detail_user.name}}</td>
                                                <td>{{index.total_feedback}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>   
        </div>
     </div>
</div>
</template>
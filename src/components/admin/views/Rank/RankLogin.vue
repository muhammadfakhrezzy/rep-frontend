<script>
import axios from 'axios'
import router from '../../../../router'
import Swal from 'sweetalert2'

export default {
    data() {
        return {
            login:'',
            all:'',
        }
    },
    created() {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/login/rank/student')
        .then(response => {
            // console.log('login',response)
            this.login = response.data
            
        })
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/login/rank/all')
        .then(response => {
            console.log(response)
            this.all = response.data
        })
    },
    // mounted(){
    //     setTimeout(()=> this.createChart('planet-chart', this.planetChartData), 1000)
    // },

    // methods: {
    //     createChart(chartId, chartData) {
    //         const ctx = document.getElementById(chartId);
    //         const myChart = new Chart(ctx, {
    //         type: chartData.type,
    //         data: chartData.data,
    //         options: chartData.options,
    //         });
    //     }
    // }
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
                                <ul class="nav nav-pills">
                                    <li class="nav-item">
                                        <a href="#student" class="nav-link active" data-toggle="tab">Rank Login</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#all" class="nav-link" data-toggle="tab">User Rank All</a>
                                    </li>
                                </ul>
                                <div class="card-body">
                                    <div class="tab-content">
                                        <div class="active tab-pane" id="student">
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
                                                    <td>{{ value.last_login }}</td>
                                                </tr>
                                            </tbody>
                                            </table>
                                        </div>
                                        <div class="tab-pane" id="all">
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
                                                <tr v-for="(value, length) in all" :key="length">
                                                    <td>{{length + 1}}</td>
                                                    <td>{{ value.detail_user.name }}</td>
                                                    <td>{{ value.total_login }}</td>
                                                    <td>{{ value.last_login }}</td>
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
        </div>
</template>
<script>
import axios from 'axios'
import router from '../../../../router'
export default {
    data() {
        return {
            like:'',
            weekly:'',
            monthly:'',
            global:'',
            admindaily:'',
            adminweekly:'',
            adminmonthly:'',
            adminglobal:''
        }
    },
    created () {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/feedback/daily')
        .then(response => {
            this.like = response.data
            // console.log('daily',this.like)
        })
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/feedback/weekly')
        .then(response => {
            this.weekly = response.data
            // console.log('weekly',this.weekly)
        })
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/feedback/monthly')
        .then(response => {
            this.monthly = response.data
            // console.log('monthly',this.monthly)
        })
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/feedback/global')
        .then(response => {
            this.global = response.data
            // console.log('global',this.global)
        }) 
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/feedback/daily/all')
        .then(response => {
            this.admindaily = response.data
            // console.log('admindaily',this.admindaily)
        })
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/feedback/weekly/all')
        .then(response => {
            this.adminweekly = response.data
            // console.log('admindaily',this.adminweekly)
        })
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/feedback/monthly/all')
        .then(response => {
            this.adminmonthly = response.data
            // console.log('admindaily',this.adminmonthly)
        })
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/feedback/global/all')
        .then(response => {
            this.adminglobal = response.data
            // console.log('admindaily',this.adminglobal)
        })
        
    },
}
</script>

<template>
       <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
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
                                    <a href="#global" class="nav-link active" data-toggle="tab">Global
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#admindaily" class="nav-link" data-toggle="tab">All User Daily
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#adminweekly" class="nav-link" data-toggle="tab">All User Weekly
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#adminmonthly" class="nav-link" data-toggle="tab">All User Monthly
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#adminglobal" class="nav-link" data-toggle="tab">All User Global
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <div class="tab-content">
                                <div class="tab-pane" id="daily">
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
                                <div class="tab-pane active" id="global">
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
                                <div class="tab-pane" id="admindaily">
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
                                            <tr v-for="(index, length) in admindaily" :key="length">
                                                <td>{{length+1}}</td>
                                                <td>{{index.detail_user.name}}</td>
                                                <td>{{index.date}}</td>
                                                <td>{{index.total_feedback}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane" id="adminweekly">
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
                                            <tr v-for="(index, length) in adminweekly" :key="length">
                                                <td>{{length+1}}</td>
                                                <td>{{index.detail_user.name}}</td>
                                                <td>{{index.date_from}}</td>
                                                <td>{{index.date_to}}</td>
                                                <td>{{index.total_feedback}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane" id="adminmonthly">
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
                                            <tr v-for="(index, length) in adminmonthly" :key="length">
                                                <td>{{length+1}}</td>
                                                <td>{{index.detail_user.name}}</td>
                                                <td>{{index.date}}</td>
                                                <td>{{index.total_feedback}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane" id="adminglobal">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Name</th>
                                                <th>Total Likes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(index, length) in adminglobal" :key="length">
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
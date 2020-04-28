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
           warna:["blue","green","red","purple","yellow","black"]
        }
    },
    created() {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/secretchamber/statistic')
        .then(response => {
            console.log('statistic',response)
            this.login = response.data.data

            const data = response.data.data
            console.log('data',data)
            const total = response.data.data.length
            this.totalQuest = total
            data.forEach((element, length) => {
                let questName = element.detail_user.name
                let totalQuest = element.total_login
                let type = {
                    bgColor:this.warna[length+1] ,
                    borderColor: "030c0c",
                    data: [totalQuest],
                    dataLabel: questName
                }
                this.types.push(type)
            });
            axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/secretchamber/login/history')
            .then(response => {
                console.log('history',response)
            })
        })
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
                                                    <td>{{ value.total_value }}</td>
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
                                    <chartjs-bar
                                        v-for="(item, index) in types" :key="index"
                                        :backgroundcolor="item.bgColor"
                                        :bind="true"
                                        :bordercolor="item.borderColor"
                                        :data="item.data"
                                        :datalabel="item.dataLabel"
                                        :labels="labels"
                                        target="fooCanvas"
                                    />
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>
</template>
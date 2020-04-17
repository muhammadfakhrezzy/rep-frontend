<script>
import axios from 'axios'
import Countdown from '../../../countdown/countdown'
export default {
    components: {
        'countdown' : Countdown
    },
    data() {
        return {
            all_data: '',
            user_id: this.$store.state.user.id,
            value:''
        }
    },
    computed: {
        getTimeNow() {
            let getDate = new Date()
            let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            let hours = ("0" + getDate.getHours()).slice(-2)
            let minutes = ("0" + getDate.getMinutes()).slice(-2)
            let seconds = ("0" + getDate.getSeconds()).slice(-2)
            let dateString = month[getDate.getMonth()] + ' ' + getDate.getDate() + ', ' + getDate.getFullYear() + ' ' + hours + ':' + minutes + ':' + seconds
            console.log(dateString)
            return dateString.toString()
        },
        getTimeEnd() {
            let getDate = new Date()
            let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            let hours = ("0" + getDate.getHours()).slice(-2)
            let minutes = ("0" + getDate.getMinutes()).slice(-2)
            let seconds = ("0" + getDate.getSeconds()).slice(-2)
            let dateString = month[getDate.getMonth()] + ' ' + getDate.getDate() + ', ' + getDate.getFullYear() + ' ' + '23:59:59'
            console.log(dateString)
            return dateString.toString()
        }
    },
    created() {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/difficulty/user/1')
            .then(response => {
                console.log(response)
                this.all_data = response.data.Data
            })
            .catch(error => {
                console.log
                (error)
            })
    },
    mounted (){
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/difficulty/user/1')
        .then(response => {
            this.value=response.data
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
                        <h1 class="m-0 text-dark">Daily Quests History</h1>
                        <h5 class="mt-2">Total ECP : {{value.value}} / 11</h5>
                        <div class="text-center">
                            <p>Remaining Time :</p>
                            <countdown 
                                :starttime="getTimeNow"
                                :endtime="getTimeEnd"
                                trans='{  
                                    "day":"Hari",
                                    "hours":"Jam",
                                    "minutes":"Menit",
                                    "seconds":"Detik",
                                    "expired":"Event has been expired.",
                                    "running":"Till the end of event.",
                                    "upcoming":"Till start of event.",
                                    "status": {
                                        "expired":"Expired",
                                        "running":"Running",
                                        "upcoming":"Future"
                                    }}' />
                        </div>
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
                                <h3 class="card-title">History</h3>
                                <div class="card-tools">
                                    <div class="pagination pagination-sm float-right">
                                        <div class="page-item">
                                            <a class="page-link">«</a>
                                        </div>
                                        <div class="page-item">
                                            <a class="page-link">1</a>
                                        </div>
                                        <div class="page-item">
                                            <a class="page-link">2</a>
                                        </div>
                                        <div class="page-item">
                                            <a class="page-link">3</a>
                                        </div>
                                        <div class="page-item">
                                            <a class="page-link">»</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body table-responsive p-0">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Quest Name</th>
                                            <th>Submit Date</th>
                                            <th>Point</th>
                                            <th>Link</th>
                                            <th>Likes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(index, length) in all_data" :key="length">
                                            <td>{{ length + 1 }}</td>
                                            <td>{{ index.quest }}</td>
                                            <td>{{ index.detail_record.created_at }}</td>
                                            <td>{{index.detail_record.value}}</td>
                                            <td><a :href="index.detail_record.link">Click Here</a></td>
                                            <td>
                                                <font-awesome-icon :icon="['fa', 'thumbs-up']" />
                                                {{ index.likes }}
                                             </td>
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
</template>
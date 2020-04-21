<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import Datepicker from 'vuejs-datepicker'
const swalWithBootstrap = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success py-2 px-4',
        cancelButton : 'btn btn-danger py-2 px-4 mx-3'
    },
    buttonsStyling: false
})
export default {
    data() {
        return {
            review_data: [],
            record_id: '',
            date: new Date(),
            
        }
    },
    methods: {
        getData(){
            axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/reviewer/difficulty/1/records')
            .then(response => {
                console.log(response)
                const dataRes =  response.data
                this.review_data = dataRes.sort((a, b) => (a.detail_record.id > b.detail_record.id) ? 1 : -1)
            })
        },
        Submit() {
            const tanggal = String(this.date)
            const baru = tanggal.split(' ')
            let bulan 
            switch (baru[1]){
             case  "Jan":
             bulan = '01';
             break;
             case  "Feb":
             bulan = '02';
             break;
             case  "Mar":
             bulan = '03';
             break;
             case  "Apr":
             bulan = '04';
             break;
             case  "May":
             bulan = '05';
             break;
             case  "Jun":
             bulan = '06';
             break;
             case  "July":
             bulan = '07';
             break;
             case  "Aug":
             bulan = '08';
             break;
             case  "Sep":
             bulan = '09';
             break;
             case  "Oct":
             bulan = '10';
             break;
             case  "Nov":
             bulan = '11';
             break;
             case  "Des":
             bulan = '12';
             break;
             default: 
             bulan = null
             break;   
            }
            
            const lala = [baru[3], bulan, baru[2]].join('-')
            console.log(lala)
             axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/secretchamber/statistic/quests/difficulty/1', {date:lala})
                .then(response => {
                    console.log(response)
                    const dataRes =  response.data
                    this.review_data = dataRes.sort((a, b) => (a.detail_record.id > b.detail_record.id) ? 1 : -1)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        funcLike(id) {
            axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/user/records/' + id + '/feedback', {like: 1.0}, {dislike:0})
                .then(response => {
                    console.log(response)
                    this.getData()
                })
                .catch(error => {
                    console.log(error)
                    alert('Sudah Like')
                })
        },
        verif(id) {
            const status = {
                status: 'verified'
            }
            swalWithBootstrap.fire({
                title: 'Are you sure verified this quest?',
                text: 'Player will get a point after the quest has been verified',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                reverseButtons: true
            }).then(result => {
                if(result.value) {
                    axios.put('https://dev.alphabetincubator.id/rep-backend/public/api/reviewer/records/' + id + '/update', status)
                        .then(response => {
                            console.log(response)
                            swalWithBootstrap.fire(
                                'Success!',
                                'Player got a point',
                                'success'
                            )
                            this.getData()
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }
            })
        },
        reject(id) {
            const status = {
                status: 'reject'
            }
            swalWithBootstrap.fire({
                title: 'Are you sure rejected this quest?',
                text: 'Player will not get a point if the quest has been rejected',
                icon: 'error',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                reverseButtons: true
            }).then(result => {
                if(result.value) {
                    axios.put(' https://dev.alphabetincubator.id/rep-backend/public/api/user/records/' + id + '/feedback', status)
                        .then(response => {
                            console.log(response)
                            swalWithBootstrap.fire(
                                'Success!',
                                'Player don\'t got a point',
                                'success'
                            )
                            this.getData()
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }
            })
        }
    },
    created() {
        this.getData()
    },
    components : {
        Datepicker
    }
}
</script>

<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="m-0 text-dark">Quests Review</h1>
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
                                <div class="card-tools" style="float:left;">
                                    <div class="input-group input-group-sm"> 
                                   <label>
                                       <datepicker v-model="date">
                                       </datepicker>
                                    </label>
                                    <button @click="Submit()" class="btn btn-sm btn-primary ml-4">Submit</button>
                                  </div>
                                </div>
                            </div>
                            <div class="card-body table-responsive p-0">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Quest Name</th>
                                            <th>User</th>
                                            <th>Submit Date</th>
                                            <th>Link</th>
                                            <th>Like</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(index, length) in review_data" :key="index.detail_record.id">
                                            <td>{{ length + 1 }}.</td>
                                            <td>{{ index.quest }}</td>
                                            <td>{{ index.user }}</td>
                                            <td>{{ index.detail_record.created_at }}</td>
                                            <td><a :href="index.detail_record.link">Click Here</a></td>
                                            <td>
                                                <a @click="funcLike(index.detail_record.id)" class="mr-3" type="submit" >
                                                <font-awesome-icon  style="cursor: pointer" :icon="['fa', 'thumbs-up']" /> 
                                                </a>{{index.likes}}
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

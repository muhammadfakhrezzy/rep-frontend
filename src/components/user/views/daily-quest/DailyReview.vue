<script>
import axios from 'axios'
import Swal from 'sweetalert2'
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
            record_id: ''
        }
    },
    methods: {
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
                    axios.put('https://dev.alphabetincubator.id/rep-backend/public/api/reviewer/records/' + id + '/update', status)
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
        },
        getData() {
            axios.get('https://dytlan.alphabetincubator.id/api/reviewer/difficulty/1/records')
            .then(response => {
                console.log(response)
                this.review_data = response.data[0].records
            })
        }
    },
    created() {
        this.getData()
    }
}
</script>

<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="m-0 text-dark">Daily Quests Review</h1>
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
                                <h3 class="card-title">Quests Review</h3>
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
                                            <th>User</th>
                                            <th>Submit Date</th>
                                            <th>Link</th>
                                            <th>Like</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(index, length) in review_data" :key="length">
                                            <td>{{ length + 1 }}.</td>
                                            <td>{{ index.quest.name }}</td>
                                            <td>{{ index.user.name }}</td>
                                            <td>{{ index.created_at | cutString }}</td>
                                            <td><a :href="['http://' + index.link]" target="_blank">Click Here</a></td>
                                            <td>
                                                <font-awesome-icon :icon="['fa', 'thumbs-up']" />
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

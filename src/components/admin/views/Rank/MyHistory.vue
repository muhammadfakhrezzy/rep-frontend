<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import { OrbitSpinner } from 'epic-spinners'
const swalWithBootstrap = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success py-2 px-4',
        cancelButton : 'btn btn-danger py-2 px-4 mx-3'
    },
    buttonsStyling: false
})


export default {
    components: {
        OrbitSpinner
    },
    data() {
        return {
            dataArray: '',
            loading: false,
            page: ''
        }
    },
    methods: {
        prevPage () {
            this.loading = true
            this.page--
            axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/login/history/own?page=' + this.page)
                .then(response => {
                    this.dataArray = response.data.login_history,
                    this.page = this.dataArray.current_page
                    this.loading = false
                })
            },
        nextPage () {
            this.loading = true
            this.page++
            axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/login/history/own?page=' + this.page)
                .then(response => {
                    this.dataArray = response.data.login_history,
                    this.page = this.dataArray.current_page
                    this.loading = false
                })
        }
    },
    created() {
        this.loading = true
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/login/history/own?page=')
        .then(response => {
            // console.log('history own',response)
            this.dataArray = response.data.login_history,
            this.page = this.dataArray.current_page
            this.loading = false
        })
    },
}

</script>

<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="m-0 text-dark">My History Login</h1>
                        <p class="m-0 text-dark">Total Login : {{dataArray.total}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="overlay" v-if="loading">
                                <orbit-spinner style="display: block; margin: auto"
                                        :animation-duration="1200"
                                        :size="55"
                                        color="black"
                                        />
                            </div>
                            <div class="card-body table-responsive p-0">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Ip address</th>
                                            <th>Platform</th>
                                            <th>OS</th>
                                            <th>Browser</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(value, length) in dataArray.data" :key="value.id">
                                            <td>{{ length }}.</td>
                                            <td>{{ value.ip }}</td>
                                            <td>{{ value.platform }}</td>
                                            <td>{{ value.os }}</td>
                                            <td>{{ value.browser }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- Pagination -->
                            <div class="my-4"> 
                                <ul class="pagination pagination-md justify-content-center text-center">
                                    <li class="page-item"
                                        :class="dataArray.current_page === 1 ? 'disabled' : ''"
                                    >
                                        <a class="page-link" @click="prevPage">
                                            Previous
                                        </a>
                                    </li>
                                    <li class="page-link" style="background-color: inherit"> 
                                        {{ dataArray.current_page }} of {{ dataArray.last_page }}
                                    </li>
                                    <li  class="page-item" 
                                        :class="dataArray.current_page === dataArray.last_page ? 'disabled' : ''"
                                    >
                                        <a class="page-link" @click="nextPage">
                                            Next
                                        </a>
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

<style>
a:hover {
    cursor: pointer;
}
@keyframes spinner {
    to { transform: rotate(360deg); }
}
.fa-spinner {
    animation: spinner 1s linear infinite;
}
</style>
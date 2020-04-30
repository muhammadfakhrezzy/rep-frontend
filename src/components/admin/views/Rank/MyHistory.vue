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
            record_id: '',
            date: new Date(),
            page:1,
            loading:false,
            perPage: 10
            
        }
    },
    // methods: {
    //     getData(){
    //         axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/login/history/own?page=' + this.page)
    //         .then(response => {
    //             console.log(response)
                // const dataRes =  response.data
                // this.review_data = [].slice.call(dataRes).sort((a,b) => (a.detail_record.id > b.detail_record.id) ? 1 : -1)
                // console.log(this.review_data)
                // this.loading = false
        //     })
        // },
//         prevPage () {
//             // this.loading = true
//             this.page--
//             window.scrollTo({top: 0, behavior: 'smooth'})
//             },
//         nextPage () {
//             // this.loading = true
//             this.page++
//             window.scrollTo({top: 0, behavior: 'smooth'})
// },
    created() {
        this.loading = true
        // this.getData()
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/login/history/own?page=')
        .then(response => {
            console.log(response)
        })
    },
//     computed : {
//         showRepos () {
//             let start = (this.page - 1) * this.perPage
//             let end = start + this.perPage
//             this.loading = false
//             return this.review_data.slice(start, end)
//   },
//         lastPage () {
//             let length = this.review_data.length 
//             return Math.ceil(length / this.perPage)
//             }
//     },
// }
}

</script>

<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="m-0 text-dark">My History Login</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
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
                                        <!-- <div class="d-flex justify-content-center"> -->
                                        <Loading v-if="loading" />
                                        <!-- </div> -->
                                        <!-- <tr v-else v-for="(index, length) in showRepos" :key="index.detail_record.id">
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
                                        </tr> -->
                                        <!-- </div> -->
                                    </tbody>
                                </table>
                            </div>
                            <!-- Pagination -->
                            <!-- <div class="my-4"> 
                                <ul class="pagination pagination-md justify-content-center text-center">
                                    <li  class="page-item"
                                        :class="page === 1 ? 'disabled' : ''"
                                    >
                                    <a 
                                        class="page-link" 
                                        @click="prevPage" 
                                    >
                                        Previous
                                    </a>
                                    </li>
                                    <li class="page-link" style="background-color: inherit"> 
                                    {{ page }} of {{ lastPage }}
                                    </li>
                                    <li  class="page-item" 
                                        :class="page === lastPage ? 'disabled' : ''"
                                    >
                                    <a class="page-link" 
                                        @click="nextPage"
                                    >
                                        Next
                                    </a>
                                    </li>
                                </ul>
                            </div>./Pagination -->
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
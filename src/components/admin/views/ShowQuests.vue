<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import Datepicker from 'vuejs-datepicker'
import Loading from './Loading.vue'
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
    methods: {
        getData(){
            axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/reviewer/difficulty/1/records?page=' + this.page)
            .then(response => {
                console.log(response)
                const dataRes =  response.data
                this.review_data = [].slice.call(dataRes).sort()
                console.log(this.review_data)
            })
        },
        prevPage () {
            this.loading = true
            this.page--
            window.scrollTo({top: 0, behavior: 'smooth'})
            },
        nextPage () {
            this.loading = true
            this.page++
            window.scrollTo({top: 0, behavior: 'smooth'})
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
                    this.review_data = [].slice.call(dataRes).sort()
                    console.log(this.review_data)

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
    },
    created() {
        this.loading = true
        this.getData()
    },
    components : {
        Datepicker
    },
    computed : {
        showRepos () {
            let start = (this.page - 1) * this.perPage
            let end = start + this.perPage
            this.loading = false
            return this.review_data.slice(start, end)
  },
        lastPage () {
            let length = this.review_data.length 
            return Math.ceil(length / this.perPage)
            }
    },
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
                                        <!-- <div v-if="loading" class="justify-content-center"> -->
                                            <Loading>
                                            </Loading>
                                        <tr v-for="(index, length) in showRepos" :key="index.detail_record.id">
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
                                        <!-- </div> -->
                                    </tbody>
                                </table>
                            </div>
                            <div class="my-4"> <!-- Pagination -->
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
 </div><!--./Pagination -->
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
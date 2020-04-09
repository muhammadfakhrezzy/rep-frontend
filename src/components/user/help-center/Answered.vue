<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            all_data: '',
            user_id: this.$store.state.user.id,
            update_note:'',
            search:''
        }
    },
    created() {
        axios.get('https://dytlan.alphabetincubator.id/api/superuser/postrequest')
            .then(response => {
                console.log(response)
                this.all_data = response.data
            })
    },
    computed: {
        filteredall_data: function(){
             return this.all_data.filter((data) => {
                 return data.question.match(this.search)
             }); 
        }
    },
    methods: {
        update_question(id) {
            Swal.fire({
                title: 'Are you sure to answer the question',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            })  .then(result => {
                    if(result.value) {
                        axios.put('https://dytlan.alphabetincubator.id/api/superuser/postrequest/' + id, {status: 'verified', note: this.update_note})
                            .then(response => {
                                console.log(response)
                                Swal.fire(
                                    'Success!',
                                    'question has been answered',
                                    'success'
                                )
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    }
            })
    }
    }
}

</script>

<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="m-0 text-dark">Answer Question</h1>
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
                                <h3 class="card-title">Questions</h3>
                                <div class="card-tools">
                                    <div class="pagination pagination-sm float-right">
                                        <input class="form-control mr-sm-2" type="search" placeholder="Search" v-model="search">
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="card-body table-responsive p-0">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Email</th>
                                            <th>Question</th>
                                            <th>Answer</th>
                                            <th>Submitted</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(data, length) in all_data" :key="data.id">
                                            <td>{{ length + 1 }}</td>
                                            <td>{{ data.user.email }}</td>
                                            <td>{{ data.question }}</td>
                                            <td>{{ data.note }}</td>
                                            <td>{{ data.created_at | cutString }}, {{ data.created_at | cutTime }}</td>
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
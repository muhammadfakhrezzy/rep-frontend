<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            all_data: '',
            user_id: this.$store.state.user.id,
            update_note:''
        }
    },
    created() {
        axios.get('https://dytlan.alphabetincubator.id/api/secretchamber/postrequest')
            .then(response => {
                console.log(response)
                this.all_data = response.data
            })
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
                        axios.put('https://dytlan.alphabetincubator.id/api/secretchamber/postrequest/' + id, {status: 'verified', note: this.update_note})
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
                                            <th>Email</th>
                                            <th>Question</th>
                                            <th>Status</th>
                                            <th>Submitted</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(data, length) in all_data" :key="data.id">
                                            <td>{{ length + 1 }}</td>
                                            <td>{{ data.user.email }}</td>
                                            <td>{{ data.question }}</td>
                                            <td>
                                                <span v-if="data.status === 'verified'" class="badge bg-success">verified</span>
                                                <span v-else-if="data.status === 'pending'" class="badge bg-warning">pending</span>
                                                <span v-else class="badge bg-danger">reject</span>
                                            </td>
                                            <td>{{ data.created_at | cutString }}, {{ data.created_at | cutTime }}</td>
                                            <td>
                                                <button class="btn btn-sm btn-primary mr-2" data-toggle="modal" :data-target="['#' + 'question' + data.id]">Answer</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" :id="['question' + data.id]" v-for="data in all_data" :key="data.id">
                <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Answer Question</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <font-awesome-icon icon="times" aria-hidden="true" />
                            </button>
                        </div>
                        <div class="modal-body pt-0">
                            <div class="form-group">
                                <label>{{data.user.email}}</label>
                                <p class="form-control">{{ data.question }}</p>
                                <label>Answer</label>
                                <textarea class="form-control" v-model="update_note"></textarea>
                            </div>
                            <div class="form-group">
                                <button @click="update_question(data.id)"  class="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
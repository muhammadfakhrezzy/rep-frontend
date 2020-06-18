<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import router from '../../../../router'
export default {
    data() {
        return {
            difficulty_list: [],
            update_name: ''
        }
    },
    methods: {
        update_difficulty(id) {
            Swal.fire({
                title: 'Are you sure update difficulty',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            })  .then(result => {
                    if(result.value) {
                        axios.put('https://dytlan.alphabetincubator.id/api/secretchamber/difficulties/' + id, {name: this.update_name})
                            .then(response => {
                                console.log(response)
                                Swal.fire(
                                    'Success!',
                                    'Difficulty has been updated',
                                    'success'
                                )
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    }
            })
        },
        delete_difficulty(id) {
            Swal.fire({
                title: 'Are you sure delete this difficulty?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            })  .then(result => {
                    if(result.value) {
                        axios.delete('https://dev.alphabetincubator.id/rep-backend/public/api/secretchamber/difficulties/' + id)
                            .then(response => {
                                console.log(response)
                                Swal.fire(
                                    'Success!',
                                    'Your difficulty has been deleted',
                                    'success'
                                )
                                router.push('/listdifficulty')
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    }
            })
        }
    },
    created() {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/secretchamber/difficulties')
            .then(response => {
                console.log(response)
                this.difficulty_list = response.data
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
                        <h1 class="m-0 text-dark">List Difficulty</h1>
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
                                <h3 class="card-title">Difficulty</h3>
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
                                            <th>Difficulty Name</th>
                                            <th>Total Quest</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(index, length) in difficulty_list" :key="length">
                                            <td>{{ length + 1 }}</td>
                                            <td>{{ index.name }}</td>
                                            <td>{{ index.quests.length }}</td>
                                            <td>
                                                <button class="btn btn-sm btn-primary mr-2" data-toggle="modal" :data-target="['#' + 'difficulty' + index.id]">Update</button>
                                                <button @click="delete_difficulty(index.id)" class="btn btn-sm btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" :id="['difficulty' + index.id]" v-for="(index, length) in difficulty_list" :key="length">
                <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Update Difficulty</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <font-awesome-icon icon="times" aria-hidden="true" />
                            </button>
                        </div>
                        <div class="modal-body pt-0">
                            <div class="form-group">
                                <label>Update Name</label>
                                <input type="text" class="form-control" v-model="update_name">
                            </div>
                            <div class="form-group">
                                <button @click="update_difficulty(index.id)" class="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
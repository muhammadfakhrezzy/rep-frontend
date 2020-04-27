<script>
import axios from 'axios'
import router from '../../../../router'
import Swal from 'sweetalert2'

export default {
    data() {
        return {
            all_data:'',
            name:'',
            email:'',
            role_id:'',
            user:''
        }
    },
    methods: {
        updateValue(value) {
            this.name = value
        },
        update_user(id, name, email, role_id) {
            console.log(name, email, role_id)
            Swal.fire({
                title: 'Are you sure want to update the User ?',
                icon: 'warning',
                // imageUrl: "https://lh3.googleusercontent.com/-L0L0yfE5VpA/XpfifMdyIXI/AAAAAAAABFU/ZrtQpPoKXHsAj0kgc70Gn8IwWsybi0nbACK8BGAsYHg/s0/2020-04-15.png",
                // imageWidth: 150,
                // imageHeight: 60,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            })  .then(result => {
                    if(result.value) {
                        let data = {
                            name: name,
                            email: email,
                            role_id: role_id
                        }
                        console.log(data)
                        axios.put('https://dev.alphabetincubator.id/rep-backend/public/api/secretchamber/users/' + id, data)
                            .then(response => {
                                console.log(response)
                                Swal.fire(
                                    'Success!',
                                    'User has been updated',
                                )
                                this.getAllData()
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    }
            })
        },
        delete_user(id) {
            Swal.fire({
                title: 'Are you sure want to delete the User ?',
                icon: 'warning',
                // imageUrl: "https://lh3.googleusercontent.com/-L0L0yfE5VpA/XpfifMdyIXI/AAAAAAAABFU/ZrtQpPoKXHsAj0kgc70Gn8IwWsybi0nbACK8BGAsYHg/s0/2020-04-15.png",
                // imageWidth: 150,
                // imageHeight: 60,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            })  .then(result => {
                    if(result.value) {
                        axios.delete('https://dev.alphabetincubator.id/rep-backend/public/api/secretchamber/users/' + id)
                            .then(response => {
                                console.log(response)
                                Swal.fire(
                                    'Success!',
                                    'User has been deleted',
                                )
                            this.$router.push('/admin')
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    }
            })
        },
        getAllData() {
            axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/secretchamber/users')
            .then(response => {
                console.log(response)
                this.all_data = response.data
            })
            .catch(error => {
                console.log
                (error)
            })
        }
    },
    created() {
        this.getAllData()
    },
    mounted() {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/secretchamber/users/create')
            .then(response => {
                console.log(response)
                this.user = response.data.dropdown_list
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
                        <h1 class="m-0 text-dark">Show User</h1>
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
                                            <th>UserName</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(index, length) in all_data" :key="length">
                                            <td>{{ length + 1 }}</td>
                                            <td>{{ index.name }}</td>
                                            <td>{{ index.email }}</td>
                                            <td>{{ index.role.name }}</td>
                                            <td>
                                                <button class="btn btn-sm btn-primary mr-2" data-toggle="modal" :data-target="['#' + 'difficulty' + index.id]">Update</button>
                                                <button @click="delete_user(index.id)" class="btn btn-sm btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" v-for="(index, length) in all_data" :key="length" :id="['difficulty' + index.id]">
                <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Update User</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <font-awesome-icon icon="times" aria-hidden="true" />
                            </button>
                        </div>
                        <div class="modal-body pt-0">
                            <div class="form-group">
                                <label>Update Name</label>
                                <input type="text" class="form-control" v-model="index.name">
                            </div>
                            <div class="form-group">
                                <label>Update Email</label>
                                <input type="text" class="form-control" v-model="index.email">
                            </div>
                            <div class="form-group">
                                <label>Update Role</label>
                                    <select class="form-control select2" style="width: 100%;" v-model="role_id">
                                        <option v-for="(role) in user" :key="role.id" :value="role.id">{{ role.name }}</option>
                                    </select>
                            </div>
                            <div class="form-group">
                                <button @click="update_user(index.id, index.name, index.email, role_id)" class="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
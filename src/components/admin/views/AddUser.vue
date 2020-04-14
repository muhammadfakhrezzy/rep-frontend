<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import router from '../../../router'
export default {
    data() {
        return {
            name:''
        }
    },
    methods: {
        submit() {
            Swal.fire({
                title: 'Are you sure want to add this user ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            })  .then(result => {
                    if(result.value) {
                        axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/superuser/users')
                            .then(response => {
                                this.name=response.data
                                console.log(response)
                                Swal.fire(
                                    'Sucess!',
                                    'User has been added',
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
                        <h1 class="m-0 text-dark">Add User</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-olive">
                            <div class="card-header">
                                <!-- <h3 class="card-title">BBC</h3> -->
                            </div>
                            <div class="card-body">
                                <form role="form">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input type="email" class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="email" class="form-control">
                                            </div>
                                            <div class="form-group">
                                                <label>Role</label>
                                                <select class="form-control select2" style="width: 100%;">
                                                    <option></option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer">
                                <button @click="submit" class="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
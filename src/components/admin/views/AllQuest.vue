<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    data(){
        return {
            dataQuest: [],
            update_name: '',
            update_code : '',
            update_description: '',
            update_value : '',
            update_daily_limit:'',
            update_expires_in:'',
            update_difficulty_id:''
        }
    },methods: {
        update_quest(id) {
            Swal.fire({
                title: 'Are you sure update quest',
                icon: 'warning',
                imageUrl: "https://lh3.googleusercontent.com/-L0L0yfE5VpA/XpfifMdyIXI/AAAAAAAABFU/ZrtQpPoKXHsAj0kgc70Gn8IwWsybi0nbACK8BGAsYHg/s0/2020-04-15.png",
                imageWidth: 150,
                imageHeight: 60,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            })  .then(result => {
                    if(result.value) {
                        axios.put('https://dytlan.alphabetincubator.id/api/secretchamber/quests/' + id, {name: this.update_name}, {code: this.update_code}, {description: this.update_description}, {value: this.update_value}, {daily: this.update_daily_limit}, {expires: this.update_expires_in})
                            .then(response => {
                                console.log(response)
                                Swal.fire({
                                imageUrl: "https://lh3.googleusercontent.com/-L0L0yfE5VpA/XpfifMdyIXI/AAAAAAAABFU/ZrtQpPoKXHsAj0kgc70Gn8IwWsybi0nbACK8BGAsYHg/s0/2020-04-15.png",
                                imageWidth: 150,
                                imageHeight: 60,
                                title:'Success !',
                                text:'Quest has been updated'
                                }
                                )
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    }
            })
        },
        delete_quest(id) {
            Swal.fire({
                title: 'Are you sure delete this quest?',
                icon: 'warning',
                showCancelButton: true,
                imageUrl: "https://lh3.googleusercontent.com/-L0L0yfE5VpA/XpfifMdyIXI/AAAAAAAABFU/ZrtQpPoKXHsAj0kgc70Gn8IwWsybi0nbACK8BGAsYHg/s0/2020-04-15.png",
                imageWidth: 150,
                imageHeight: 60,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            })  .then(result => {
                    if(result.value) {
                        axios.delete('https://dytlan.alphabetincubator.id/api/superuser/quests/' + id)
                            .then(response => {
                                console.log(response)
                                Swal.fire({
                                imageUrl: "https://lh3.googleusercontent.com/-L0L0yfE5VpA/XpfifMdyIXI/AAAAAAAABFU/ZrtQpPoKXHsAj0kgc70Gn8IwWsybi0nbACK8BGAsYHg/s0/2020-04-15.png",
                                imageWidth: 150,
                                imageHeight: 60,
                                title:'Success !',
                                text:'Your quest has been Deleted'
                                }
                                )
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    }
            })
        }
    },
    created() {
        axios.get('https://dytlan.alphabetincubator.id/api/superuser/quests')
            .then(response => {
                this.dataQuest = response.data
                console.log(this.dataQuest)
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
                        <h1 class="m-0 text-dark">All Quest</h1>
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
                                <h3 class="card-title">All Quest List Table</h3>
                            </div>
                            <div class="card-body table-responsive p-4">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Code</th>
                                            <th>Description</th>
                                            <th>Point</th>
                                            <th>Daily Limit</th>
                                            <th>Expires in</th>
                                            <th>Difficulty ID</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="index in dataQuest" :key="index.id">
                                            <td>{{ index.id }}</td>
                                            <td>{{ index.name }}</td>
                                            <td>{{ index.code }}</td>
                                            <td>{{ index.description}}</td>
                                            <td>{{ index.value }}</td>
                                            <td>{{ index.daily_limit }}</td>
                                            <td>{{ index.expires_in}}</td>
                                            <td>{{ index.difficulty_id }}</td>
                                            <td>
                                                <button class="btn btn-sm btn-primary mr-2" data-toggle="modal" :data-target="['#' + 'quest' + index.id]">Update</button>
                                            </td>
                                            <td>
                                                <button @click="delete_quest(index.id)" class="btn btn-sm btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" :id="['quest' + index.id]" v-for="index in dataQuest" :key="index.id">
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
                                <label>Update Code</label>
                                <input type="text" class="form-control" v-model="update_code">
                                <label>Update Description</label>
                                <input type="text" class="form-control" v-model="update_description">
                                <label>Update Point</label>
                                <input type="text" class="form-control" v-model="update_value">
                                <label>Update Daily Limit</label>
                                <input type="text" class="form-control" v-model="update_daily_limit">
                                <label>Update Expires</label>
                                <input type="date" class="form-control" v-model="update_expires_in">
                                <label>Update Difficulty ID</label>
                                <input type="text" class="form-control" v-model="update_difficulty_id">
                            </div>
                            <div class="form-group">
                                <button @click="update_quest(index.id)" class="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    data(){
        return {
            dataQuest: []
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
                            <div class="card-body table-responsive p-0">
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
<script>
import axios from 'axios'
export default {
    data() {
        return {
            all_data: '',
            user_id: this.$store.state.user.id,
        }
    },
    created() {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/difficulty/user/1')
            .then(response => {
                console.log(response)
                this.all_data = response.data[0].records
                
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
                        <h1 class="m-0 text-dark">Daily Quests History</h1>
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
                                <h3 class="card-title">History</h3>
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
                                            <th>Quest ID</th>
                                            <th>Submit Date</th>
                                            <th>Status</th>
                                            <th>Point</th>
                                            <th>Reviewer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(index, length) in all_data" :key="length">
                                            <td>{{ length + 1 }}</td>
                                            <td>{{ index.quest.name }}</td>
                                            <td>{{ index.created_at | cutString }}, {{ index.created_at | cutTime }}</td>
                                            <td>
                                                <span v-if="index.status === 'verified'" class="badge bg-success">verified</span>
                                                <span v-else-if="index.status === 'pending'" class="badge bg-warning">pending</span>
                                                <span v-else class="badge bg-danger">reject</span>
                                            </td>
                                            <td>{{index.value}}</td>
                                            <td>--</td>
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
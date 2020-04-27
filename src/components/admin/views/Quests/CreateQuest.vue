<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import router from '../../../../router'
export default {
    data() {
        return {
            difficulty: [],
            name: '',
            code: '',
            description: '',
            value: '',
            daily_limit: '',
            expires_in: '',
            difficulty_id: ''
        }
    },
    methods: {
        submit() {
            const questData = {
                code: this.code,
                name: this.name,
                description: this.description,
                value: this.value,
                daily_limit: this.daily_limit,
                expires_in: this.expires_in,
                difficulty_id: this.difficulty_id
            }
            console.log(questData)
            Swal.fire({
                title: 'Are you sure create this quest ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            })  .then(result => {
                    if(result.value) {
                        axios.post('https://dytlan.alphabetincubator.id/api/secretchamber/quests', questData)
                            .then(response => {
                                console.log(response)
                                Swal.fire(
                                    'Success!',
                                    'Quest has been created',
                                    'success'
                                )
                            router.push('/createquest')
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    }
            })
        }
    },
    async created() {
        await axios.get('https://dytlan.alphabetincubator.id/api/secretchamber/difficulties')
            .then(response => {
                console.log(response.data)
                for(let key in response.data){
                    const obj = response.data[key]
                    this.difficulty.push(obj)
                    this.loading = ''
                }
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
                        <h1 class="m-0 text-dark">Create Quest</h1>
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
                                Quest
                            </div>
                            <div class="card-body">
                                <form role="form" @submit.prevent="submit">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Quest Name</label>
                                                <input type="text" class="form-control" placeholder="Membuat Cermi..." v-model="name">
                                            </div>
                                            <div class="form-group">
                                                <label>Quest Code</label>
                                                <input type="text" class="form-control" placeholder="CMI..." v-model="code">
                                            </div>
                                            <div class="form-group">
                                                <label>Difficulty Quest</label>
                                                <select class="form-control select2" style="width: 100%;" v-model="difficulty_id">
                                                    <option v-for="(index) in difficulty" :key="index.id" :value="index.id">{{ index.name }}</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>Description</label>
                                                <input type="text" class="form-control" placeholder="Cermi yang harus minimal 300 kata ..." v-model="description">
                                            </div>
                                            <div class="form-group">
                                                <label>Point</label>
                                                <input type="number" class="form-control" placeholder="2..." v-model="value">
                                            </div>
                                            <div class="form-group">
                                                <label>Limit</label>
                                                <input type="number" class="form-control" placeholder="3..." v-model="daily_limit">
                                            </div>
                                            <div class="form-group">
                                                <label>Expires</label>
                                                <input type="date" class="form-control" v-model="expires_in">
                                            </div>
                                            <div class="form-group">
                                                <button class="btn btn-primary" type="submit">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
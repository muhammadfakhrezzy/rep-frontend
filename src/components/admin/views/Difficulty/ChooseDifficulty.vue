<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    data(){
        return {
            difficulty: [],
            choose: '',
            loading: '',
            checkbox: ''
        }
    },
    methods: {
        submit() {
            if(!this.choose || !this.checkbox) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
                return
            }
            Swal.fire({
                title: 'Are you sure choose this difficulty?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then(result => {
                if(result.value) {
                    axios.post('https://dytlan.alphabetincubator.id/api/secretchamber/users/attach/' + this.$store.state.user.id, {difficulty_id : this.choose})
                        .then(response => {
                            console.log(response)
                            Swal.fire(
                                'Success!',
                                'Your choose has been sended.',
                                'success'
                            )
                        })
                        .catch(error => console.log(error))
                }
            })
        }
    },
    computed: {
        load(){
            return this.loading === 'loading'
        }
    },
    created() {
        this.loading = 'loading'
        axios.get('https://dytlan.alphabetincubator.id/api/secretchamber/difficulties')
            .then(response => {
                console.log(response)
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
                        <h1 class="m-0 text-dark">Choose Difficulty</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-olive">
                            <div class="overlay" v-if="load">
                                <font-awesome-icon :icon="['fas', 'sync-alt']" style="font-size: 50px" />
                            </div>
                            <div class="card-header">
                                
                            </div>
                            <div class="card-body">
                                <form role="form" @submit.prevent="submit">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Difficulty Quest</label>
                                                <select class="form-control select2" style="width: 100%;" v-model="choose">
                                                    <option v-for="(index) in difficulty" :key="index.id" :value="index.id">{{ index.name }}</option>
                                                </select>
                                            </div>
                                            <div class="form-check mb-3">
                                                <input type="checkbox" v-model="checkbox" class="form-check-input">
                                                <label class="form-check-label">I agree to the <a href="#">terms of service</a>.</label>
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
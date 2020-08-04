<template>
    <div class="content-wrapper">
        <div class="container">
            <div class="row justify-content-center mt-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="d-flex align-items-center">
                                <h2>Ask Question</h2>
                                <div class="ml-auto">
                                    <router-link to="/admin/faq" class="btn btn-outline-secondary">Back to all Questions</router-link>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <form @submit.prevent="submit">
                                <div class="form-group">
                                    <label for="question-title">Question Title</label>
                                    <input v-model="title" type="text" name="title" class="form-control">
                                </div>
                                <div class="form-group">
                                    <label for="question-body">Explain you question</label>
                                    <textarea v-model="body" rows="10" class="form-control"></textarea>
                                </div>
                                <div class="form-group text-center">
                                    <button type="submit" class="btn btn-outline-primary btn-lg">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            title:'',
            body:''
        }
    },
    methods: {
        submit() {
            Swal.fire({
                title:'Are you sure ?',
                imageUrl: "https://lh3.googleusercontent.com/-L0L0yfE5VpA/XpfifMdyIXI/AAAAAAAABFU/ZrtQpPoKXHsAj0kgc70Gn8IwWsybi0nbACK8BGAsYHg/s0/2020-04-15.png",
                imageWidth: 150,
                imageHeight: 60,
                showCancelButton:true,
                confirmButtonText:'Yes',
                cancelButtonText:'No',
                reverseButtons:true
            })
            .then(result => {
                if(result.value){
                    let data = {
                        title:this.title,
                        body:this.body
                    }
                    axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/faq/request', data)
                    .then(response => {
                        console.log(response)
                        Swal.fire({
                            position: 'center',
                            imageUrl: "https://lh3.googleusercontent.com/-L0L0yfE5VpA/XpfifMdyIXI/AAAAAAAABFU/ZrtQpPoKXHsAj0kgc70Gn8IwWsybi0nbACK8BGAsYHg/s0/2020-04-15.png",
                            imageWidth: 150,
                            imageHeight: 60,
                            icon: 'success',
                            text: 'Your result has been sended',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.$router.push('/faq')
                    })
                    .catch(error => console.log(error))
                }else if(response.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrap.fire(
                        'Cancelled',
                        'Your result is still safe',
                        'error'
                    )
                }
            })
        }
    }
}
</script>
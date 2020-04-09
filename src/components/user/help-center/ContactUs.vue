<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="m-0 text-dark">Kirim Laporan</h1>
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
                                <h3 class="card-title"></h3>
                            </div>
                            <div class="card-body">
                                <form role="form">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" class="form-control" :placeholder="name" disabled>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Rinfo</label>
                                                <input type="text" class="form-control" :placeholder="email" disabled>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Deskripsikan Kendalamu</label>
                                                <textarea  v-model="question" class="form-control" rows="3" placeholder="Tulis deskripsi dari kendalamu"></textarea>
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

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
const swalWithBootstrap = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success py-2 px-4',
        cancelButton : 'btn btn-danger py-2 px-4 mx-3'
    },
    buttonsStyling: false
})
export default {
    data (){
        return {
            question:''
        }
    },
    methods: {
        submit() {
            swalWithBootstrap.fire({
                title: 'Are you sure ?',
                icon: 'warning',
                text: "You want to be send this ?",
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                reverseButtons: true
            }).then(response => {
                if(response.value) {
                    let data = {
                        question: this.question
                    }
                    console.log(data)
                    axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/faq/request', data)
                        .then(response => {
                            console.log(response)
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Your question has been send',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            this.question = ''
                        })
                        .catch(error => console.log(error))
                }else if(response.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrap.fire(
                        'Cancelled',
                        'Your question is still safe',
                        'error'
                    )
                }
            })
        }
    },
    computed: {
        name() {
            return this.$store.state.user.name
        },
        email() {
            return this.$store.state.user.email
        }
    }
}
</script>
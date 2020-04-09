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
    data() {
        return {
            quest_name: this.$route.params.quest_name,
            quest_id: this.$route.params.quest_id,
            link: ''
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
                        quest_id: this.quest_id,
                        link: this.link
                    }
                    console.log(data)
                    axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/user/records', data)
                        .then(response => {
                            console.log(response)
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Your result has been sended',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            this.link = ''
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
    },
    computed: {
        userName() {
            return this.$store.state.user.name
        },
        userEmail() {
            return this.$store.state.user.email
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
                        <h1 class="m-0 text-dark">Extra Quest</h1>
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
                                <h3 class="card-title">{{ quest_name }}</h3>
                            </div>
                            <div class="card-body">
                                <form role="form">
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Quest</label>
                                                <input type="text" class="form-control" :placeholder="quest_name" disabled>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>NIM</label>
                                                <input type="text" class="form-control" placeholder="--" disabled>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input type="text" class="form-control" :placeholder="userName" disabled>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Rinfo</label>
                                                <input type="text" class="form-control" :placeholder="userEmail" disabled>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Result</label>
                                                <input v-model="link" type="text" class="form-control">
                                                <p>*diwajibkan upload link menggunakan <a href="https://docs.google.com">https://docs.google.com</a> dan dipastikan privasi file adalah public</p>
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
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
            quest_name : this.$route.params.quest_name,
            quest_id : this.$route.params.quest_id,
            link: '',
            created_at:'',
            user:''
            
        }
            },
    
    methods: {
        submit() {
            swalWithBootstrap.fire({
                title: 'Are you sure ?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                reverseButtons: true
            }).then(response => {
                if(response.value) {
                    let data = {
                        quest_id: this.quest_id,
                        link: this.link,
                        created_at: this.created_at
                    }
                    console.log(data)
                    axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/user/records', data)
                        .then(response => {
                            console.log(response)
                            Swal.fire({
                                position: 'center',
                                // imageUrl: "https://lh3.googleusercontent.com/-L0L0yfE5VpA/XpfifMdyIXI/AAAAAAAABFU/ZrtQpPoKXHsAj0kgc70Gn8IwWsybi0nbACK8BGAsYHg/s0/2020-04-15.png",
                                // imageWidth: 150,
                                // imageHeight: 60,
                                icon: 'success',
                                title: 'Your result has been sended',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            this.link = '',
                            this.created_at='',
                            this.$router.push('/daily')
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
    created () {
        axios.get('https://sisplus.raharja.me/web/index.php?r=api/rep&key=$2y$10$6zeQKZ8dBvAOW1omT2ft6OJT7Iu34bHtgtqph.s5nwMDPv3IjxlRG&email=' + this.$store.state.user.email)
        .then(response => {
            // console.log(response)
                this.user = response.data.results
                console.log(this.user)
            })
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

<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="m-0 text-dark">Daily Quest</h1>
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
                                                <label>Quest Name</label>
                                                <input type="text" class="form-control" :placeholder="quest_name" disabled>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>NIM</label>
                                                <input type="text" class="form-control" :placeholder="user.nim" disabled>
                                            </div>
                                        </div>
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
                                                <label>Submitted at</label>
                                                <input class="form-control" type="date" v-model="created_at">
                                        </div>
                                        <div class="col-sm-12 mt-2">
                                            <div class="form-group">
                                                <label>Result</label>
                                                <input v-model="link" type="text" class="form-control">
                                                <p>*Upload link is required to use <a href="https://docs.google.com/document/d/1NiHpMcYYI4SjvvJ_aLNnUKUjx1ldxSf1esmF91hPEEs/edit?usp=sharing">Rinfo</a> and ensure file privacy in public</p>
                                                <p>Example : <a href="https://docs.google.com/document/d/1NiHpMcYYI4SjvvJ_aLNnUKUjx1ldxSf1esmF91hPEEs/edit?usp=sharing">Click Here</a></p>
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
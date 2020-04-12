<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: this.$store.state.user.name,
            photo: this.$store.state.user.photo,
            data_mahasiswa:'',
            user:'',

        }
    },
    created () {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/experience')
        .then(response => {
                this.data_mahasiswa = response.data
                console.log(this.data_mahasiswa)
            })
    },
    mounted () {
        axios.get('https://sisplus.raharja.me/web/index.php?r=api/rep&key=$2y$10$6zeQKZ8dBvAOW1omT2ft6OJT7Iu34bHtgtqph.s5nwMDPv3IjxlRG&email=' + this.$store.state.user.email)
        .then(response => {
            // console.log(response)
                this.user = response.data.results
                console.log(this.user)
            })
    },
    
}
</script>

<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="m-0 text-dark">My Viewboard</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <div class="card card-olive card-outline">
                            <div class="card-body box-profile">
                                <div class="text-center">
                                    <img :src="photo" class="profile-user-img img-fluid img-circle" style="border-color: #619E85">
                                </div>
                                <h3 class="profile-username text-center">{{ name }}</h3>
                                <p class="text-muted text-center">Sistem Informasi</p>
                                <ul class="list-group list-group-unbordered mb-3">
                                    <li class="list-group-item">
                                        <b>Total ECP</b>
                                        <a class="float-right">{{data_mahasiswa.total_value}} / 1000</a>
                                    </li>
                                    <li class="list-group-item">
                                        <b>Total Quest</b>
                                        <a class="float-right">{{data_mahasiswa.total_quest}}</a>
                                    </li>
                                    <li class="list-group-item">
                                        <b>Level</b>
                                        <a class="float-right">{{data_mahasiswa.level_id}} / 100</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="card card-olive">
                            <div class="card-header">
                                <h3 class="card-title">About Me</h3>
                            </div>
                            <div class="card-body">
                                <strong>
                                    <font-awesome-icon :icon="['fas', 'book']" />
                                    Faculty
                                </strong>
                                <p class="text-muted">
                                    {{user.fakultas}}
                                </p>
                                <hr>
                                <strong>
                                    <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                                    Degree
                                </strong>
                                <p class="text-muted">
                                    {{user.jenjang}}
                                </p>
                                <hr>
                                <strong>
                                    <font-awesome-icon :icon="['fas', 'pencil-alt']" />
                                    Study Program
                                </strong>
                                <p class="text-muted">
                                    {{user.prodi}}
                                </p>
                                <hr>
                                <strong>
                                    <font-awesome-icon :icon="['far', 'file-alt']" />
                                    Concentration
                                </strong>
                                <p class="text-muted">
                                    {{user.konsentrasi}}
                                </p><strong>
                                    <font-awesome-icon :icon="['far', 'file-alt']" />
                                    GPA
                                </strong>
                                <p class="text-muted">
                                    {{user.ipk}} / 4.00
                                </p>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            photo: this.$store.state.user.photo,
            data_mahasiswa:'',
            user:'',
            detail:'',
            hasil:'',
            badge:'',
            persen:'',
            name_level: ''
        }
    },
    async created () {
        await axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/copy/experience/user/' + this.$route.params.id)
        .then(response => {
            // console.log('experience',response)
                this.data_mahasiswa = response.data
                console.log('mahasiswa',this.data_mahasiswa)
            })
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/copy/experience/user/' + this.$route.params.id + '/progress')
        .then(response => {
            this.detail = response.data
            this.name_level = response.data.detail_level.name
            let rumus = this.detail.total_value - this.detail.detail_level.min_value
            let bagi = (rumus / 50) * 100
            this.persen = bagi
            
            this.hasil = 'width:' + bagi + '%'
            console.log('persen',this.persen)
            console.log('detail', this.detail)
        })

        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/copy/achievement/' + this.$route.params.id)
        .then(response => {
            this.badge = response.data
            console.log(this.badge)
        })
    },
    mounted () {
        axios.get('https://sisplus.raharja.me/web/index.php?r=api/rep&key=$2y$10$6zeQKZ8dBvAOW1omT2ft6OJT7Iu34bHtgtqph.s5nwMDPv3IjxlRG&email=' + this.$route.params.email)
        .then(response => {
            console.log(response)
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
                        <h1 class="m-0 text-dark">Viewboard Profile</h1>
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
                                    <img :src="data_mahasiswa.media" class="profile-user-img img-fluid img-circle" style="border-color: #619E85">
                                </div>
                                <h3 class="profile-username text-center">{{ data_mahasiswa.detail_exp.user.name }}</h3>
                                <p class="text-muted text-center">{{ user.prodi }}</p>
                                <ul class="list-group list-group-unbordered mb-3">
                                    <li class="list-group-item">
                                        <b>Total ECP</b>
                                        <a class="float-right">{{data_mahasiswa.detail_exp.total_value}} / 1000</a>
                                    </li>
                                    <li class="list-group-item">
                                        <b>Total Quest</b>
                                        <a class="float-right">{{data_mahasiswa.detail_exp.total_quest}}</a>
                                    </li>
                                    <li class="list-group-item">
                                        <b>Level</b>
                                        <span class="float-right">{{name_level}}</span>
                                    </li>
                                </ul>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated text-center" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" :style="hasil">{{persen}}%</div>
                                </div>
                                <div>
                                    
                                </div>
                                
                            </div>
                        </div>
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
                    <div class="col-md-9">
                        <div class="card card-olive">
                            <div class="card-header text-center">
                                <h3 class="text-center" style="font-size:1.1rem;">Achievements</h3>
                            </div>
                            <div class="card-body">
                                <div class="row text-center">
                                    <div  v-for="index in badge" :key="index.badge.id" class="col-md-4" data-toggle="modal" :data-target="['#modal' + index.badge.id]" style="cursor:pointer;">
                                        <img :class="{warna:index.total === 0 }" :src="index.media" alt="badge" style="height:100px;">
                                        <p>{{index.badge.name}}</p>
                                        <p>{{index.total}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" v-for="index in badge" :key="index.badge.id" :id="['modal' + index.badge.id]">
                <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                    <div class="modal-content">
                        <div class="modal-header text-center">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <font-awesome-icon icon="times" aria-hidden="true" />
                            </button>
                        </div>
                        <div class="modal-body p-0">
                            <div class="card card-olive card-outline mb-0">
                                <div class="card-body box-profile">
                                    <div class="text-center">
                                        <img :src="index.media" class="profile-user-img img-fluid img-circle" style="border-color: #619E85; height:150px; width:200px;">
                                    </div>
                                    <h3 class="profile-username text-center mt-4 mb-4">{{index.badge.name}}</h3>
                                    <ul class="list-group list-group-unbordered">
                                        <li class="list-group-item text-center">
                                            <a>{{index.badge.desc}}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                        
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.warna {
    /* opacity:0.2; */
    filter:grayscale(100%);
}
</style>
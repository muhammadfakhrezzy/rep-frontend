<script>
import axios from 'axios';
export default {
    data() {
        return {
            name: this.$store.state.user.name,
            photo: this.$store.state.user.photo,
            nama: '',
            konsentrasi: '',
            fakultas:'',
        }
    },
    created () {
        axios.get('https://sisplus.raharja.me/web/index.php?r=api/rep&key=$2y$10$6zeQKZ8dBvAOW1omT2ft6OJT7Iu34bHtgtqph.s5nwMDPv3IjxlRG&email=iqbal@raharja.info')
        .then (res =>
        console.log(res))
    }
}
</script>

<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="m-0 text-dark">My Overboard</h1>
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
                                        <b>Total Point</b>
                                        <a class="float-right">1082 / 1000</a>
                                    </li>
                                    <li class="list-group-item">
                                        <b>Total Quest</b>
                                        <a class="float-right">368</a>
                                    </li>
                                    <li class="list-group-item">
                                        <b>Level</b>
                                        <a class="float-right">76 / 100</a>
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
                                    Fakultas
                                </strong>
                                <p class="text-muted">
                                    Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise.
                                </p>
                                <hr>
                                <strong>
                                    <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                                    Jenjang
                                </strong>
                                <p class="text-muted">
                                    Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise.
                                </p>
                                <hr>
                                <strong>
                                    <font-awesome-icon :icon="['fas', 'pencil-alt']" />
                                    Prodi
                                </strong>
                                <p class="text-muted">
                                    Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise.
                                </p>
                                <hr>
                                <strong>
                                    <font-awesome-icon :icon="['far', 'file-alt']" />
                                    Konsentrasi
                                </strong>
                                <p class="text-muted">
                                    Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise.
                                </p><strong>
                                    <font-awesome-icon :icon="['far', 'file-alt']" />
                                    IPK
                                </strong>
                                <p class="text-muted">
                                    Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise.
                                </p>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    </div>
</template>
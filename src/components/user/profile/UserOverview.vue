<script>
import axios from 'axios';
import motivationWord from '../../Quotes/MotivationWord'
export default {
    data() {
        return {
            name: this.$store.state.user.name,
            id: this.$store.state.user.id,
            email: this.$store.state.user.email,
            photo: this.$store.state.user.photo,
            motivationText : [...motivationWord],
            data_mahasiswa:'',
            user:'',
            detail:'',
            hasil:'',
            badge:'',
            persen:'',
            name_level: '',
            sharing: {
            url: 'https://rep.raharja.ac.id/profile/' + this.$store.state.user.id + '/' + this.$store.state.user.email,
            title: 'Heyyy Sahabat REP',
            description: 'This is my overview',
            hashtags: 'REP',
            twitterUser: 'youyuxi'
            },
            networks: [
            // { network: 'baidu', name: 'Baidu', icon: 'fas fah fa-lg fa-paw', color: '#2529d8' },
            // { network: 'buffer', name: 'Buffer', icon: 'fab fah fa-lg fa-buffer', color: '#323b43' },
            // { network: 'email', name: 'Email', icon: 'far fa-envelope', color: '#333333' },
            // { network: 'evernote', name: 'Evernote', icon: 'fab fah fa-lg fa-evernote', color: '#2dbe60' },
            { network: 'facebook', name: 'Facebook', icon: ['fab', 'facebook'], color: '#1877f2' },
            // { network: 'flipboard', name: 'Flipboard', icon: 'fab fah fa-lg fa-flipboard', color: '#e12828' },
            // { network: 'hackernews', name: 'HackerNews', icon: 'fab fah fa-lg fa-hacker-news', color: '#ff4000' },
            // { network: 'instapaper', name: 'Instapaper', icon: 'fas fah fa-lg fa-italic', color: '#428bca' },
            // { network: 'line', name: 'Line', icon: 'far fa-line', color: '#00c300' },
            // { network: 'linkedin', name: 'LinkedIn', icon: 'fab fah fa-lg fa-linkedin', color: '#007bb5' },
            // { network: 'odnoklassniki', name: 'Odnoklassniki', icon: 'fab fah fa-lg fa-odnoklassniki', color: '#ed812b' },
            // { network: 'pinterest', name: 'Pinterest', icon: 'fab fah fa-lg fa-pinterest', color: '#bd081c' },
            // { network: 'pocket', name: 'Pocket', icon: 'fab fah fa-lg fa-get-pocket', color: '#ef4056' },
            // { network: 'quora', name: 'Quora', icon: 'fab fah fa-lg fa-quora', color: '#a82400' },
            // { network: 'reddit', name: 'Reddit', icon: 'fab fah fa-lg fa-reddit-alien', color: '#ff4500' },
            // { network: 'skype', name: 'Skype', icon: 'fab fah fa-lg fa-skype', color: '#00aff0' },
            // { network: 'sms', name: 'SMS', icon: 'far fah fa-lg fa-comment-dots', color: '#333333' },
            // { network: 'stumbleupon', name: 'StumbleUpon', icon: 'fab fah fa-lg fa-stumbleupon', color: '#eb4924' },
            // { network: 'telegram', name: 'Telegram', icon: 'fab fah fa-lg fa-telegram-plane', color: '#0088cc' },
            // { network: 'tumblr', name: 'Tumblr', icon: 'fab fah fa-lg fa-tumblr', color: '#35465c' },
            // { network: 'twitter', name: 'Twitter', icon: 'far fa-twitter', color: '#1da1f2' },
            // { network: 'viber', name: 'Viber', icon: 'fab fah fa-lg fa-viber', color: '#59267c' },
            // { network: 'vk', name: 'Vk', icon: 'fab fah fa-lg fa-vk', color: '#4a76a8' },
            // { network: 'weibo', name: 'Weibo', icon: 'fab fah fa-lg fa-weibo', color: '#e9152d' },
            { network: 'whatsapp', name: 'Whatsapp', icon: ['fab', 'whatsapp'], color: '#25d366' },
            // { network: 'wordpress', name: 'Wordpress', icon: 'fab fah fa-lg fa-wordpress', color: '#21759b' },
            // { network: 'xing', name: 'Xing', icon: 'fab fah fa-lg fa-xing', color: '#026466' },
            // { network: 'yammer', name: 'Yammer', icon: 'fab fah fa-lg fa-yammer', color: '#0072c6' },
            // { network: 'fakeblock', name: 'Custom Network', icon: 'fab fah fa-lg fa-vuejs', color: '#41b883' }
        ]
        }
    },
    created () {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/experience')
        .then(response => {
                this.data_mahasiswa = response.data
                console.log('mahasiswa',this.data_mahasiswa)
            })
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/experience/user/' + this.$store.state.user.id + '/progress')
        .then(response => {
            this.detail = response.data

            console.log('exp',this.detail)
            this.name_level = response.data.detail_level.name

            let rumus = this.detail.total_value - this.detail.detail_level.min_value
            let bagi = (rumus / 50) * 100
            this.persen = bagi
            this.hasil = 'width:' + bagi + '%'
            console.log('detail',this.detail)
        })
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/achievement')
        .then(response => {
            this.badge = response.data
            console.log(this.badge)
        })
    },
    mounted () {
        axios.get('https://sisplus.raharja.me/web/index.php?r=api/rep&key=$2y$10$6zeQKZ8dBvAOW1omT2ft6OJT7Iu34bHtgtqph.s5nwMDPv3IjxlRG&email=' + this.$store.state.user.email)
        .then(response => {
            console.log('mahasiswa',response)
                this.user = response.data.results
                console.log(this.user)
            })

            const numberRandom = Math.floor(Math.random() * 10);
        this.motivationText = {
            ...this.motivationText[numberRandom]
        }
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
                                <p class="text-muted text-center">{{user.prodi}}</p>
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
                                        <span class="float-right">{{name_level}}</span>
                                    </li>
                                </ul>
                                <div class="progress mb-4">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated text-center" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" :style="hasil">{{persen}}%</div>
                                </div>
                                    <div class="share-network-list">
                                        <ShareNetwork
                                            v-for="network in networks"
                                            :network="network.network"
                                            :key="network.network"
                                            :style="{backgroundColor: network.color}"
                                            :url="sharing.url"
                                            :title="sharing.title"
                                            :description="sharing.description"
                                            :quote="sharing.quote"
                                            :hashtags="sharing.hashtags"
                                            :twitterUser="sharing.twitterUser">
                                            <font-awesome-icon :icon="network.icon" />
                                            <span>{{ network.name }}</span>
                                        </ShareNetwork>
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
                                <!-- <h4 class="modal-title">#Rank 2</h4> -->
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
                                        <!-- <p class="text-muted text-center">Sistem Informasi</p> -->
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
 body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  h1 {
    text-align: center;
    margin: 50px 0 80px;
  }
  .share-network-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
  }
  a[class^="share-network-"] {
    flex: none;
    color: #FFFFFF;
    background-color: blue;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 10px 10px 0;
  }
  a[class^="share-network-"] .fah {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px;
    flex: 0 1 auto;
  }
  a[class^="share-network-"] span {
    padding: 0 10px;
    flex: 1 1 0%;
    font-weight: 500;
  }
</style>
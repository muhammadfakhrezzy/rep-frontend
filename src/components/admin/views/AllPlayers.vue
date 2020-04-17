<script>
import axios from 'axios'
export default {
    data() {
        return {
            user:[],
            rank:'',
            total_value: ''
        }
    },
   created () {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/secretchamber/statistic')
        .then(response => {
            console.log(response)
            let res = response.data
            this.rank = res
            this.rank.data.forEach(element => {
                axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/detail/' + element.detail_user.id)
                    .then(response => {
                        let res = response
                        this.user.push(res)
                    })
            });
            console.log('user',this.user)
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
                    </div>
                </div>

        <div class="content">
            <div class="container-fluid">
                <div class="row">
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3>{{ rank.total_value }}</h3>

                <p>Submitted Quests</p>
              </div>
              <div class="icon">
                <i class="ion ion-bag"></i>
              </div>
              <router-link to="/admin/showquests" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>53<sup style="font-size: 20px">%</sup></h3>

                <p>Total ECP</p>
              </div>
              <div class="icon">
                <i class="ion ion-stats-bars"></i>
              </div>
              <router-link to="/admin/showecp" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></router-link>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
              <div class="inner">
                <h3></h3>

                <p>Level</p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3></h3>

                <p>Total Players</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph"></i>
              </div>
              <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
        </div>
                <div class="row">
                    <div class="col">
                <!-- USERS LIST -->
                <div class="card">
                  <div class="card-header">
                    <h3 class="card-title">All Players</h3>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body p-0" >
                    <ul class="users-list clearfix">
                      <li v-for='index in user' :key="index.data.detail_user.id">
                        <img :src="index.data.media[0].path" alt="User Image" class="img-circle img-size-32 mr-2" style="cursor:pointer" data-toggle="modal" :data-target="['#modal' + index.data.detail_user.id]">
                        <a class="users-list-name">{{ index.data.detail_user.name }}</a>
                        <span class="users-list-date">{{index.data.total_value}}</span>
                      </li>
                    </ul>
                    <!-- /.users-list -->
                  </div>
                  <!-- /.card-body -->
                  <div class="card-footer text-center">
                    <a href="javascript::">View All Players</a>
                  </div>
                  <!-- /.card-footer -->
                </div>
                <!--/.card -->
              </div>
                </div>
            </div>
        </div>
        </div>
        <div class="modal fade" v-for="index in user" :key="index.data.detail_user.id" :id="['modal' + index.data.detail_user.id]">
                    <div class="modal-dialog" style="margin-top: 60vh; transform: translateY(-50%)">
                        <div class="modal-content">
                            <div class="modal-header">
                                <!-- <h4 class="modal-title">#Rank 2</h4> -->
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <font-awesome-icon icon="times" aria-hidden="true" />
                                </button>
                            </div>
                            <div class="modal-body p-0">
                                <div class="card card-olive card-outline mb-0">
                                    <div class="card-body box-profile">
                                        <div class="text-center">
                                            <img :src="index.data.media[0].path" class="profile-user-img img-fluid img-circle" style="border-color: #619E85; cursor:pointer">
                                        </div>
                                        <h3 class="profile-username text-center">{{ index.data.detail_user.name }}</h3>
                                        <!-- <p class="text-muted text-center">Sistem Informasi</p> -->
                                        <ul class="list-group list-group-unbordered">
                                            <li class="list-group-item">
                                                <b>Rank</b>
                                                <a class="float-right">{{ index.data.level }}</a>
                                            </li>
                                            <li class="list-group-item">
                                                <div class="card card-success mb-0 collapsed-card">
                                                    <div class="card-header" data-card-widget="collapse" style="cursor: pointer">
                                                        <h3 class="card-title">Total ECP</h3>
                                                        <div class="card-tools">
                                                            <a class="float-right">{{ index.data.total_value }}</a>
                                                        </div>
                                                    </div>
                                                    <div class="card-body px-2 py-0">
                                                        <ul class="list-group list-group-unbordered">
                                                            <li class="list-group-item" v-for="(valueIn, length) in index.data.quests" :key="length">
                                                                <b>{{ valueIn.name }}</b>
                                                                <a class="float-right">{{ valueIn.total }}</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
    </div>
    
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            user:'',
            level:''
        }
    },
   created () {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/level')
        .then(response => {
            console.log(response)
            this.user = response.data
        })
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/level/all')
        .then(response => {
          console.log('all',response)
          this.level = response.data
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
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                      <div class="card">
                        <div class="card-header p-2">
                          <ul class="nav nav-pills">
                            <li class="nav-item">
                              <a href="#list" class="nav-link" data-toggle="tab">List Level</a>
                            </li>
                            <li class="nav-item">
                              <a href="#rank" class="nav-link active" data-toggle="tab">Rank Level</a>
                            </li>
                          </ul>
                          <div class="card-body">
                            <div class="tab-content">
                              <div class="active tab-pane" id="list">
                                <table class="table table-hover">
                                  <thead>
                                    <tr> 
                                      <th>Name</th>
                                      <th>Min Value</th>
                                      <th>Max Value</th>
                                      
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr v-for="value in user.levels" :key="value.id">
                                        <td>{{ value.name }}</td>
                                        <td>{{ value.min_value }}</td>
                                        <td>{{ value.max_value }}</td>
                                    </tr>
                                  </tbody>
                                  </table>
                              </div>
                              <div class="tab-pane active" id="rank">
                                <table class="table table-hover">
                              <thead>
                                <tr> 
                                  <th>Name</th>
                                  <th>Level</th>
                                  <th>EXP</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="index in level" :key="index.detail_user.id">
                                    <td>{{ index.detail_user.name }}</td>
                                    <td>{{index.level.name}}</td>
                                    <td>{{index.exp}}</td>
                                </tr>
                              </tbody>
                            </table>
                              </div>
                            </div>
                            </div>
                          </div>
              <!-- /.card-header -->       
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
                </div>
            </div>
        </div>

</template>
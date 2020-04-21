<script>
import axios from 'axios'
export default {
    data() {
        return {
            user:'',
        }
    },
   created () {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/secretchamber/statistic')
        .then(response => {
            console.log(response)
            this.user = response.data
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
              <div class="card-header">
                <h3 class="card-title">Show ECP</h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th></th>  
                      <th>Name</th>
                      <th>Total ECP</th>
                      <th>Total Quest</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="value in user.data" :key="value.detail_user.id">
                        <td>
                            <img :src="value.media" class="img-circle img-size-32 mr-2">

                        </td>
                        <td>{{ value.detail_user.name }}</td>
                        <td>{{ value.total_value }}</td>
                        <td>{{ value.total_quest }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <router-link to="/admin" class="btn btn-sm btn-primary mr-2">Back</router-link>
            <!-- /.card -->
          </div>
                </div>
            </div>
        </div>
    </div>

</template>
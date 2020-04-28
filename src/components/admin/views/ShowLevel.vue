<script>
import axios from 'axios'
export default {
    data() {
        return {
            user:'',
        }
    },
   created () {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/level')
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

                <div class="card-tools">
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
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
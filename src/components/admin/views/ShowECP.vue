<script>
import axios from 'axios'
import Datepicker from 'vuejs-datepicker'
export default {
    data() {
        return {
            user:'',
            date: new Date(),
            now: new Date()
        }
    },
    methods : {
        Submit() {
            const tanggal = String(this.date)
            const baru = tanggal.split(' ')
            let bulan 
            switch (baru[1]){
                case  "Jan":
                bulan = '01';
                break;
                case  "Feb":
                bulan = '02';
                break;
                case  "Mar":
                bulan = '03';
                break;
                case  "Apr":
                bulan = '04';
                break;
                case  "May":
                bulan = '05';
                break;
                case  "Jun":
                bulan = '06';
                break;
                case  "July":
                bulan = '07';
                break;
                case  "Aug":
                bulan = '08';
                break;
                case  "Sep":
                bulan = '09';
                break;
                case  "Oct":
                bulan = '10';
                break;
                case  "Nov":
                bulan = '11';
                break;
                case  "Des":
                bulan = '12';
                break;
                default: 
                bulan = null
                break;   
            }
            
            const lala = [baru[3], bulan, baru[2]].join('-')
            console.log(lala)

             const date = String(this.now)
            const neww = date.split(' ')
            let month 
            switch (neww[1]){
                case  "Jan":
                month = '01';
                break;
                case  "Feb":
                month = '02';
                break;
                case  "Mar":
                month = '03';
                break;
                case  "Apr":
                month = '04';
                break;
                case  "May":
                month = '05';
                break;
                case  "Jun":
                month = '06';
                break;
                case  "July":
                month = '07';
                break;
                case  "Aug":
                month = '08';
                break;
                case  "Sep":
                month = '09';
                break;
                case  "Oct":
                month = '10';
                break;
                case  "Nov":
                month = '11';
                break;
                case  "Des":
                month = '12';
                break;
                default: 
                month = null
                break;   
            }
            
            const lili = [neww[3], month, neww[2]].join('-')
            console.log(lili)
            axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/secretchamber/statistic/ecp', {date_from:lala,date_to:lili})
                .then(response => {
                    console.log(response)
                    this.user = response.data
                    console.log(this.user)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
   created () {
        // axios.post('https://dev.alphabetincubator.id/rep-backend/public/api/secretchamber/statistic/ecp')
        // .then(response => {
        //     console.log(response)
        //     this.user = response.data
        // })
        this.Submit()
    },
    components : {
      Datepicker
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
              <div class="card-header text-center">
                <div class="row">
                  <div class="col">
                    <p>Date From : </p>
                    <datepicker v-model="date">
                    </datepicker>
                  </div>
                  <div class="col">
                    <p>Date To : </p>
                    <datepicker v-model="now">
                    </datepicker>
                  </div>
                </div>         
                <button @click="Submit()" class="btn btn-sm btn-primary ml-4">Submit</button>
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
                    <tr v-for="value in user" :key="value.detail_user.id">
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


<style scoped>
  .vdp-datepicker {
    position: relative;
    text-align: center;
}
</style>
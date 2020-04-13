<script>
const getDate = new Date()
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const dateString = month[getDate.getMonth()] + ' ' + getDate.getDate() + ', ' + getDate.getFullYear() + ' 23:59:59'
const countDownDate = new Date("Apr 17, 2020 00:00:00").getTime();
// var countDownDate = new Date("Mar 31, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML =
        
        days + " Hari " + hours +  " Jam " + minutes + " Menit " + seconds + " Detik ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
import axios from 'axios'
export default {
    data() {
        return {
            all_data: '',
            user_id: this.$store.state.user.id,
            value:''
        }
    },
    created() {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/difficulty/user/1')
            .then(response => {
                console.log(response)
                this.all_data = response.data.Data
            })
            .catch(error => {
                console.log
                (error)
            })
    },
    mounted (){
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/difficulty/user/1')
        .then(response => {
            this.value=response.data
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
                        <h1 class="m-0 text-dark">Daily Quests History</h1>
                        <h5 class="mt-2">Total ECP : {{value.value}} / 11</h5>
                        <div class="text-center">
                            <p>Remaining Time :</p>
                            <p id="demo" ></p>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">History</h3>
                                <div class="card-tools">
                                    <div class="pagination pagination-sm float-right">
                                        <div class="page-item">
                                            <a class="page-link">«</a>
                                        </div>
                                        <div class="page-item">
                                            <a class="page-link">1</a>
                                        </div>
                                        <div class="page-item">
                                            <a class="page-link">2</a>
                                        </div>
                                        <div class="page-item">
                                            <a class="page-link">3</a>
                                        </div>
                                        <div class="page-item">
                                            <a class="page-link">»</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body table-responsive p-0">
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Quest Name</th>
                                            <th>Submit Date</th>
                                            <th>Point</th>
                                            <th>Link</th>
                                            <th>Likes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(index, length) in all_data" :key="length">
                                            <td>{{ length + 1 }}</td>
                                            <td>{{ index.quest }}</td>
                                            <td>{{ index.detail_record.created_at }}</td>
                                            <td>{{index.detail_record.value}}</td>
                                            <td><a :href="index.detail_record.link">Click Here</a></td>
                                            <td>
                                                <font-awesome-icon :icon="['fa', 'thumbs-up']" />
                                                {{ index.likes }}
                                             </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
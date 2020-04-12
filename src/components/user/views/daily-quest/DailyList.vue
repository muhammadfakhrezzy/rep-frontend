<script>
import axios from 'axios'
export default {
    data() {
        return {
            daily: '',
            quest_id : ''
        }
    },
    async created() {
        await axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/difficulty/1')
            .then(response => {
                console.log(response)
                const data = response.data.sort((a, b) => (a.quest.id > b.quest.id) ? 1 : -1)
                this.daily = data
            })
    }
}
const getDate = new Date()
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const dateString = month[getDate.getMonth()] + ' ' + getDate.getDate() + ', ' + getDate.getFullYear() + ' 23:59:59'
const countDownDate = new Date("Apr 15, 2020 00:00:00").getTime();
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
</script>

<template>
    <div class="content-wrapper">
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-12">
                        <h1 class="m-0 text-dark">Daily Quests List</h1>
                    </div>
                </div>
                <div class="text-center">
                            <p>Remaining Time :</p>
                            <p id="demo" ></p>
                    </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-6" v-for="index in daily" :key="index.quest.id">
                        <div class="small-box bg-warning">
                            <div style="height: 130px" class="inner">
                                <h3>
                                    {{ index.quest.value }} ECP
                                    <font-awesome-icon icon="info-circle" style="position: absolute; right: .5rem; cursor: pointer; font-size: 1.5rem" data-toggle="modal" :data-target="['#' + 'quest' + index.quest.id]"/>
                                </h3>
                                <p>{{ index.quest.id }}. {{ index.quest.name }} ({{index.quest.code}})</p>
                                <!-- <p style="position: absolute; bottom: 1.2rem; right: .5rem; font-size: 15px">Limit {{index.limit_display}}/{{index.quest.daily_limit}}</p> -->
                            </div>
                            <div class="icon">

                            </div>
                            <router-link :to="{name : 'questDailyStart', params: { quest_name: index.quest.name, quest_id: index.quest.id }}" class="small-box-footer">
                                Start Quest
                                <font-awesome-icon icon="arrow-circle-right" />
                            </router-link>
                            <!-- <p v-else class="small-box-footer">
                                Quest Completed
                                <font-awesome-icon :icon="['far', 'check-circle']" />
                            </p> -->
                        </div>

                        <!-- <div v-else class="small-box bg-olive">
                            <div style="height: 130px" class="inner">
                                <h3>
                                    {{ index.quest.value }} ECP
                                    <font-awesome-icon icon="info-circle" style="position: absolute; right: .5rem; cursor: pointer; font-size: 1.5rem" data-toggle="modal" :data-target="['#' + 'quest' + index.quest.id]"/>
                                </h3>
                                <p>{{ index.quest.id }}. {{ index.quest.name }}</p>
                                <p style="position: absolute; bottom: 1.2rem; right: .5rem; font-size: 15px">Limit {{index.limit_display}}/{{index.quest.daily_limit}}</p>
                            </div>
                            <div class="icon">

                            </div>
                            <router-link v-if="index.limit_display !== index.quest.daily_limit" :to="{name : 'questDailyStart', params: { quest_name: index.quest.name, quest_id: index.quest.id }}" class="small-box-footer">
                                Start Quest
                                <font-awesome-icon icon="arrow-circle-right" />
                            </router-link>
                            <p v-else class="small-box-footer">
                                Quest Completed
                                <font-awesome-icon :icon="['far', 'check-circle']" />
                            </p>
                        </div> -->
                    </div>
                </div>
            </div>


            <div class="modal fade" :id="['quest' + index.quest.id]" v-for="index in daily" :key="index.quest.id">
                <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">{{ index.quest.name }}</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <font-awesome-icon icon="times" aria-hidden="true" />
                            </button>
                        </div>
                        <div class="modal-body pt-0">
                            <h5>Quest Description</h5>
                            <p>{{ index.quest.description }}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import Countdown from '../../../countdown/countdown'
import axios from 'axios'
export default {
    components: {
        'countdown' : Countdown
    },
    data() {
        return {
            daily: '',
            quest_id : ''
        }
    },
    computed: {
        getTimeNow() {
            let getDate = new Date()
            let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            let hours = ("0" + getDate.getHours()).slice(-2)
            let minutes = ("0" + getDate.getMinutes()).slice(-2)
            let seconds = ("0" + getDate.getSeconds()).slice(-2)
            let dateString = month[getDate.getMonth()] + ' ' + getDate.getDate() + ', ' + getDate.getFullYear() + ' ' + hours + ':' + minutes + ':' + seconds
            console.log(dateString)
            return dateString.toString()
        },
        getTimeEnd() {
            let getDate = new Date()
            let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            let hours = ("0" + getDate.getHours()).slice(-2)
            let minutes = ("0" + getDate.getMinutes()).slice(-2)
            let seconds = ("0" + getDate.getSeconds()).slice(-2)
            let dateString = month[getDate.getMonth()] + ' ' + getDate.getDate() + ', ' + getDate.getFullYear() + ' ' + '23:59:59'
            console.log(dateString)
            return dateString.toString()
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
                            <countdown 
                                :starttime="getTimeNow"
                                :endtime="getTimeEnd"
                                trans='{  
                                    "day":"Hari",
                                    "hours":"Jam",
                                    "minutes":"Menit",
                                    "seconds":"Detik",
                                    "expired":"Event has been expired.",
                                    "running":"Till the end of event.",
                                    "upcoming":"Till start of event.",
                                    "status": {
                                        "expired":"Expired",
                                        "running":"Running",
                                        "upcoming":"Future"
                                    }}' />
                    </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-6" v-for="index in daily" :key="index.quest.id">
                        <div v-if="index.limit_display !== index.quest.daily_limit" class="small-box bg-warning">
                            <div style="height: 130px" class="inner">
                                <h3>
                                    {{ index.quest.value }} ECP
                                    <font-awesome-icon icon="info-circle" style="position: absolute; right: .5rem; cursor: pointer; font-size: 1.5rem" data-toggle="modal" :data-target="['#' + 'quest' + index.quest.id]"/>
                                </h3>
                                <p>{{ index.quest.id }}. {{ index.quest.name }} ({{index.quest.code}})</p>
                                <p style="position: absolute; bottom: 1.2rem; right: .5rem; font-size: 15px">Limit {{index.limit_display}}/{{index.quest.daily_limit}}</p>
                            </div>
                            <div class="icon">

                            </div>
                            <router-link  v-if="index.limit_display !== index.quest.daily_limit"  :to="{name : 'questDailyStart', params: { quest_name: index.quest.name, quest_id: index.quest.id }}" class="small-box-footer">
                                Start Quest
                                <font-awesome-icon icon="arrow-circle-right" />
                            </router-link>
                            <p v-else class="small-box-footer">
                                Quest Completed
                                <font-awesome-icon :icon="['far', 'check-circle']" />
                            </p>
                        </div>

                        <div v-else class="small-box bg-olive">
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
                        </div>
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

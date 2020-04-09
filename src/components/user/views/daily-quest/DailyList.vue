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
        await axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/superuser/difficulties/1')
            .then(response => {
                console.log(response)
                this.daily = response.data[0].quests
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
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-6" v-for="index in daily" :key="index.id">
                        <div class="small-box bg-olive">
                            <div class="inner">
                                <h3>
                                    {{ index.value }} POIN
                                    <font-awesome-icon icon="info-circle" style="position: absolute; right: .5rem; cursor: pointer; font-size: 1.5rem" data-toggle="modal" :data-target="['#' + 'quest' + index.id]"/>
                                </h3>
                                <p>{{ index.name }}</p>
                                <p style="position: absolute; bottom: 1.2rem; right: .5rem; font-size: 15px">Limit {{index.daily_limit}}/{{index.daily_limit}}</p>
                            </div>
                            <div class="icon">

                            </div>
                            <router-link :to="{name : 'questDailyStart', params: { quest_name: index.name, quest_id: index.id }}" class="small-box-footer">
                                Start Quest
                                <font-awesome-icon icon="arrow-circle-right" />
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>


            <div class="modal fade" :id="['quest' + index.id]" v-for="index in daily" :key="index.id">
                <div class="modal-dialog" style="margin-top: 50vh; transform: translateY(-50%)">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">{{ index.name }}</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <font-awesome-icon icon="times" aria-hidden="true" />
                            </button>
                        </div>
                        <div class="modal-body pt-0">
                            <h5>Quest Description</h5>
                            <p>{{ index.description }}</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

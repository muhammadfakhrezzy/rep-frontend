<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import router from '../../../../router'

export default {
    data() {
        return {
        labels: ["Favorite Quest"],
        types: [],
        totalQuest: ''
        };
    },
    created () {
        axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/top/quests')
        .then(response =>{
            console.log("data", response)
            const data = response.data
            const total = response.data.length
            this.totalQuest = total
            data.forEach(element => {
                let questName = element.detail_quest.name
                let totalQuest = element.total
                let color
                switch(questName) {
                    case "Absensi":
                        color = "red"
                        break
                    case "BBC Post":
                        color = "yellow"
                        break
                    case "Membuat Cermi":
                        color = "black"
                        break
                    case "VLC":
                        color = "green"
                        break
                    case "Social Media":
                        color = "cyan"
                        break
                    case "Zoom":
                        color = "purple"
                        break
                    case "Tridarma Pengabdian":
                        color = "gray"
                        break
                    case "Melakukan LTAI":
                        color = "maroon"
                        break
                    default:
                        color = "white"
                        break
                }
                let type = {
                    bgColor: color,
                    borderColor: "030c0c",
                    data: [totalQuest],
                    dataLabel: questName
                }
                this.types.push(type)
            });
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
                        <h1 class="m-0 text-dark">Favorite Quest</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h2 class="card-title">Bar</h2>
                            </div>
                            <div class="card-img-bottom">
                                <canvas id="fooCanvas" :count="totalQuest" />
                                    <chartjs-bar
                                        v-for="(item, index) in types" :key="index"
                                        :backgroundcolor="item.bgColor"
                                        :bind="true"
                                        :bordercolor="item.borderColor"
                                        :data="item.data"
                                        :datalabel="item.dataLabel"
                                        :labels="labels"
                                        target="fooCanvas"
                                    />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
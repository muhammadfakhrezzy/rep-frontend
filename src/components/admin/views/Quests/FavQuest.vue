<script>
import Swal from 'sweetalert2'
import axios from 'axios'
import router from '../../../../router'

export default {
   data() {
    return {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      types: [
        {
          bgColor: "#de98ab",
          borderColor: "0c0306",
          data: [1, 3, 5, 7, 2, 4, 6],
          dataLabel: "Bar"
        },
        {
          bgColor: "#98ddde",
          borderColor: "030c0c",
          data: [1, 5, 2, 6, 3, 7, 4],
          dataLabel: "Baz"
        },
        {
          bgColor: "green",
          borderColor: "030c0c",
          data: [3, 4, 7, 6, 7, 8, 3],
          dataLabel: "Biz"
        },
      ]
    };
  },
  created () {
      axios.get('https://dev.alphabetincubator.id/rep-backend/public/api/user/top/quests')
      .then(response =>{
          console.log(response)
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
                                <canvas id="fooCanvas" count="3" />
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
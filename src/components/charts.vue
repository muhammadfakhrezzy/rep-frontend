<script>
import planetChartData from './Chart.js'
import Chart from 'chart.js'
export default {
    data () {
        return {
            planetChartData :  {
                type: 'doughnut',
                data: {
                labels: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
                datasets: [
                    { // one line graph
                    label: 'Number of Moons',
                    data: [0, 0, 1, 2, 67, 62, 27, 14],
                    backgroundColor: [
                        'red', // Blue
                        'blue',
                        'black',
                        'yellow',
                        'green',
                        'purple',
                        'rgba(54,73,93,.5)',
                        'rgba(54,73,93,.5)'
                    ],
                    borderColor: [
                        '#36495d',
                        '#36495d',
                        '#36495d',
                        '#36495d',
                        '#36495d',
                        '#36495d',
                        '#36495d',
                        '#36495d',
                    ],
                    borderWidth: 3
                    },
                ]
                },
                options: {
                responsive: true,
                lineTension: 1,
                scales: {
                    yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        padding: 25,
                    }
                    }]
                }
                }
            }
        }
    },
    mounted() {
        this.createChart('planet-chart', this.planetChartData)
    },
    methods: {
  createChart(chartId, chartData) {
    const ctx = document.getElementById(chartId);
    const myChart = new Chart(ctx, {
      type: chartData.type,
      data: chartData.data,
      options: chartData.options,
    });
  }
}
}
</script>

<template>
    <div class="container-wrapper">
        <div class="container-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <canvas id="planet-chart">

                        </canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
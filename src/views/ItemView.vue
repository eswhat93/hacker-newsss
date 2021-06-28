<template>
<<<<<<< HEAD
  <div>
      item
      <!-- 차트 추가를 테스트 VueCharts.vue-->
=======
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <button @click="fillData()">Randomize</button>
>>>>>>> ede7724b2e852fef450af90c19e19cacc9b87f2e
  </div>
</template>

<script>
<<<<<<< HEAD
export default {

}
</script>

<style>

=======
  import LineChart from '../chart/chart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    max-width: 600px;
    margin:  150px auto;
  }
>>>>>>> ede7724b2e852fef450af90c19e19cacc9b87f2e
</style>
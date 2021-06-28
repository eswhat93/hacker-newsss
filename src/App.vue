<template>
  <div id="app">
    <ToolBar></ToolBar>
    <LineChart></LineChart>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import LineChart from './components/LineChart.vue'
export default {
  components:{
    ToolBar,
    LineChart
  },
}
</script>

<style>
body{
  padding:0;
  margin: 0;
}
</style>




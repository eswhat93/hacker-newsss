<template>
  <div id="app">
    <item v-for="item in items" :key="item" :item="item">{{item}}</item>
  </div>
</template>

<script>
import Item from './components/Item.vue'

export default {
  data(){
    return{
      items:['아이템1','아이템2','아이템3']
    }
  },
  components: {
    Item
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

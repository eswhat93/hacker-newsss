<template>
<div>
  <!-- <div v-for="ask in fetchedAsk" :key="ask.id">
    <router-link :to="`/item/${ask.id}`">{{ask.title}}</router-link>
    <router-link :to="`/user/${ask.user}`">{{ask.user}}</router-link>
    
  </div> -->
  <list-item></list-item>
</div>
  
</template>

<script>
import ListItem from '../components/ListItem.vue'

//import {mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  components:{
    ListItem
  },
computed:{
  //배열 그대로 받을 수 있음 []
  ...mapGetters(['fetchedAsk'])
  //#2
  // ...mapState({
  //   ask:state=>state.ask
  // })
  //#1
  // ask(){
  //   return this.$store.state.ask;
  // }
},
created(){
    this.$store.dispatch('FETCH_ASK')
  }
 
}
</script>

<style>

</style>
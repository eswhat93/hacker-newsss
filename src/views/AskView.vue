<template>
  <div>ask</div>
</template>

<script>
import {fetchAskList} from '../api/index.js'

export default {
  data:()=>{
    return{
      test:[]
    }
  },
  created(){
    fetchAskList()
    .then(()=>{
      // /console.log(response.data);
      
    })
  }
}
</script>

<style>

</style>
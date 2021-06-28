<template>
  <div>
    
  </div>
</template>


<script>
import { fetchJobsList } from '../api/index.js'
export default {
  data:()=>{
    return{
      jobs:[]
    }
  },
  created(){
    const vm = this;

    fetchJobsList()
      .then((response)=>{
        console.log(response.data);
        vm.jobs = response.data
      })
      .catch(

      )
  }
}
</script>

<style>

</style>
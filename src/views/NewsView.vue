<template>
<!-- https://api.hnpwa.com/v0/news/1.json -->
  <section class="content-container">
    <div v-for="user,index in users" :key=user.id class="list">
      {{index+1}}.
      {{user.title}}
      <div class="domain">
        ({{user.domain}})
      </div>
    </div>
  </section>
  
</template>

<script>
import { fetchNewsList } from '../api/index.js';
export default {
  data:()=>{
    return {
      users:[]
    }
  },
  created(){
    const vm = this;
    fetchNewsList()
    .then((response)=>{
      console.log(response.data);
      vm.users = response.data;
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}
</script>

<style>
.content-container{
  display: flex;
  flex-direction:column;
}
.list{
  background-color: #fff8e6;
  display: flex;
  padding-bottom: 10px;;
}
.domain{
  color:#828282;
  font-size:10pt;
  
}
</style>
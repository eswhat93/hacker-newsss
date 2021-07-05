<template>
  <div>
      <button @click="loginUser1">login</button>
      <h1>list</h1>
      <ul>
          <li v-for="item in items" :key="item.id">{{item}}</li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            items:[]
        }
    },
    methods:{
        async loginUser1(){
            var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            if(response.data.id === 1){
                var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
                this.items = list.data;
            }
        }
    }
}
</script>

<style>

</style>
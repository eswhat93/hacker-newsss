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
import {handleException} from '../utils/handler.js'
export default {
    data(){
        return {
            items:[]
        }
    },
    methods:{
        async loginUser1(){
            //try catch는 자바스크립트 코드 에러 처리까지 폭넓게 보여줘서 더 포괄적으로 예외처리를 할 수 있음
            try {
                var response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
                if(response.data.id === 1){
                    var list = await axios.get('https://jsonplaceholder.typicode.com/todos');
                    this.items = list.data;
                }
            } catch (error) {
                handleException(error);
                console.log(error);
            }
            
        }
    }
}
</script>

<style>

</style>
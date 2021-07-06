<template>
  <div class="header">
    <h1>HACKER NEWS</h1>
    <section class="container">
        <router-link to="/news">news</router-link><div class="barItem">|</div>  
        <router-link to="/ask">ask</router-link><div class="barItem">|</div>  
        <router-link to="/jobs">jobs</router-link><div class="barItem">|</div>  
        <router-link to="/user">user</router-link><div class="barItem">|</div>  
        <router-link to="/item">item</router-link>
        <router-link to="/sign">sign</router-link>
    </section>
        <!-- <div target="_blank" @click="openSignIn()"><h3>sign in</h3></div> -->
        <i class="mode far fa-sun" v-on:click="changeMode"></i>
        
</div>
</template>

<script>
import bus from '../utils/bus.js'
export default {
   methods:{
       openSignIn:()=>{
           window.open('./SignInView.vue','','location=no, directories=no,resizable=no,status=no,toolbar=no,menubar=no, width=500,height=600,left=0, top=50, scrollbars=no');

       },
       changeMode:()=>{
           let className=[]
           const imageA = document.querySelector(".mode")
           if(imageA.classList.contains('far')){
               className=["fas", "fa-moon"]
           }else {
               className=["far","fa-sun"]
           }
           
           imageA.classList.remove(imageA.classList.item(1),imageA.classList.item(2))
           imageA.classList.add(...className);
           
           localStorage.setItem("mode",imageA.classList.item(1));
           bus.$emit("send");
}
   }
}
</script>

<style scoped>

.header{
    color:#354952;
    background-color: #42b883;
    display: flex;
    padding: 0px 20px 0px 20px;
}
.header .router-link-exact-active{
    color:#354952;
    font-weight: 800;
}
.header >.container{
    display: flex;
    flex:auto;
    padding-left:30px;
}
.header >.container>a{
    color: white;
    margin:4px;
    text-decoration: none;
    line-height: 80px;
}
.barItem{
    color: white;
    margin:4px;
    line-height: 80px;
}
.mode{
    padding:0 30px 0 30px;
    margin:0;
    line-height: 80px;
    cursor: pointer;
    color:white;
    font-size: 20px;
}
.mode:hover{
    background-color: #d8dee8;
    opacity: 80%;
}
.display{
    display: none;
}


</style>
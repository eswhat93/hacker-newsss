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
</div>
</template>

<script>
export default {
   methods:{
       openSignIn:()=>{
           window.open('./SignInView.vue','','location=no, directories=no,resizable=no,status=no,toolbar=no,menubar=no, width=500,height=600,left=0, top=50, scrollbars=no');

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
h3{
    padding:0 30px 0 30px;
    margin:0;
    line-height: 80px;
    cursor: pointer;
}
h3:hover{
    background-color: #d8dee8;
    opacity: 80%;
}


</style>
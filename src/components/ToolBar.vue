<template>
  <div class="header">
    <h1>hacker newss</h1>
    <section class="container">
        <router-link to="/news">news</router-link><div class="barItem">|</div>  
        <router-link to="/ask">ask</router-link><div class="barItem">|</div>  
        <router-link to="/jobs">jobs</router-link><div class="barItem">|</div>  
        <router-link to="/user">user</router-link><div class="barItem">|</div>  
        <router-link to="/item">item</router-link>
    </section>
    <h4 class="login-item">login</h4>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>

.header{
    color:#354952;
    background-color: #42b883;
    display: flex;
    padding: 8px;
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
.header >.login-item{
    width:4rem;
    line-height: 50px;
}

</style>
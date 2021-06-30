<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
export default {
  components:{
    ToolBar,
  },
}
</script>

<style>
body{
  padding:0;
  margin: 0;
}

/* router-transition */
.page-enter-active, .page-leave-active{
  transition:opacity .5s ease;
}
.page-enter, .list-leave-to{
  opacity: 0;
  transform:translateY(30px);
}

a{
  color:#344952;
  text-decoration: none;
}
a:hover{
  color:#42b883;
  text-decoration: underline;
}
.router-link-exact-active{
  text-decoration: underline;
}
</style>




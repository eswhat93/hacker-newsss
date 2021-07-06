<template>
  <div id="app">
    <ToolBar @send="changeMode"></ToolBar>
    <transition name="page">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'
import bus from './utils/bus.js'

export default {
  components:{
    ToolBar,
    Spinner
  },
  data(){
    return{
      loadingStatus:false
    }
  },
  methods:{
    startSpinner(){
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    },
    changeMode(){
      const body = document.querySelector("#app");
      let bodyColor=""
      if(localStorage.getItem("mode")==="far") bodyColor="white"
      else bodyColor="#0d1505"

      body.style.backgroundColor=bodyColor;
    }
  },
  created(){
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
    bus.$on('send',this.changeMode);
  },
  beforeDestroy(){
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner)
  }
}
</script>

<style>
body{
  padding:0;
  margin: 0;
  background-color:white ;
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




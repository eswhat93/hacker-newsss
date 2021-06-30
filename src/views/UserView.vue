<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ "joined "+ userInfo.created }} ,</span> 
      <span slot="karma">{{userInfo.karma}}</span>
    </user-profile>
    <!-- <div :if="this.$store.state.user">
      <p>{{userInfo.id}}</p>
      <p>{{userInfo.karma}}</p>
      <p>{{userInfo.created}}</p>
    </div> -->
  </div>
  
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
export default {
  components:{
    UserProfile
  },
  computed:{
    userInfo(){
      return this.$store.state.user
    }
  },
  created(){
    const userName = this.$route.params.id; 
    this.$store.dispatch('FETCH_USER', userName)
  }
}
</script>

<style>

</style>
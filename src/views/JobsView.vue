<template>
  <section>
    <!-- <ul class="jobs-list">
      <li v-for="job in fetchedJob" :key="job.id" class="post-list">
        <div class="point">{{job.points}}</div>

        <a :href="job.url">{{job.title}}</a>
        
        <small>{{job.time_ago}}</small>
      </li>
    </ul> -->
    <list-item></list-item>
  </section>
</template>


<script>
import ListItem from '../components/ListItem.vue'
// import { mapGetters } from 'vuex'
export default {
  components:{
    ListItem
  }
  // computed:{
  //   ...mapGetters(['fetchedJob'])
  // },
  // created(){
  //   this.$store.dispatch('FETCH_JOBS')
  // }
}
</script>

<style scoped>
.jobs-list{
  display: flex;
  flex-direction:column;
}
.post-list{
  list-style:none;
  align-content: center;
  display: flex;
  padding-bottom: 10px;
  border-bottom:1px solid #eee;
}
.point{
  width:80px;
  height: 60px;
  display: flex;
  align-content: center;
  justify-content: center;
  color:#42b88b;
}
</style>
<template>
  <section>
    <div v-for="job in fetchedJob" :key="job.id">
      {{job.title}}
      <abbr>{{job.url}}</abbr>
      <small>{{job.time_ago}}</small>
    </div>
  </section>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters(['fetchedJob'])
  },
  created(){
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style>

</style>
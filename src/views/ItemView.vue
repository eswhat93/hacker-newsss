<template>
  <div>
    <!-- <section>
      <div>
        <div class="user-container">사용자 프로필</div>
        <div>
          <i class="fas fa-user"></i>
          <router-link :to="`/user/${fetchedItem.user}`" class="user-description">
            {{fetchedItem.user}}
          </router-link>
          <div class="time">{{fetchedItem.time_ago}}</div>
        </div>
        
      </div>
      <div>{{fetchedItem.content}}</div>
      
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button @onClick="submitComment" >add comment</button>
    </section> -->
    <user-profile :info="fetchedItem">
      <router-link slot="username" :to="`/user/${fetchedItem.user}`" class="user-description">
      {{ fetchedItem.user }}
      </router-link>
      <template slot="time">{{ "posted "+fetchedItem.time_ago }}</template>
    </user-profile>
    <section>
      <h2 v-html="fetchedItem.title"></h2>
    </section>
    <section>
      <!-- 질문 답변 -->
    </section>
    
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import {mapGetters} from 'vuex';
export default {
  components:{
    UserProfile
  },
  computed:{
    ...mapGetters(['fetchedItem'])
  }
  ,
  methods:{
    submitComment(){
    }
  },
  created(){
    const userId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', userId)
  }
}
</script>

<style scoped>
.user-container{
  display: flex;
}
.fa-user{
font-size:2.5rem;
}
.user-description{
padding-left: 8px;
}
.time{
  font-size:0.7px;
}
</style>
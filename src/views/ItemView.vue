<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div>
        <div class="user-container">사용자 프로필</div>
        <div>
          <i class="fas fa-user"></i>
          <router-link :to="`/user/${fetchedItem.user}`" class="user-description">
            {{fetchedItem.user}}
          </router-link>
          <div class="time">{{fetchedItem.time_ago}}</div>
        </div>
        <h2 v-html="fetchedItem.title"></h2>
      </div>
      <div>{{fetchedItem.content}}</div>
      
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button @onClick="submitComment" >add comment</button>
    </section>
    <section>
      <!-- 질문 답변 -->
    </section>
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
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
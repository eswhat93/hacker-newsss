<template>
  <div>
    <user-profile :info="fetchedItem">
      <router-link slot="username" :to="`/user/${fetchedItem.user}`" class="user-description">
      {{ fetchedItem.user }}
      </router-link>
      <template slot="time">{{ "posted "+fetchedItem.time_ago }}</template>
    </user-profile>
    <section>
      <h2 v-html="fetchedItem.title"></h2>
      <p v-html="fetchedItem.content"></p>
    </section>
    <section>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>add comment</button>
    </section>
    <section>
      <!-- 질문 답변 -->
      <!-- 대댓글의 표현은? 여기부터 컴포넌트화 -->
      <ul v-for="(commentOne) in fetchedItem.comments" :key="commentOne.id">
        <small>{{commentOne.time_ago}}{{commentOne.user}}</small>
        <li v-html="commentOne.content"></li>
        대댓글
        <tree :tree-data="tree"></tree>
      </ul>
      
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import {mapGetters} from 'vuex';

import Tree from './Tree.vue';

export default {
  data:()=>{
    return{
      tree: ''
    }
  },
  components:{
    UserProfile,
    Tree
  },
  computed:{
    ...mapGetters(['fetchedItem']),
    
  }
  ,
  methods:{
    submitComment(){
    }
  },
  created(){
    const userId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', userId)
    this.tree = this.$store.state.item
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
li{
  list-style: none;
}
</style>
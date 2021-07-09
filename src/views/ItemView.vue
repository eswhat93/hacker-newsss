<template>
  <div class="all">
    <user-profile :info="fetchedItem">
      <router-link slot="username" :to="`/user/${fetchedItem.user}`" class="user-description">
      {{ fetchedItem.user }}
      </router-link>
      <template slot="time">{{ "posted "+fetchedItem.time_ago }}</template>
    </user-profile>
    <section class="content">
      <h2 v-html="fetchedItem.title"></h2>
      <p v-html="fetchedItem.content"></p>
      <vue-editor v-model="comment"></vue-editor>
      <button @click="saveComment">add comment</button>
    </section>
    <section>
      <!-- 질문 답변 -->
      <!-- 대댓글의 표현은? 여기부터 컴포넌트화 -->
      <ul>
        <li v-for="comment in this.storedCommentItems" :key="comment.contentId">
          {{comment.comment}}
        </li>
      </ul>
      <!-- <ul v-for="(commentOne) in fetchedItem.comments" :key="commentOne.id" :v-model="tree">
        <small>{{commentOne.time_ago}}{{commentOne.user}}</small>
        <li v-html="commentOne.content"></li>
        *
        <tree :tree-data="tree"></tree>
      </ul> -->
      
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import {mapGetters} from 'vuex';

// import Tree from './Tree.vue';
import { VueEditor } from "vue2-editor";

export default {
  data:()=>{
    return{
      tree: {},
      comment:'',
    }
  },
  components:{
    UserProfile,
    // Tree,
    VueEditor
  },
  computed:{
    ...mapGetters(['fetchedItem']),
    ...mapGetters(['storedCommentItems'])
  },
  
  methods:{
    saveComment(){
      if(this.content!==''){
        const data={contentId:this.fetchedItem.id,comment:this.comment};
        this.$store.commit('addComment',data);
        this.clearInput();
      }
      else{
        alert("공백입니다");
      }
    },
    clearInput(){
      this.comment = '';
    }
  },
  created(){
    const userId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', userId)
  },
  
}
</script>

<style scoped>
.all{
  margin:0px;
  background-color: #eee;
}
.content{
  padding:10px;
}
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
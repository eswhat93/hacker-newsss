<template>
<!-- https://api.hnpwa.com/v0/news/1.json -->
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" :key=item.id class="post-list">
        <!-- 포인트 영역 -->
        <div class="point">
          {{item.points || 0}}
        </div>
        <!-- 기타정보 영역 -->
        <!-- 타이틀 영역 -->
        <div>
            <p class="news-title">
                <template v-if="item.domain">
                    <a :href="item.url" target="_blank">
                        {{item.title}}
                    </a>
                </template>
                <!-- 질문상세 페이지 -->
                <template v-else>
                    <router-link :to="`/item/${item.id}`">
                        {{item.title}} <em>comments : ({{ item.comments_count }})</em>
                    </router-link>
                </template>
            </p>
          <small class="link-text">
            {{item.time_ago}} 
            by 
            <router-link v-if="item.user" :to="`/user/${item.user}`">
                {{item.user}}
            </router-link>
            <a :href="item.url" target="_blank" v-else>{{item.title}}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
   created(){
  //     const name = this.$route.name;
  //     let pageName=""
  //     if(name=="news"){
  //         pageName = 'FETCH_NEWS'
  //     }else if(name=="jobs"){
  //         pageName = 'FETCH_JOBS'
  //     }else if(name=="ask"){
  //         pageName = 'FETCH_ASK'
  //     }else if(name=="user"){
  //         pageName = 'FETCH_JOBS'
  //     }
  //     this.$store.dispatch(pageName)
  //   //this.$store.dispatch('FETCH_NEWS');
    
  },
  computed:{
    listItems(){
        // const name = this.$route.name;
        // if(name=="news"){
        // return this.$store.state.news
        // }else if(name=="jobs"){
        //     return this.$store.state.jobs
        // }else if(name=="ask"){
        //     return this.$store.state.ask
        // }else if(name=="user"){
        //     return this.$store.state.user
        // }
        return this.$store.state.list;
    }
  }
 }
</script>

<style scoped>
.news-list{
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
.domain{
  color:#828282;
  font-size:10pt;
  
}
.news-title{
  margin:0;
}
.link-text{
  color:#828282;
}
</style>
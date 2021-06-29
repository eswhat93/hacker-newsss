<template>
<!-- https://api.hnpwa.com/v0/news/1.json -->
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" :key=item.id class="post-list">
        <!-- 포인트 영역 -->
        <div class="point">
          {{item.points}}
        </div>
        <!-- 기타정보 영역 -->
        <div class="news-title">
          <a :href="item.url" target="_blank">
            {{item.title}}
          </a>
          <small class="link-text">{{item.time_ago}} 
          by 
          <router-link :to="`/user/${item.user}`">
            {{item.user}}
          </router-link>
          </small>
        </div>
        
        
      </li>
    </ul>
  </div>
  
</template>

<script>
export default {
  created(){
    this.$store.dispatch('FETCH_NEWS');
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
  border-bottom:1px solie #eee;
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
  
}
</style>
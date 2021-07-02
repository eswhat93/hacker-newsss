<template>
  <li class="node-tree">
      <small class="time" v-html="node.time_ago"></small>
      <small v-html="node.user"></small>
      <h3 v-html="node.comments_count"></h3>
      <span class="comment" v-html="node.content"></span>
      
      <ul v-if="node.comments && node.comments.length" class="node-child">
          <node v-for="comments in node.commments" :node="comments" :key="comments.id">대댓글 내용 : {{comments.contents}}</node>
      </ul>
  </li>
</template>

<script>
export default {
    name: "node",
    props:{
        node:{}
    },
}
</script>

<style scoped>
.class{
    padding-right:3px;
}
.node-child ul{
    padding-left: 16px;
    margin: 6px 0;
}
</style>
<template>
  <li class="node-tree">
      <small class="time" v-html="node.time_ago"></small>
      <small v-html="node.user"></small>
      <span class="comment" v-html="node.content"></span>
      <ul v-if="node.comments && node.comments.length">
          <node v-for="comments in node.commments" :node="comments" :key="comments.id"></node>
      </ul>
  </li>
</template>

<script>
export default {
    name: "node",
    props:{
        node:Object
    }
}
</script>

<style scoped>
.class{
    padding-right:3px;
}

</style>
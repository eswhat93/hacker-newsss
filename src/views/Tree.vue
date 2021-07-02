<template>
<div class="tree">
    <ul class="tree-list">
        <node-tree :node="treeData"></node-tree>
    </ul>
</div>
  
</template>

<script>
import NodeTree from './NodeTree.vue'
export default {
    props:{
        treeData:{}
    },
    components:{
        NodeTree
    }
}
</script>

<style scoped>
.tree-list ul {
  padding-left: 16px;
  margin: 6px 0;
}
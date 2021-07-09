<template>
    <vue-editor>{{addCom}}</vue-editor>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
    data(){
        return{
            props:['addCom']
        }
    },
    components:{
        VueEditor,
        // Quill
    }
}
</script>

<style>

</style>
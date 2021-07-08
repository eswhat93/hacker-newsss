<template>
  <input type="checkbox" 
        :value="value" 
        @click="toggleCheckBox">
</template>

<script>
export default {

  //props 이름 지정해서 그대로 내리면 아래에서 값 변경했을 때 에러가 남
  //그래서 value로 내려오는 props데이터를 받고 값이 변경되었을 때 emit으로 올려준다
  props:['value'],
  methods:{
    toggleCheckBox(){
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style>

</style>
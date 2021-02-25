<template>
  <div>
    <CustomVModel v-model="name"/>
    <br>
    <hr>
    <span>{{name}}</span>
  </div>
</template>

<script>
import CustomVModel from './CustomVModel'
export default {
  components:{
    CustomVModel
  },
  data(){
    return {
      name: 'hawke'
    }
  }
}
</script>

<style>

</style>
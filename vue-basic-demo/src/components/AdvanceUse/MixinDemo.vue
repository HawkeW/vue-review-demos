<template>
    <div>
      {{name}}
      <hr>
      {{major}}
      <hr>
      {{city}}
      <button @click="showName">显示姓名</button>
    </div>
</template>

<script>
import myMixin from './mixin'
export default {
  mixins: [myMixin],
  data(){
    return {
      name: '一度',
      major: '前端'
    }
  },
  methods: {
    
  },
  mounted(){
    console.log('component mounted', this.name)
  }
}
</script>

<style>

</style>
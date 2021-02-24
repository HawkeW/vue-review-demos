<template>
  <div>
    <input v-model="title" /> 
    <button @click="addTitle">添加</button>
  </div>
</template>

<script>
import event from './event'
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTitle(){
      this.$emit('add', this.title)
      event.$emit('onAddTitle', this.title)

      this.title = ''
    }
  },
}
</script>

<style>

</style>
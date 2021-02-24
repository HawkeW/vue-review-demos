<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">
        <label>
          {{item.title}}
          <button @click="deleteTitle(item.id)">删除</button>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import event from './event'
export default {
  props:{
    list:{
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted(){
    event.$on('onAddTitle', this.addTitleHandler)
    console.log('List mounted')
  },
  methods: {
    deleteTitle(id){
      this.$emit('delete', id)
    },
    addTitleHandler(title) {
      console.log( 'add title handler', title)
    }
  },
  beforeCreate(){
    console.log('List before create')
  },
  created(){
    console.log('List created')
  },
  beforeMount() {
    console.log('List before mount')
  },
  beforeUpdate(){
    console.log('List before update')
  },
  updated(){
    console.log('List updated')
  },
  beforeDestroy(){
    event.$off('onAddTitle')
    console.log('list before destroy')
  },
  destroyed(){
    console.log('list destroyed')
  }
}
</script>

<style>
li{
  width:200px;
  margin: 0 auto;
}
</style>
<template>
  <div>
    <Input @add="addItem" />
    <List :list="list" @delete="deleteItem" />
    <button @click="goOtherpage">go</button>
  </div>
</template>

<script>
import List from './List'
import Input from './Input'
export default {
  components:{
    List, Input
  },
  data() {
    return {
      list: [
        {id: '1', title: '吃饭'},
        {id: '2', title: '睡觉'},
      ]
    }
  },
  methods: {
    addItem(title){
      this.list.push({
        title,
        id: new Date().toString()
      })
    },
    deleteItem(id){
      this.list = this.list.filter(item => {
        return item.id !== id
      } )

    },
    goOtherpage(){
      this.$router.push('/demo')
    }
  },
  beforeCreate(){
    console.log('index before create')
  },
  created(){
    console.log('index created')
  },
  beforeMount() {
    console.log('index before mount')
  },
  mounted(){
    console.log('index mounted')
  },
  beforeUpdate(){
    console.log('index before update')
  },
  updated(){
    console.log('index updated')
  },
  beforeDestroy(){
    console.log('index before destroy')
  },
  destroyed(){
    console.log('index destroyed')
  }
}
</script>

<style>

</style>
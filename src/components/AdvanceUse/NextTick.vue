<template>
  <div>
    <ul ref="el1">
      <li v-for="(item, index) in list" :key="index" >{{item}}</li>
    </ul>
    <button @click="addItem">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["a", "b", "c"],
    }
  },
  methods:{
    addItem(){
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)
      this.list.push(`${Date.now()}`)

      this.$nextTick(()=>{
        // 获取DOM元素
        const ulElm = this.$refs.el1

        console.log(ulElm.childNodes.length)
      })
    }
  }
};
</script>

<style></style>

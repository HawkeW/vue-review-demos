<template>
  <div id="app">
    <ComponentDemo />
  </div>
</template>

<script>
import ComponentDemo from './components/ComponentDemo/index'
export default {
  name: 'App',
  components: {
    ComponentDemo
  },
  data() {
    return {
      num: 0
    }
  },
  methods: {
    increment1(event) {
      console.log('event', event, event.__proto__.constructor )
      console.log(event.target)
      console.log(event.currentTarget)
      this.num ++
    },
    increment2(val, event) {
      console.log(event.target)
      this.num = this.num + val
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

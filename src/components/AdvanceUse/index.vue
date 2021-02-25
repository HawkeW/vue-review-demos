<template>
  <div>
    <!-- <CustomVModel v-model="name"/>
    <br>
    <hr>
    <span>{{name}}</span> -->

    <!-- NextTick -->
    <!-- <NextTick /> -->
    <BasicSlot :url="webSite.url">
      {{webSite.title}}
    </BasicSlot>
  </div>
</template>

<script>
// import CustomVModel from './CustomVModel'
// import NextTick from './NextTick'
import BasicSlot from './BasicSlot'
export default {
  components:{
    // CustomVModel,
    // NextTick,
    BasicSlot
  },
  data(){
    return {
      name: 'hawke',
      webSite:{
        url: 'http://oncew.com',
        title: '一度杂谈',
        subTitle: '杂谈，技术与生活'
      }
    }
  }
}
</script>

<style>

</style>
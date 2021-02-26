<template>
  <div>
    <a :href="url">
      <slot :slotInfo="webSite">
        {{webSite.title}}
      </slot>
    </a>
  </div>
</template>

<script>
export default {
  props:['url'],
  data(){
    return {
      webSite:{
        url: 'http://oncew.com',
        title: '一度de',
        subTitle: '杂谈'
      }
    }
  }
}
</script>

<style>

</style>
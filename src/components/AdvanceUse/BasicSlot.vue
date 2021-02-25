<template>
  <div>
    <a :href="url">
      <slot>
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
        title: '一度',
        subTitle: '杂谈'
      }
    }
  }
}
</script>

<style>

</style>
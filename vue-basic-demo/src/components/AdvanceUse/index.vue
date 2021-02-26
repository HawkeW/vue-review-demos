<template>
  <div>
    <!-- CustomVModel demo -->
    <!-- <CustomVModel v-model="name"/>
    <br>
    <hr>
    <span>{{name}}</span> -->

    <!-- NextTick demo-->
    <!-- <NextTick /> -->

    <!-- BasicSlot demo -->
    <!-- <BasicSlot :url="webSite.url">
      {{webSite.title}}
    </BasicSlot> -->

    <!-- ScopedSlot demo -->
    <!-- <ScopedSlot v-slot="slotPorps">
      <template>
        {{slotPorps.slotInfo.title}}
      </template>
    </ScopedSlot> -->
    
    <!-- NamedSlot demo -->
    <!-- v-slot:header 缩写 #header -->
    <!-- <NamedSlot>
      <template v-slot:header>
        <h1>slot header </h1>
      </template>

      <p>默认slot  无名slot</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </NamedSlot> -->

    <!-- 动态组件 -->
    <!-- <div> 
      <component v-for="(item, key) in news" :key="key" :is="item.type" :src="item.type ==='img' ?'https://pic2.zhimg.com/50/v2-c309410d4a72ccb5f83308c469c7acac_400x224.jpg' : ''">{{item.content}}</component>
    </div>
     -->

    <!-- 异步组件 -->
    <!-- <FormDemo v-if="formShowed" />
    <button @click="formShowed = true">showForm</button> -->

    <!-- keep-alive -->
    <!-- <KeepAliveDemo /> -->

    <!-- Mixin -->
    <MixinDemo />
  </div>
</template>

<script>
// import CustomVModel from './CustomVModel'
// import NextTick from './NextTick'
// import BasicSlot from './BasicSlot'
// import ScopedSlot from './ScopedSlot'
// import NamedSlot from "./NamedSlot";
// import eText from './eText'
// import KeepAliveDemo from './KeepAliveDemo'
import MixinDemo from './MixinDemo'
export default {
  components: {
    // CustomVModel,
    // NextTick,
    // BasicSlot,
    // ScopedSlot,
    // NamedSlot,
    // eText
    // FormDemo: ()=>import('./FormDemo.vue'),
    // KeepAliveDemo,
    MixinDemo
  },
  data() {
    return {
      name: "hawke",
      webSite: {
        url: "http://oncew.com",
        title: "一度杂谈",
        subTitle: "杂谈，技术与生活",
      },
      news: {
        1: {
          type:'eText',
          content: '123'
        },
        2: {
          type:'eText',
          content: '123'
        },
        3: {
          type:'img',
          content: '123'
        },
        4: {
          type:'eText',
          content: '123'
        },
      },
      formShowed: false,
    };
  },
};
</script>

<style></style>

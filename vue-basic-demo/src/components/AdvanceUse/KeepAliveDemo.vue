<template>
  <div>
    <button @click="state = 'A'">A</button>
    <button @click="state = 'B'">B</button>
    <button @click="state = 'C'">C</button>
    <keep-alive>
      <KeepAliveA v-if="state === 'A'" />
      <KeepAliveB v-if="state === 'B'" />
      <KeepAliveC v-if="state === 'C'" />
    </keep-alive>
  </div>
</template>

<script>
import KeepAliveA from './KeepAliveA'
import KeepAliveB from './KeepAliveB'
import KeepAliveC from './KeepAliveC'
export default {
  components: {
    KeepAliveA,
    KeepAliveB,
    KeepAliveC
  },
  data(){
    return {
      state: 'A'
    }
  }
};
</script>

<style></style>

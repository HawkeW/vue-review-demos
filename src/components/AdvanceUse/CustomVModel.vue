<template>
  <!-- 例如颜色选择 -->
  <input
    type="text"
    :value="text1"
    @input="$emit('change', $event.target.value)"
  />
  <!-- 
    1. 上面的input 使用 :value 而不是 v-model
    2. 上面的 change 和 model.event 要对应起来
    3. text1 属性要对应起来
   -->
</template>

<script>
export default {
  name: "CustomVModel",
  model: {
    prop: "text1", // 对应props text
    event: "change",
  },
  props: {
    text1: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>

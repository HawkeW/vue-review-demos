## Vue基本知识

### computed 和 watch

- computed 有缓存，data不变则不会重新计算

- watch如何进行深度监测

#### watch

深度监听

```js
watch() {
    info: {
        handler(oldVal, val){
            console.log(oldVal, vale)
        },
        deep: true
    }
}
```

### class和style

- 使用动态属性
- 使用数组
- 组件上使用

### 条件渲染

- v-if v-else 可使用变量或条件表达式
- v-if和v-show的区别
- v-if和 v-show的使用场景

**区别：** 

- v-show为false时，是设置dom display属性为none, 依然渲染

- v-if 是不会渲染的

**使用场景：** 如果是一次性的，则使用v-if；如果是频繁的切换，则v-show性能更好

### 循环（列表）渲染

- 如何遍历对象 也可以使用v-for

- key重要性。key不能乱写，一般为id
- v-for和v-if不能同时使用

**遍历数组**

```js
<p>遍历对象</p>
<ul>
    <li v-for="(val, index) in listArr" :key="val.id">
    {{index} - {{val.id}} - {{val.title}}</li>
</ul>
....
data() {
    return {
        listArr:[
            {
                id:'a',
                title:'aaa'},
            {
                id: 'b',
                title:'bbb'
            }
            {
                id: 'c',
                title:'ccc'
            }
        ]
    }
}
```

**遍历对象**

```js
<p>遍历对象</p>
<ul>
    <li v-for="(val, key ,index) in listObj" :key="key">
    {{index} - {{key}} - {{val.title}}</li>
</ul>
....
data() {
    return {
        listObj:{
            a:{title:'aaa'},
            b:{title:'bbb'}
            c:{title:'ccc'}
        }
    }
}
```

### 事件

- event参数，自定义参数
- 事件修饰符，按键修饰符

**事件修饰符**

`.stop` / `.prevent` / `.capture` / `.self` / `.once` / `.passive`

```html
<!-- 阻止单击事件继续传播 -->
<a @click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form @submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a @click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form @submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div @click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div @click.self="doThat">...</div>

<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发   -->
<!-- 而不会等待 `onScroll` 完成                   -->
<!-- 这其中包含 `event.preventDefault()` 的情况   -->
<div @scroll.passive="onScroll">...</div>
<!-- .passive修饰符尤其能够提升移动端的性能。 -->
```

按键修饰符

- 【观察】 事件被绑定到哪里

```js
<template>
  <div id="app">
    <p>{{num}}</p>
    <button @click="increment1">+1</button>
    <button @click="increment2(2, $event)">+2</button>
  </div>
</template>

...
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
      //1. evnet 是原生的
	  //2. 事件被挂载到当前元素
      this.num++
    },
    increment2(val, event) {
      console.log(event.target)
      this.num = this.num + val
    }
  }
```

### 表单

- v-model
- 常见的 textarea / checkbox / radio / select
- 修饰符 `.lazy` / `.number` / `.trim`

## Vue组件使用

### props和$emit

props： 父组件向子组件传递参数

$emit：子组件向父组件传递事件

### 组件间通讯 - 自定义事件

```js
// event.js
import Vue from 'vue'
export default new Vue()

// 需要与兄弟组件通信的组件
import event from './event'

methods:{
    addTitle(){
        // 调用父组件的事件
        this.$emit('add', this.title)
        // 在合适的地方调用自定义事件
        event.$emit('onAddTitle', this.title)
    },
}


mounted(){
    // 绑定自定义事件
    event.$on('onAddTitle', this.addTitleHandler)
},
beforeDestroy() {
    // 及时销毁，否则可能造成内存泄露
    event.$off('onAddTitle', this.addTitleHandler)
}
```

### 生命周期

 ![img](https://img2018.cnblogs.com/blog/47685/201901/47685-20190111173917518-1987865733.png) 

#### 组件生命周期

- beforeCreate：初始化内部事件和生命周期

- created：

- beforeMount

- mounted

- beforeUpdate

- updated

- beforeDestroy： 解除绑定，销毁子组件及事件监听器

- destroyed

**created 与 mounted区别**

- created 时并没有渲染

- mounted 已经渲染

#### 生命周期（父子组件）

- 初始化： 父beforeCreate--父created -- 父beforeMount-- 子beforeCreate--子created -- 子beforeMount
- 渲染： 子组件mounted -- 父组件mounted

- 更新：父 beforeUpdate -- 子 beforeUpdate -- 子 updated -- 父 updated
- 销毁：父beforeDestroy -- 子beforeDestroy -- 子destroyed -- 父destroyed

- 热更新：父 beforeCreate -- 父created -- 父beforeMount -- 子beforeCreate -- 子created--子beforeMount--父beforeDestroy--子beforeDesctroy--子destroyed--父destroyed-- 子mounted -- 父mounted

## Vue高级特性

### 目的

- 不是每个都很常用，但用到必须会
- 对Vue掌握是否全免
- 做过的项目是否有深度和复杂度（至少能用到）

**高级特性**

- 自定义v-model

- $nextTick

- slot

- 动态、异步组件

- keep-alive

- mixin

### 自定义v-model

常见用于：颜色选择器

```js
//CustomVModel.vue
<template>
    <input type="text" 
		:value="text1"
		@input="$emit('change'， $event.target.value)"		
	/>
  <!-- 
    1. 上面的input 使用 :value 而不是 v-model
    2. 上面的 change 和 model.event 要对应起来
    3. text1 属性要对应起来
 -->
</template>
<script>
export default {
    model: {
        prop: 'text', // 对应props text
        event: 'change'
    },
    props: {
        text: {
            type: String,
            default: ''
        }
    }
}
</script>
```

### $nextTick

- vue是异步渲染的框架
- data改变之后，DOM不会立刻渲染
- $nextTick会在DOM渲染之后触发，以获取最新DOM节点

````js
// NextTick.vue
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
      this.list.push(`${new Date()}`)
      this.list.push(`${new Date()}`)
      this.list.push(`${new Date()}`)
		// 1. 页面渲染， $nextTick 待 DOM渲染完再回调
        // 2. 页面渲染时 会将 data 的修改做整合，多次 data修改会合并成一个
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

````



### slot

- 基本使用



- 作用域插槽
- 具名插槽

### 动态、异步组件

### keep-alive

### mixin




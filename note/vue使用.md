### Vue实例

#### 属性

- app.$data: 定义的data

- app.$props: 传入的参数

- app.$el: html节点

- app.$options: 创建vue对象的时候传入的options

  app.$options.render = (h) => {

  ​	return h('div', {}, 'new render function')

  }

  给app.$options.render function重新赋值是有效的，但并不会实时渲染，而是在下一次有值变化时，重新渲染才生效

- app.$root === app

- app.$children: 可以获取到组件的子元素

- app.$slots 和 app.$scopedSlots

- app.$refs :`<div ref="test"></div>`定位元素

- app.$isServer: 判断是否在服务端渲染的时候运行

#### 方法

- app.$watch ==>  创建实例时的watch

  - 实例中的watch会自动注销

  ```js
  const unWatch = app.$watch('text',  (newText, oldText)=>{
  	console.log(`${newText} : ${oldText}`)
  })
  setTimeout(()=>{
      unWatch()
  },2000)
  ```

- app.$on, app.$once 和 app.$emit(): 监听一个对象
- app.$forceUpdate: 主动触发渲染（比如对象的属性修改没有实时更新）
- app.$set() 和 app.$delete 的修改会自动触发重新渲染

- app.$nextTick(): 等待dom节点渲染完成

### Vue组件生命周期方法

- 一般跟dom有关的处理放在mounted中，跟数据有关的处理放在created或mounted
- 服务端渲染只有created,beforeCreate，无法做dom操作。因为服务端渲染不会有dom节点

beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestrory, destroyed

render(), renderError(), errorCaptured()

### Vue的数据绑定

### computed和watch使用场景和方法

#### computed

- 作用：监听一个值，进行一定计算并返回一个新值

- 常见使用方式

```js
computed:{
    name(){
        return `${this.firstName} ${ this.lastName }`;
    }
    name2:{
        get(){
            return `${this.firstName} ${ this.lastName }`
        },
        set(name){//注：不建议使用computed中的set，可能会导致循环错误
            const names = name.split(' ')
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }
},
```

#### watch

- 作用：监听一个值，并做出一些动作
- 常见使用方式

```js
watch:{
    firstName(newVal, oldVal){ // 监听一个字符串/boolean变量
        this.fullName = `${newVal} ${ this.lastName }`
    },
    lastName:{
    	handler(newVal, oldVal){
            this.fullName = `${this.firstName} ${ newVal }`
        },
        immediate: true
    },
    obj:{ //监听对象时，默认只会监听obj的引用是否变化
        handler(){
            console.log('obj.a changed')
        },
        immediate: true,
        //deep:true //配置deep为true时，则可以监听obj下的属性值；但是性能开销很大
    },
     'obj.a':{ //监听对象属性较优的选择
     handler(){
        console.log('obj.a changed')
     },
     immediate: true,
}
```

#### 区别

- 默认状态下，computed在实例初始化时会执行，而watch在初始化时不会执行，可以通过配置immediate为true使其初始化时执行

- watch：监听值变化去执行操作，computed：监听值变化，返回一个值，并进行缓存

- 无论是watch还是computed,都尽量不去改监听相关的属性，否则可能导致无限循环

### Vue的原生指令

- `v-bind:`缩写`:`
- `v-on:` 缩写 `@`

- `v-text`，类似`{{}}`

- `v-html`
- `v-show`
- `v-if`，`v-else`和`v-else-if`
- `v-for`
- `v-model`

```js
//v-model绑定一列数据
<template>
    <div>
    	<input type="checkbox" :value="1" v-model="arr">
        <input type="checkbox" :value="2" v-model="arr">
        <input type="checkbox" :value="3" v-model="arr">
            
        <input type="radio" value="3" v-model="picked" />
    	<input type="radio" value="4" v-model="picked" />
    </div>
</template>

<script>
export default{
       data(){
           return{
               arr:[1, 2, 3],
               picked：''
           }
       }
  }
</script>
```

- `v-pre`
- `v-cloak`: webpack等项目不需要，隐藏加载前内容

- `v-once`:只执行一次

### Vue组件

#### 组件定义

#### 组件的继承 extend


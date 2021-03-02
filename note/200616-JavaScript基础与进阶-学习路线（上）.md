---
layout: post
title:  【JS】JavaScript基础与进阶--学习路线
date:   2020-06-16
categories: 
 - 前端
tags: 
 - JavaScript
excerpt: 系统复习
typora-root-url: ..
---

:::tip
一次系统性的JavaScript复习
:::

### 如何学习

- 高效学习三部曲：找准知识体系，刻意训练，及时反馈；

- 知识体系：结构化的知识范围
- 涵盖所有知识点：结构化、有组织、易扩展

### 如何梳理

- W3C标准（应用标准）
- ECMA 262标准（ES，语法标准）
- 开发环境

- 运行环境

### 知识体系

- JS基础语法
- JS-Web-API
- 开发环境
- 运行环境

## JS语法基础

### 变量类型和计算

#### 值类型和引用类型

```javascript
//值类型
let a =100;
let b = a;
a = 200;
console.log(b)//100

//引用类型
let a = { age : 20 };
let b = a;
b.age = 21;
console.log(a.age);//21
```

**常见值类型**

- undefined, string, number, boolean, symbol

```javascript
let a; //undefined
const str = 'abc';
const n = 100;
const b = true;
const s = Symbol('s');
```

**常见引用类型**

```javascript
const obj = { x : 100 };
const arr = ['a', 'b', 'c'];
const n = null; //特殊引用类型，指针指向空地址

//特殊引用类型，但不用于存储数据，没有“拷贝、复制函数”说法
function fn(){}
```

函数也可以单独作为一个类型，即`函数类型`

**区别**

把值类型变量a赋值给新变量b，修改新变量b不会影响a的值；把引用类型变量obj1赋值给新变量obj2，修改新变量obj2的值，a的值也会改变

```javascript
let a = 1;
let b = a;
b = 3;
console.log(a);//1

let obj1 = { value: 1 };
let obj2 = obj1;
obj2.value = 3;
console.log(obj1.value);//{ value:3 }
```

##### `typeof`

- 识别所有**值类型**
- 识别函数
- 判断是否是引用类型（不可再细分）；

```javascript
const a; //undefined
const str = 'abc';
const n = 100;
const b = true;
const s = Symbol('s');

typeof a //'undefinded'
typeof str //'string'
typeof n //'number'
typeof b //'boolean'
typeof s //'symbol'
```

```javascript
//能判断函数
typeof console.log //'function'
typeof function () {}//'function'

能识别引用类型（不能再继续识别）
typeof null //'object'
typeof ['a', 'b']; //'object'
typeof { x : 100}; //'object'
```

##### 深拷贝

- 判断值类型和引用类型
- 判断数组还是对象
- 递归

```javascript
const obj = {
    age: 20,
    name: '张三',
    address: {
        city:'beijing'
    },
    arr:['a', 'b', 'c']
};

const obj1 = deepClone(obj);

obj1.address.city = 'shanghai';
console.log(obj.address.city);

/**
 * 深拷贝
 * @param {Object} obj  要拷贝的对象
 */
function deepClone( obj = {} ) {
    if( typeof obj !== 'object' || obj == null){
        // obj 是 null 或者不是对象和数组，直接返回
        return obj;
    }

    //初始化返回结果
    let result;
    if(obj instanceof Array){
        result = [];
    } else {
        result = {};
    }

    for(let key in obj){
        // 保证 key 不是原型的属性
        if(obj.hasOwnProperty(key)){
            // 递归调用(重点)
            result[key] = deepClone(obj[key])
        }
    }
    // 返回结果
    return result;
}
```

#### 变量计算-类型转换

- 字符串拼接

```javascript
const a = 100 + 10;//110
const b = 100 + '10';//10010
const c = true + '10';//true10
```

- == 和 ===
  - == 会对变量进行强制类型转换
  - === 比较的是变量

```javascript
100 == '100'; //true
0 == ''; //true
0 == false; //true
false == ''; //true
null = undefined; //true
```

​    ==> 除了 == null之外，其他一律用 ===

```
const ovj = { x : 100 }
if (obj.a == null ){ }
//相当于：
//if (obj.a === null || obj.a ===undefined) { }  
```

- if 语句和逻辑运算

  - truly变量： 两步非运算之后为true的变量：```!!a === true```

  - falsely变量： 两步非运算之后为false的变量：```!!a === true```

```javascript
//除了下方的falsely变量，都是truly变量
!!0 === false
!!NaN === false
!!'' === false
!!null === false
!!undefined === false
!!false === false
```

```javascript
//truly变量
const a = true;
if (a) {
    //....
}
const b = 100;
if (b) {
    //....
}
//逻辑判断
console.log( 10 && 0); // 0
console.log('' || 'abc'); // 'abc'
console.log(!window.abc); // true
```

#### 小结

- 值类型与引用类型各自的堆栈模型，深拷贝
- typeof
- 类型转换，truly和falsely变量

#### 题目

### 原型和原型链

#### Class和继承

**class构建**

- constructor
- 属性
- 方法

```javascript
// 类
class Student {
    constructor(name, number) {
        this.name = name;
        this.number = number;
        // this.gender = 'male';
    }

    sayHi() {
        console.log( `姓名： ${this.name} , 学号： ${ this.number }` );
    }

    study(){}
}
// 通过类 new 对象/实例
const xiaoming = new Student('小明', 100);

console.log(xiaoming.name); //'小明'
console.log(xiaoming.number); //100
xiaoming.sayHi(); //'姓名： 小明 , 学号： 100'
```

**继承**

- extends
- super
- 扩展或重写方法

#### 原型

##### 类型判断 - instance of

- 可以用于判断变量是否为某个class构建出来的，是不是其子类
- Object是所有class的父类

```javascript
xiaoming instanceof Student // true
xiaoming instanceof Poeple // true
xiaoming instanceof Object // true

[] instanceof Array // true
[] instanceof Object // true

{} instanceof Object // true
```

##### 原型

```javascript
//class 实际上是函数， 是一种语法糖
typeof People // 'function'
typeof Student //'function'

//隐式原型和显式原型
console.log( xiaoming.__proto__ );
console.log( Student.prototype );
console.log( xiaoming.__proto__ === Student.prototype )
```

##### 原型关系

- 每个class都有显式原型`prototype`
- 每个实例都有隐式原型`__proto__`
- 实例的隐式原型指向对应class的显式原型

##### 基于原型的执行规则

- 实例获取属性或者执行方法时
- 先在自身属性和方法寻找
- 找不到则去隐式原型中寻找

#### 原型链

```javascript
console.log( Student.prototype.__proto__ );
console.log( People.prototype );
console.log( Student.prototype.__proto__ === People.prototype )
```

#### 题目

- 判断一个变量是不是数组？ -- a instanceof Array
- class的原型的本质 
  - 原型和原型链的图示
  - 属性和方法的执行规则
- 简易的jQuery

```javascript
class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector);
    const length = result.length;
    for (let i = 0; i < length; i++) {
      this[i] = result[i];
    }
    this.length = length;
  }
  get(index) {
    return this[index];
  }
  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i];
      fn(elem);
    }
  }
  on(type, fn) {
    return this.each((elem) => {
      elem.addEventListener(type, fn, false);
    });
  }
  // 扩展很多 DOM API
}

// 插件
jQuery.prototype.dialog = function (info) {
  alert(info);
};

// 复写 “造轮子”
class myJQuery extends jQuery {
  constructor(selector) {
    super(selector);
  }
  // 扩展自己的方法
  addClass(className) {
    // ...
  }
  style(data) {
    // ...
  }
}
const $p = new jQuery("p");
$p.get(1);
$p.each((elem) => console.log(elem.nodeName)); //P
$p.on("click", () => alert("click"));
```



#### 小结

**注意：**

- class是ES6的语法规范，由ECMA委员会发布
- ECMA指规定语法规则，即代码的书写规范，而不规定如何实现
- 以上实现方式都是V8引擎的实现方式，也是主流的

**小结**

- class 和集成，结合手写jQuery示例理解
- instanceof
- 原型和原型链：图示和执行规则

### 作用域和闭包

- 作用于和自由变量
- 闭包
- this

####  作用域和自由变量

**作用域**

- 作用域
- 函数作用域
- 块级作用域

```javascript
//if (true) {
 let x = 100;
}
console.log(x); // undefined
```

**自由变量**

- 一个变量在当前作用域没有定义，但被使用了，这个变量就是自由变量
- 向上级作用域，一层一层一次寻找，直至找到为止
- 如果全局作用域没有找到，则报错 xx is not defined
- *自由变量的查找，是在**函数定义的地方**向上级作用域查找，而不是在执行的地方*

#### 闭包

作用域应用的特殊情况，有两种表现：

- 函数作为参数被传递
- 函数作为返回值被返回

```javascript
// 函数作为返回值
function create() {
     const a = 100;
     return function() {
         console.log(a);
     }
}
const  a = 200;
const fn = create();
fn(); //100
```

```javascript
// 函数作为参数
function print(fn) {
    const b = 200;
    fn();
}
const b = 100;
function fn1() {
    console.log(b)
}
print(fn1);//100
```

#### this

##### 场景

1. 作为普通函数 --> window

2. 使用 `call`/`apply`/`bind` --> 改变`this`为传入的对象

3. 作为对象方法 -->  对象本身

4. 在 class方法中调用 --> 实例本身

5. 箭头函数 --> 取上级作用域的`this`

**特点：** ***this的取值，是在函数执行的时候决定的，而不是在函数定义的时候***

```javascript
function fn1(){
    console.log(this); 
}
fn1(); // window

fn1.call({ x: 100 }); //{ x : 100 }

const fn2 = f1.bind({ x : 200 });
fn2() // { x : 200 }
```

#### 题目

- this的不同应用场景，如何取值
- 手写bind函数

```javascript
// 模拟bind
Function.prototype.bind1 = function () {
    // 将参数拆解为数组 Array.prototype.slice.call 将 列表 转换为 数组
    const args = Array.prototype.slice.call(arguments);

    // 获取this( 数组第一项 )
    const _this = args.shift();

    // fn1.bind(...) 中的 fn1
    const self = this;
    
    // 返回一个函数
    return function () {
        return self.apply(_this, args)
    }
}

function fn1(a, b, c) {
    console.log('this', this);
    console.log(a, b, c);
    return 'this is fn1';
}

const fn2 = fn1.bind1({ x : 100}, 10, 20, 30);
const res = fn2();
console.log(res);
```

- 实际开发中的闭包应用场景，举例说明
  - 隐藏数据
  - 如：构建一个缓存工具

```javascript
// 闭包隐藏数据，只提供API

function createCache(){
    const data = {} //闭包中的数据，被隐藏，不被外界访问
    
    return {
        set: function ( key, val) {
            data[key] = val;
        },
        get: function (key) {
            return data[key];
        }
    }
}

const c = createCache();
c.set('a', 100);
console.log( c.get('a') );
```

- - 如创建10个`<a>`标签， 点击对应标签时弹出对应序号

### 同步和异步

**知识点**

- 单线程和异步
- 应用场景
- callback hell 和 Promise

#### 单线程和异步

- `JS`是单线程语言，只能同时做一件事
- 浏览器和`nodejs`已支持`JS`启动进程，如`web Worker`
- `JS`和`DOM`渲染公用同一个线程，因为`JS`可以修改`DOM`结构
- 遇到等待（网络请求，定时任务）不能卡住
- 所以需要异步
- 基于`callback`回调函数形式调用

```js
//异步
console.log(100);
setTimeout(()=>{
    console.log(200);
}, 1000)
console.log(300);
//同步
console.log(100);
alert(200);
console.log(300);
```

基于`JS`是单线程语言的本质，异步不会阻塞代码执行，而同步会阻塞代码执行

##### 应用场景

- 网络请求，如`ajax`图片加载


```js
//ajax
console.log(start);
$.get('./data1.json',function (data1) {
    console.log(data1);
})
console.log('end');
```

```js
//图片加载
console.log(start);
let img = document.createElement('img');
img.onload = function () {
    console.log('loaded');
}
img.src = '/xxx.png'; 
console.log('end');
```

- 定时任务，如`setTimeout`

```js
//setTimeout
console.log(100);
setTimeout(function () {
    console.log(200);
}, 1000)
console.log(300);
```

```js
//setInterval
console.log(100);
setInterval(function () {
    console.log(200);
}, 1000);
console.log(300);
```

##### callback hell

```js
//获取第一份数据
$.get('./data1.json',function (data1) {
    console.log(data1);
    //获取第二份数据
    $.get('./data1.json',function (data1) {
    	console.log(data1);
        //获取第三份数据
        $.get('./data1.json',function (data1) {
        	console.log(data1);
            
            //更多数据
		})
	})
})
```

##### Promise

```js
function getData(url) {
    return new Promise ((resolve, reject) => {
        $.ajax({
            url,
            success(data){
                resolve(data);
            },
            error(err){
                reject(err);
            }
        })
    })
}

const url1 = '/data1.json';
const url2 = '/data2.json';
const url3 = '/data3.json';
getData(url1).then(data1 => {
    console.log(data1);
    return getData(url2);
}).then(data2 => {
    console.log(data2);
    return getData(url3);
}).then(data3 => {
    console.log(data3);
}).catch(err => console.error(err));
```

#### 题目

- 同步和异步的区别是什么?

  - 异步是基于`JS`是单线程的
  - 异步不会阻塞代码执行
  - 同步会阻塞代码执行
- 手写用Promise加载一张图片?

```js
const url = "https://zhuoqiong.tongtool.com/file//011657/product/6768011657201912020000590289/8b93.png";

function loadImg(src) {
    const p = new Promise(
        (resolve, reject) => {
            const img = document.createElement('img');
            img.onload = () => {
                resolve(img);
            }
            img.onerror = () => {
                const err = new Error(`图片加载失败${src}`);
                reject(err);
            }
            img.src = src;
        }
    )
    return p;
}
// 加载单个图片
loadImg(url).then( img => {
    console.log(img.width);
    return img;
}).then(img => {
    console.log(img.height);
}).catch(err => console.error(err));

const url1 = "https://zhuoqiong.tongtool.com/file//011657/product/6768011657201912020000590289/8b93.png";
const url2 = "https://zhuoqiong.tongtool.com/file/011657/product/6768011657201912020000590256/6jjb.png";


loadImg(url1).then( img1 => {
    console.log(img1.width);
    return img1;
}).then(img1 => {
    console.log(img1.height);
    return loadImg(url2);
}).then(img2 => {
    console.log(img2.width);
    return img2;
}).then(img2 => {
    console.log(img2.height);
}).catch(err => console.error(err));
```

- 前端使用异步的场景有哪些？
  - 网络请求，如ajax请求，图片加载
  - 定时任务，如setTimeout
- 如题代码，输出是什么?

```js
//setTimeout笔试题
console.log(1);
setTimeout( function () {
    console.log(2);
}, 1000)
console.log(3);
setTimeout( function () {
    console.log(4)
}, 0);
console.log(5);
```

**小结**

- 单线程和异步，异步和同步的区别
- 前端异步的应用场景：网络请求和定时任务
- Promise解决callback hell

## JS Web API

- JS基础知识，规定语法（ECMA 262标准）
- JS Web API，网页操作的API( W3C 标准)
- 前者是后者的基础，两者结合才能真正实际应用

**JS Web API**

- DOM
- BOM
- 时间绑定
- ajax
- 文件存储

**需要知道的**

- Vue和React框架应用广泛，封装了DOM操作
- 但DOM操作是前端工程师的基础和必备知识



### DOM操作（Document Obeject Model）

**知识点**

- DOM本质
- 节点操作
- 结构操作
- 性能

#### DOM本质

从html文件解析出来的"树"

#### DOM节点操作

- 获取DOM节点

- attribute: `p.style.width  = "100px"`
- property:  `p.setAttribute('width', '100px');`

**attribute和property异同**

- attribute：修改的是dom节点的属性，会改变html结构
- property：修改的是dom节点对象的属性，不会提现到html结构中

- 两者都可能引起DOM重新渲染

#### DOM结构操作

```js
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');

//新建节点
const newP = document.createElement('p');
newP.innerHTML = 'this is newP';
//插入节点
div1.appendChild(newP);

//移动节点，对已存在元素进行appendChild操作会移动节点
const p1 = document.getElementById('p1');
div2.appendChild(p1);

```

#### 性能

- 用缓存避免多次查询

```js
for (let i = 0; i < document.getElementsByTagName('li').length;i++){
    //缓存，只查询一次
}

const lists = document.getElementsByTagName('li')
for (let i = 0; i < lists.length;i++){
    //缓存，只查询一次
}
```

- 把频繁操作改为一次操作

```js
const listNode = document.getElementById('list');

//创建一个文档片段
const frag = docuement.createDocument.Fragment();

//执行插入
for(let x = 0; x< 10; x++) {
    const li = document.createElement('li');
    li.innerHTML = 'List Item' + x;
    frag.appendChild(li);
}

//都完成之后再插入到DOM树种
listNode.appendChild(frag);
```

#### 题目

- DOM是哪种数据结构

  树（DOM树）

- DOM操作的常用API

  

- `attribute`和`property`的区别

  - attribute：修改的是dom节点的属性，会改变html结构
  - property：修改的是dom节点对象的属性，不会提现到html结构中

  - 两者都可能引起DOM重新渲染

- 一次性插入多个DOM节点，怎么操作

  - 先创建一个文档片段，添加到片段之后，最后整体插入

### BOM操作（Browser Object Model）

**知识点**

- navigator
- screen
- location
- history



#### 题目

- 如何识别浏览器的类型
- 分析插接`url`各个部分


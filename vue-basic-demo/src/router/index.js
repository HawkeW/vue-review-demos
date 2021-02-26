import Vue from "vue";
import VueRouter from "vue-router";
import ComponentDemo from '../components/ComponentDemo/index'
import HelloWorld from '../components/HelloWorld'

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

var routes = [
  { path: '/', component: HelloWorld },
  { path: '/demo', component: ComponentDemo },
]

var router =  new VueRouter({
  routes
})

export default router;
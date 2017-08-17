// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */


new Vue({
  el: '#app',             //生成新的实例的容器
  template: '<App/>',
  // template: '<div>Hello vue!</div>',
  components: {App}   //  {'App':App}
})


// 全局注册
// Vue.component('Jack', {
//   template: '<p>I am {{name}}</p>',
//   data(){
//     return {
//       name: 'Jack Ma '
//     }
//   }
// })




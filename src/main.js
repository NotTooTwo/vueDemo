// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('compontent-g', {
  template: '<option value="2">2</option>  '
})
Vue.component('compontent-slot', {
  template: '<div>这个准备放一个插槽<slot>这是一些备用内容</slot></div> '
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

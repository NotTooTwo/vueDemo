// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/css/animate.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('compontent-g', {
  template: '<option value="2">2</option>  '
})
Vue.component('compontent-slot', {
  template: '<div>这个准备放一个插槽<slot name="slot1">这是一些备用内容1</slot><slot>这是一些备用内容2</slot></div> '
})
new Vue({
  el: '#app',
  created () {
    (function(win) {
      var remCalc = {};
      var docEl = win.document.documentElement,
        tid;

      function refreshRem() {
        // 获取当前窗口的宽度
        var width = docEl.getBoundingClientRect().width;
        // 大于640px 按640算
        if (width > 640) { width = 640 }
        //var rem = width / 10;  // cms 只要把这行改成
         var rem = width /375 * 10;
        docEl.style.fontSize = rem + "px";
        remCalc.rem = rem;
        //误差、兼容性处理
        var actualSize = parseFloat(window.getComputedStyle(document.documentElement)["font-size"]);
        if (actualSize !== rem && actualSize > 0 && Math.abs(actualSize - rem) > 1) {
          var remScaled = rem * rem / actualSize;
          docEl.style.fontSize = remScaled + "px"
        }
      }

      //函数节流，避免频繁更新
      function dbcRefresh() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 100)
      }

      //窗口更新动态改变font-size
      win.addEventListener("resize", function() { dbcRefresh() }, false);

      //页面显示的时候再计算一次   难道切换窗口之后再切换来窗口大小会变?....
      win.addEventListener("pageshow", function(e) {
        if (e.persisted) { dbcRefresh() }
      }, false);
      refreshRem();
      remCalc.refreshRem = refreshRem;
      remCalc.rem2px = function(d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === "string" && d.match(/rem$/)) { val += "px" }
        return val
      };
      remCalc.px2rem = function(d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === "string" && d.match(/px$/)) { val += "rem" }
        return val
      };
      win.remCalc = remCalc
    })(window);
  },
  router,
  template: '<App/>',
  components: { App }
})

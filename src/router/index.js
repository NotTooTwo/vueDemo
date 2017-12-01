import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexView from '@/components/view/indexView'
import mainView from '@/components/view/mainView'
import myView from '@/components/view/myView'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexView',
      component: indexView
    },
    {
      path: '/mainView',
      name: 'mainView',
      component: mainView
    },
    {
      path: '/myView',
      name: 'myView',
      component: myView
    },
  ]
})

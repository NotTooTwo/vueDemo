import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexView from '@/components/view/indexView'
import mainView from '@/components/view/mainView'
import myView from '@/components/view/myView'

import newDetail from '@/components/view/news/newDetail'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'indexView',
      component: indexView,
      meta:{
        navShow:true,
        keepAlive: true
      },
      children:[
      ]
    },
    {
      path: '/mainView',
      name: 'mainView',
      meta:{
        navShow:true,
        keepAlive: true
      },
      component: mainView,
    },
    {
      path: '/myView/:myId',
      name: 'myView',
      meta:{
        navShow:true,
        keepAlive: true
      },
      component: myView
    },
    {
      path:'/newDetail/:id',
      name: 'newDetail',
      component:newDetail
    }
  ],

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})

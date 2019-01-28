import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/MainMenu'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/main',
      name: 'MainMenu',
      component: Main
    }
    ,
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
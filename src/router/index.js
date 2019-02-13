import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Signin from '@/components/Signin'
import Main from '@/components/MainMenu'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
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
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
    
  ]
})
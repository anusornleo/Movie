import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Signin from '@/components/Signin'
import Main from '@/components/MainMenu'
import Detail from '@/components/Detail'
import Home from '@/components/home'
import payment from '@/components/payment'
import confirm from '@/components/confirm'

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
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: confirm
    }
  ]
})

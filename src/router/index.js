import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Signin from '@/components/Signin'
import Main from '@/components/MainMenu'
import Detail from '@/components/Detail'
import Home from '@/components/home'
import Select from '@/components/Select'
import Seat from '@/components/Seat'
import Slideshow from '@/components/slideshow'

// add ************************************************
import FieldList from '@/components/FieldList'
import LayoutList from '@/components/LayoutList'
import TodoList from '@/components/TodoList'

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
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/seat',
      name: 'Seat',
      component: Seat
    },
    {
      path: '/slideshow',
      name: 'Slideshow',
      component: Slideshow
    },

    // add ****************************************************
    {
      path: '/FieldList',
      name: 'FieldList',
      component: FieldList
    },
    {
      path: '/LayoutList',
      name: 'LayoutList',
      component: LayoutList
    },
    {
      path: '/TodoList',
      name: 'TodoList',
      component: TodoList
    },
    
  ]
})
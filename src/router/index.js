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
import Payment from '@/components/Payment'
import Confirm from '@/components/Confirm'
import Print from '@/components/Print'

// add ************************************************
import FieldList from '@/components/FieldList'
import LayoutList from '@/components/LayoutList'
import TodoList from '@/components/TodoList'
//add *************************************************
import HelloWorld from '@/components/HelloWorld'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      props: true
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
      component: Signin,
      props: true
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      props: true

    },
    {
      path: '/select',
      name: 'Select',
      component: Select,
      props: true
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
    {
      path: '/payment',
      name: 'Payment',
      component: Payment,
      props: true
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm,
      props: true
    },
    {
      path: '/print',
      name: 'Print',
      component: Print,
      props: true
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

    //add *****************************
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      props: true
    }

  ]
})
import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/index/index'
import homePage from '@/components/index/homePage'
import Login from '@/components/login'
import Header from '@/components/header/header'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage
    }
  ]
})

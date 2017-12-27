import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/index/index'
import Login from '@/components/login'
import Header from '@/components/header/header'
import homePage from '@/components/pages/homePage'
import samplePage from '@/components/pages/samplePage'
import pickMovies from '@/components/pages/pickMovies'

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
    },
    {
      path: '/samplePage',
      name: 'samplePage',
      component: samplePage
    },
    {
      path: '/pickMovies',
      name: 'pickMovies',
      component: pickMovies
    }
  ]
})

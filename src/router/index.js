import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/index/index'
import Login from '@/components/login'
import Header from '@/components/header/header'
import homePage from '@/components/pages/homePage'
import samplePage from '@/components/pages/samplePage'
import pickMovies from '@/components/pages/pickMovies'
import rankingList from '@/components/pages/rankingList'
import classification from '@/components/pages/classification'
import movieDetail from '@/components/pages/movieDetail'
import actorDetail from '@/components/pages/actorDetail'
import profile from '@/components/pages/profile'
import review from '@/components/pages/review'

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
    },
    {
      path: '/rankingList',
      name: 'rankingList',
      component: rankingList
    },
    {
      path: '/classification',
      name: 'classification',
      component: classification
    },
    {
      path: '/review',
      name: 'review',
      component: review
    },
    {
      path: '/movieDetail/:id',
      name: 'movieDetail',
      component: movieDetail
    },
    {
      path: '/actorDetail/:id',
      name: 'actorDetail',
      component: actorDetail
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    }
  ]
})

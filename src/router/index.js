/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import Payment from '@/components/Payment'
import InputUserInfo from '@/components/InputUserInfo'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/user',
      name: 'User',
      component: InputUserInfo
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})

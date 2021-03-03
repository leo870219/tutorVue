/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import InputUserInfo from '@/components/InputUserInfo'

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
      path: '/user',
      name: 'User',
      component: InputUserInfo
    }
  ]
})

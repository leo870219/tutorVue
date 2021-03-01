import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Profile from '@/components/Profile'

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
      component: () => import('../components/User.vue'),
      children: [
        {
          path: 'birthday',
          name: 'Birthday',
          component: () => import('../components/Birthday.vue')
        },
        {
          path: 'gender',
          name: 'Gender',
          component: () => import('../components/Gender.vue')
        },
        {
          path: 'school',
          name: 'School',
          component: () => import('../components/School.vue')
        },
        {
          path: 'goodAt',
          name: 'GoodAt',
          component: () => import('../components/GoodAt.vue')
        },
        {
          path: 'weakAt',
          name: 'WeakAt',
          component: () => import('../components/WeakAt.vue')
        },
        {
          path: 'nickName',
          name: 'NickName',
          component: () => import('../components/NickName.vue')
        }
      ]
    }
  ]
})

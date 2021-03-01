// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueGapi from 'vue-gapi'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const store = new Vuex.Store({
  state: {
    name: '',
    email: '',
    authId: '',
    nickName: '',
    gender: '',
    birthday: '',
    school: '',
    goodAt: '',
    weakAt: ''
  },
  mutations: {
    getName (state, username) {
      state.name = username
    },
    getEmail (state, useremail) {
      state.email = useremail
    },
    getAuthId (state, userauthId) {
      state.authId = userauthId
    },
    getNickName (state, usernickname) {
      state.nickName = usernickname
    },
    getGender (state, usergender) {
      state.gender = usergender
    },
    getBirthday (state, userbirthday) {
      state.birthday = userbirthday
    },
    getSchool (state, userschool) {
      state.school = userschool
    },
    getGoodAt (state, usergoodAt) {
      state.goodAt = usergoodAt
    },
    getWeakAt (state, userweakAt) {
      state.weakAt = userweakAt
    }
  }
})

Vue.use(VueGapi, {
  clientId:
    '238605304260-m6fi213b862ujp8n06ijj3kft1olu9sd.apps.googleusercontent.com',
  discoveryDocs: ['https://people.googleapis.com/$discovery/rest'],
  scope: 'profile'
})
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

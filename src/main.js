// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueGapi from 'vue-gapi'
Vue.config.productionTip = false
Vue.use(VueGapi, {
  clientId:
    '238605304260-m6fi213b862ujp8n06ijj3kft1olu9sd.apps.googleusercontent.com',
  discoveryDocs: ['https://people.googleapis.com/$discovery/rest'],
  scope: 'profile'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

<template>
  <div id="login">
    <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure"
      >Login</GoogleLogin
    >
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login'
import axios from '../commons/axios'
export default {
  components: {
    GoogleLogin
  },
  data () {
    return {
      userName: '',
      userEmail: '',
      userAuthId: '',
      userAuthFrom: 'google',
      params: {
        client_id:
          '238605304260-m6fi213b862ujp8n06ijj3kft1olu9sd.apps.googleusercontent.com'
      }
    }
  },
  methods: {
    onSuccess (googleUser) {
      var profile = googleUser.getBasicProfile()
      var userAuthId = googleUser.getAuthResponse().id_token
      this.userName = profile.getName()
      this.userEmail = profile.getEmail()
      this.userAuthId = userAuthId
      axios({
        method: 'post',
        url: '/login',
        data: {
          userName: this.userName,
          userEmail: this.userEmail,
          userAuthId: this.userAuthId,
          userAuthFrom: this.userAuthFrom
        }
      })
        .then((response) => {
          console.log(response.data)
          if (!response.data.first) {
            this.$router.push({path: 'home'})
          } else {
            this.$router.push({path: 'user'})
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    onFailure () {
      alert('登入失敗')
    }
  }
}
</script>

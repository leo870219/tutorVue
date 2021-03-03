<template>
  <div id="login">
    <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure"
      >Login</GoogleLogin
    >
    <button type="button" @click="test">測試發請求</button>
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
    },
    onFailure () {
      alert('登入失敗')
    },
    test () {
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
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

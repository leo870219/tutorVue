<template>
  <div id="login">
    <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure"
      >Login</GoogleLogin
    >
  </div>
</template>

<script>
/* eslint-disable */
import GoogleLogin from 'vue-google-login'
import Cookies from 'js-cookie'
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
    async onSuccess (googleUser) {
      var profile = googleUser.getBasicProfile()
      var userAuthId = profile.getId()
      this.userName = profile.getName()
      this.userEmail = profile.getEmail()
      this.userAuthId = userAuthId
      this.$store.state.userInfo.email = this.userEmail
      this.$store.state.userInfo.authId = userAuthId
      let loginResponse = null

      try {
        loginResponse = await axios({
          method: 'post',
          url: '/login',
          data: {
            userName: this.userName,
            userEmail: this.userEmail,
            userAuthId: this.userAuthId,
            userAuthFrom: this.userAuthFrom
          }
        });
      } catch(err) {
        console.log(err);
        return
      }

      if(loginResponse.data.message == "OK") {
        let userInfoResponse = null;
        Cookies.set('token', loginResponse.data.token)

        try {
          userInfoResponse = await axios({
            method: 'get',
            url: '/user/' + this.$store.state.userInfo.authId + '/' + this.$store.state.userInfo.email,
            headers : {
              "Authorization": Cookies.get("token")
            },
          })
        } catch(err) {
          console.log(err)
          return
        }
        this.$store.state.userInfo = userInfoResponse.data
      }
    },
    onFailure () {
      alert('登入失敗')
    }
  }
}
</script>

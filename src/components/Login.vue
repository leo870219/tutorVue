<template>
  <div id="login">
    <div class="login-container">
      <div class="login-header">
        <div class="about-us">
          <button
            :class="[
              this.aboutUsPage ? 'login-header-clicked' : 'login-header-default',
            ]"
            @click="openAboutUsPage"
          >
            <p>關於我們</p>
          </button>
        </div>
        <div class="login">
          <button
            :class="[
              this.loginPage
                ? 'login-header-clicked'
                : 'login-header-default',
            ]"
            @click="openLoginPage"
          >
            <p>登入</p>
          </button>
        </div>
      </div>
      <div v-if="loginPage" class="login-main">
        <img class="logo" src="../../static/logo_white.jpg" alt="logo" />
        <p class="name">M R .</p>
        <div class="login-button">
          <div class="login-visitor">
            <input type="button" @click="visit" />
          </div>
          <div class="login-google">
            <input type="button" @click="login" />
          </div>

        </div>
      </div>
      <div v-else class="about-us-main"></div>
    </div>
  </div>
</template>

<script>
import axios from '../commons/axios'
export default {
  data () {
    return {
      userName: '',
      userEmail: '',
      userAuthId: '',
      userAuthFrom: 'google',
      aboutUsPage: false,
      loginPage: true
    }
  },
  methods: {
    openAboutUsPage () {
      this.aboutUsPage = true
      this.loginPage = false
    },
    openLoginPage () {
      this.aboutUsPage = false
      this.loginPage = true
    },
    visit () {
      this.$router.push({ path: 'home' })
    },
    login () {
      this.$gapi.getGapiClient().then((gapi) => {
        let auth2 = gapi.auth2.getAuthInstance()
        auth2.signIn().then((GoogleUser) => {
          console.log('Google登入成功')
          var profile = GoogleUser.getBasicProfile()
          var userAuthId = GoogleUser.getAuthResponse().id_token
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
                this.$router.push({ path: 'home' })
              } else {
                this.$router.push({ path: 'user' })
              }
            })
            .catch((error) => {
              console.log(error)
              alert('登入失敗')
            })
        })
      })
    }
  }
}
</script>
<style scoped>
#login {
  background-image: url("../../static/background.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}
.login-container {
  width: 400px;
  height: 400px;
  border-radius: 1em;
  background-color: white;
}
.login-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.login-header div {
  text-align: center;
}
.login-header p {
  margin: 1em auto;
  letter-spacing: 1em;
}
.login-header-clicked {
  background: linear-gradient(to right, rgb(179, 212, 111), rgb(230, 249, 98));
}
.login-header-default {
  background: white;
}
.about-us button {
  border: 0;
  width: 100%;
  border-radius: 1em 0 1em 0;
}
.login button {
  border: 0;
  width: 100%;
  border-radius: 0 1em 0 1em;
}
.login-main {
  padding: 1.5em 0;
}
.login-button div {
  width: 80%;
  margin: 1em auto;
}
.login-visitor input {
  background-image: url("../../static/visitor.jpg");
}
.login-google input {
  background-image: url("../../static/google.jpg");
}
.login-button input {
  display: block;
  margin: 0 auto;
  width: 80%;
  height: 3em;
  background-size: cover;
  border-radius: 1em;
  border: 0px;
}
.logo {
  max-width: 20%;
  border-radius: 1em;
  display: block;
  margin: 1em auto 0 auto;
}
.name {
  text-align: center;
  margin: 0 auto 1em auto;
}
</style>

<template>
  <div id="app">
    <button type="button" id="btnSignIn" @click="login">Google登入</button>
    <button type="button" id="btnDisconnect" @click="disconnect">
      斷連Google App
    </button>
    <hr />
    <button type="button" @click="test">測試發請求</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      'userName': '',
      'userNickName': '',
      'userGender': '',
      'userEmail': '',
      'userAuthId': '',
      'userAuthFrom': ''
    }
  },
  methods: {
    test () {
      axios({
        method: 'post',
        url: 'http://localhost:5000/login/',
        data: {
          'userName': this.userName,
          'userNickName': this.userNickName,
          'userGender': this.userGender,
          'userEmail': this.userEmail,
          'userAuthId': this.userAuthId,
          'userAuthFrom': this.userAuthFrom
        }
      })
        .then((response) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    login () {
      this.$gapi.getGapiClient().then((gapi) => {
        let auth2 = gapi.auth2.getAuthInstance() // 取得GoogleAuth物件
        auth2.signIn().then(
          (GoogleUser) => {
            console.log('Google登入成功')
            let AuthResponse = GoogleUser.getAuthResponse(true) // true會回傳包含access token ，false則不會
            this.userAuthId = AuthResponse.id_token // 取得id_token
            gapi.client.people.people
              .get({
                resourceName: 'people/me',
                personFields:
                  'names,phoneNumbers,emailAddresses,addresses,genders,birthdays'
              })
              .then(
                (res) => {
                  console.log(
                    `${res.result.birthdays[0].date.month}/${res.result.birthdays[0].date.day}`
                  )
                  this.userName = res.result.names[0].displayName
                  this.userEmail = res.result.emailAddresses[0].value
                },
                (err) => {
                  console.log(err)
                }
              )
          },
          (err) => {
            console.log(err)
            alert('登入失敗，請重新登入')
          }
        )
      })
    },
    disconnect () {
      let auth2 = this.$gapi.auth2.getAuthInstance() // 取得GoogleAuth物件
      auth2.disconnect().then(
        function () {
          console.log('已斷連')
          document.getElementById('content').innerHTML = ''
        },
        (err) => {
          console.log(err)
        }
      )
    }
  }
}
</script>

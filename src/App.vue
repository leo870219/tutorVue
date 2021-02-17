<template>
  <div id="app">
    <button type="button" id="btnSignIn" @click="login">Google登入</button>
    <button type="button" id="btnDisconnect" @click="disconnect">
      斷連Google App
    </button>
    <hr />
    <div id="content"></div>
  </div>
</template>

<script src="https://apis.google.com/js/api.js"></script>
<script>
export default {
  methods: {
    login() {
      this.$gapi.getGapiClient().then((gapi) => {
        let auth2 = gapi.auth2.getAuthInstance(); // 取得GoogleAuth物件
        auth2.signIn().then(function (GoogleUser) {
          console.log("Google登入成功");
          let AuthResponse = GoogleUser.getAuthResponse(true); // true會回傳包含access token ，false則不會
          let id_token = AuthResponse.id_token; // 取得id_token
          gapi.client.people.people
            .get({
              resourceName: "people/me",
              personFields:
                "names,phoneNumbers,emailAddresses,addresses,residences,genders,birthdays",
            })
            .then(function (res) {
              let str = JSON.stringify(res.result); // 將物件列化成string，方便顯示結果在畫面上
              document.getElementById("content").innerHTML = str;
            });
        });
      });
    },
    disconnect() {
      let auth2 = gapi.auth2.getAuthInstance(); // 取得GoogleAuth物件
      auth2.disconnect().then(function () {
        console.log("已斷連");
        document.getElementById("content").innerHTML = "";
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

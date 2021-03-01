<template>
  <div id="profile">
      <h1>個人頁面</h1>
      <table id="personalinfo" align="center" cellpadding="5px" >
        <tr>
          <td class="td1">姓名</td>
          <td><input type="text" id="nickname" v-model="usernickname" /><br /></td>
        </tr>
        <tr>
          <td class="td1">性別</td>
          <td><input type="text" v-model="usergender" /><br /></td>
        </tr>
        <tr>
          <td class="td1">生日</td>
          <td><input type="text" v-model="userbirthday" /><br /></td>
        </tr>
        <tr>
          <td class="td1">學校</td>
          <td><input type="text" v-model="userschool" /><br /></td>
        </tr>
        <tr>
          <td class="td1">擅長的科目</td>
          <td><input type="text" v-model="usergoodat" /><br /></td>
        </tr>
        <tr>
          <td class="td1">稍弱的科目</td>
          <td><input type="text" v-model="userweakat" /><br /></td>
        </tr>
      </table>
      <button class="button" @click="update()">修改</button>
      <button class="button" @click="out()">回上一頁</button>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data: function () {
    return {
      usernickname: '',
      usergender: '',
      userbirthday: '',
      userschool: '',
      usergoodat: '',
      userweakat: ''
    }
  },
  methods: {
    out () {
      this.$router.push({
        path: '/'
      })
    },
    update () {
      return {

      }
    }
  }
}
</script>

<style scoped>
#profile {
  text-align: center;
}
#personalinfo {
  background-color: rgba(241, 223, 115, 0.829);
  border: 2px sandybrown solid;
}
.td1 {
  text-align: left;
  color: brown;
}
.button {
  margin-top: 4em;
}
input[type="text"] {
  padding: 5px 15px;
  border: 2px sandybrown solid;
  cursor: pointer;
  /* -webkit-border-radius: 5px; */
  border-radius: 5px;
  color: brown;
}
</style>

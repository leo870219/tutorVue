<template>
  <div id="userweakat">
    <div id="block">
      <h1>請輸入不擅長的事:</h1>
      <input type="text" v-model="userweakat" />
      <br />
      <button @click="next()">提交資料開始配對囉!</button>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
// 引入gsap製作動畫
export default {
  name: 'WeakAt',
  data () {
    return {
      userbirthday: this.$route.query.userbirthday,
      usernickname: this.$route.query.usernickname,
      usergender: this.$route.query.usergender,
      userschool: this.$route.query.userschool,
      usergoodat: this.$route.query.usergoodat,
      userweakat: ''
    }
  },
  methods: {
    out () {
      gsap.to('#block', { duration: 2, x: 1200, opacity: 0 })
    },
    next () {
      gsap.to('#block', { duration: 2, x: 1200, opacity: 0 })
      this.$router.push({
        path: 'WeakAt',
        query: {
          userbirthday: this.userbirthday,
          usernickname: this.usernickname,
          usergender: this.usergender,
          userschool: this.userschool,
          usergoodat: this.usergoodat,
          userweakat: ''
        }
      })
    }
  },
  mounted () {
    gsap.to('#block', { x: 600, duration: 2, opacity: 1 })
  }
}
</script>

<style scoped>
#block {
  border-radius: 20%;
  background-color: rgba(241, 223, 115, 0.829);
  height: 20em;
  width: 20em;
  opacity: 0;
}
.button {
  margin-top: 7em;
}
</style>

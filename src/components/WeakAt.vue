<template>
  <div id="weakat">
    <div id="block">
      <h1>請輸入不擅長的事:</h1>
      <input type="text" v-model="userweakat" />
      <br />
      <button @click="submit()">提交資料開始配對囉!</button>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
// 引入gsap製作動畫
import axios from '../commons/axios'
export default {
  name: 'WeakAt',
  data () {
    return {
      userweakat: ''
    }
  },
  methods: {
    out () {
      gsap.to('#block', { duration: 2, x: 1200, opacity: 0 })
    },
    submit () {
      gsap.to('#block', { duration: 2, x: 1200, opacity: 0 })
      this.$store.commit('getWeakAt', this.userweakat)
      axios({
        method: 'post',
        url: '/user/info/update',
        data: {
          name: this.$store.state.name,
          email: this.$store.state.email,
          authId: this.$store.state.authId,
          nickName: this.$store.state.nickName,
          gender: this.$store.state.gender,
          birthday: this.$store.state.birthday,
          school: this.$store.state.school,
          goodAt: this.$store.state.goodAt,
          weakAt: this.$store.state.weakAt
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

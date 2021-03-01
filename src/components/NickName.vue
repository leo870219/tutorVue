<template>
  <div id="nickname">
    <div id="block">
      <h1>請輸入綽號:</h1>
      <input type="text" v-model="usernickname" /><br />
      <button class="button" @click="out()">增加更多機會</button>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
// 引入gsap製作動畫
export default {
  name: 'NickName',
  data: function () {
    return {
      usernickname: ''
    }
  },
  methods: {
    out () {
      gsap.to('#block', { duration: 2, x: 1200, opacity: 0 })
      this.$store.commit('getNickName', this.usernickname)
      console.log(this.$store.state.nickName)
      this.$router.push({
        path: 'gender'
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

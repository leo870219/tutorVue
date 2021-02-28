<template>
  <div id="goodat">
    <div id="block">
      <h1>請輸入興趣、專長:</h1>
      <input type="text" v-model="usergoodat" />
      <br />
      <button @click="next()">增加更多機會</button>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
// 引入gsap製作動畫
export default {
  name: 'GoodAt',
  data () {
    return {
      usergoodat: ''
    }
  },
  methods: {
    out () {
      gsap.to('#block', { duration: 2, x: 1200, opacity: 0 })
    },
    next () {
      gsap.to('#block', { duration: 2, x: 1200, opacity: 0 })
      this.$store.commit('getGoodAt', this.usergoodat)
      console.log(this.$store.state.goodAt)
      this.$router.push({
        path: 'WeakAt'
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

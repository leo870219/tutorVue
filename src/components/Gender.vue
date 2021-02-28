<template>
  <div id="gender">
    <div id="block">
      <h1></h1>
      <input type="radio" name="gender" value="1" v-model="usergender" />
      男性<br />
      <input type="radio" name="gender" value="0" v-model="usergender" />
      女性<br />
      <button @click="next()">增加更多機會</button><br />
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'Gender',
  data () {
    return {
      usergender: '1'
    }
  },

  mounted () {
    gsap.to('#block', { x: 600, duration: 2, opacity: 1 })
  },
  methods: {
    next () {
      gsap.to('#block', { duration: 2, x: 1200, opacity: 0 })
      this.$store.commit('getGender', this.usergender)
      console.log(this.$store.state.gender)
      this.$router.push({
        path: 'birthday'
      })
    }
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

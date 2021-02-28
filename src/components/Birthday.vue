<template>
  <div id="birthday">
    <div id="block">
      <h1>您的生日是:</h1>
      <select v-model="month" @change="get()">
        <option v-for="option in 12" v-bind:key="option" v-bind:value="option">
          {{ option }}
        </option>
      </select>
      <select v-model="day" @change="get()">
        <option v-for="option in 30" v-bind:key="option" v-bind:value="option">
          {{ option }}
        </option>
      </select>
      <br />
      <button @click="next()">增加更多機會</button>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'Birthday',
  data () {
    return {
      month: 1,
      day: 1,
      userbirthday: ''
    }
  },
  methods: {
    get () {
      this.userbirthday = this.month + '/' + this.day
    },
    next () {
      gsap.to('#block', { duration: 2, x: 1200, opacity: 0 })
      this.$store.commit('getBirthday', this.userbirthday)
      console.log(this.$store.state.birthday)
      this.$router.push({
        path: 'school'
      })
    }
  },
  mounted () {
    gsap.to('#block', { x: 600, duration: 2, opacity: 1 })
    this.userbirthday = this.month + '/' + this.day
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

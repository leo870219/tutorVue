<template>
    <div class="container">
        <transition  name="slide-fade">
            <div v-if="inputUserNickname">
                <div id="block">
                    <h1>請輸入綽號:</h1>
                    <input type="text" v-model="userNickname" /><br />
                    <button class="button" @click="goToGender()">增加更多機會</button>
                </div>
            </div>

            <div v-if="inputGender">
                <div id="block">
                    <h1></h1>
                    <input type="radio" name="gender" value="1" v-model="userGender" />
                    男性<br />
                    <input type="radio" name="gender" value="0" v-model="userGender" />
                    女性<br />
                    <button @click="goToBirthday()">增加更多機會</button><br />
                </div>
            </div>

            <div v-if="inputBirthday">
                <div id="block">
                    <h1>您的生日是:</h1>
                    <date-picker v-model="userBirthday" valueType="format"></date-picker>
                    <br />
                    <button @click="goToSchool()">增加更多機會</button>
                </div>
            </div>

            <div v-if="inputSchool">
                <div id="block">
                    <h1>請輸入學校:</h1>
                    <input type="text" v-model="userSchool" />
                    <br/>
                    <button @click="goToGoodAt()">增加更多機會</button>
                </div>
            </div>

            <div v-if="inputGoodAt">
                <div id="block">
                    <h1>請輸入興趣、專長:</h1>
                    <input type="text" v-model="userGoodAt" />
                    <br />
                    <button @click="goToWeakAt()">增加更多機會</button>
                </div>
            </div>

            <div v-if="inputWeakAt">
                <div id="block">
                    <h1>請輸入不擅長的事:</h1>
                    <input type="text" v-model="userWeakAt" />
                    <br />
                    <button @click="submit()">提交資料開始配對囉!</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
/* eslint-disable */

// 實作 delay 函數
const delay = (interval) => {
    return new Promise((resolve) => {
        setTimeout(resolve, interval);
    });
};
export default {
  mounted: function() {
      console.log("here");
  },
  data: function () {
    return {
        inputUserNickname: false,
        inputGender: false,
        inputBirthday: false,
        inputSchool: false,
        inputGoodAt: false,
        inputWeakAt: false,
        userNickname: '',
        userGender: '',
        userBirthday: '',
        userSchool: '',
        userGoodAt: '',
        userWeakAt: ''
    }
  },
  mounted: function() {
      this.inputUserNickname = true;
  },
  methods: {
      async goToGender() {
          this.inputUserNickname = false;
          await delay(800)
          this.inputGender = true;
      },

      async goToBirthday() {
          this.inputGender = false;
          await delay(800)
          this.inputBirthday = true;
      },

      async goToSchool() {
          this.inputBirthday = false;
          await delay(800)
          this.inputSchool = true;
      },

      async goToGoodAt() {
          this.inputSchool = false;
          await delay(800)
          this.inputGoodAt = true;
      },

      async goToWeakAt() {
          this.inputGoodAt = false;
          await delay(800)
          this.inputWeakAt = true;
      },

      async submit() {
          console.log(this.userNickname);
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
  margin: 0 auto;
  float: none;
}
.button {
  margin-top: 7em;
}
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}
</style>
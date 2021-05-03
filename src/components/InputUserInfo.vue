<template>
  <div class="container-fluid">
    <transition name="slide-fade">
      <div v-if="inputUserNickname">
        <div id="block">
          <div class="title justify-content-center">
            <h6>輸入綽號</h6>
          </div>
          <div class="inputUserInfo-main">
            <div class="justify-content-center">
              <input type="text" v-model="userNickname" />
            </div>
            <div class="justify-content-center">
              <button class="button" @click="goToGender()">增加更多機會</button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="inputGender">
        <div id="block">
          <div class="title justify-content-center">
            <h6>性別</h6>
          </div>
          <div class="inputUserInfo-main">
            <input type="radio" name="gender" value="1" v-model="userGender" />
            男性<br />
            <input type="radio" name="gender" value="0" v-model="userGender" />
            女性<br />
            <button class="button" @click="goToBirthday()">增加更多機會</button
            ><br />
          </div>
        </div>
      </div>

      <div v-if="inputBirthday">
        <div id="block">
          <div class="title justify-content-center">
            <h6>選擇生日</h6>
          </div>
          <div class="inputUserInfo-main">
            <date-picker
              v-model="userBirthday"
              valueType="format"
            ></date-picker>
            <br />
            <button class="button" @click="goToSchool()">增加更多機會</button>
          </div>
        </div>
      </div>

      <div v-if="inputSchool">
        <div id="block">
          <div class="title justify-content-center">
            <h6>輸入學校</h6>
          </div>
          <div class="inputUserInfo-main">
            <input type="text" v-model="userSchool" />
            <br />
            <button class="button" @click="goToGoodAt()">增加更多機會</button>
          </div>
        </div>
      </div>

      <div v-if="inputGoodAt">
        <div id="block">
          <div class="title justify-content-center">
            <h6>輸入興趣專長</h6>
          </div>
          <div class="inputUserInfo-main">
            <input type="text" v-model="userGoodAt" />
            <br />
            <button class="button" @click="goToWeakAt()">增加更多機會</button>
          </div>
        </div>
      </div>

      <div v-if="inputWeakAt">
        <div id="block">
          <div class="title justify-content-center">
            <h6>輸入不擅長的事</h6>
          </div>
          <div class="inputUserInfo-main">
            <input type="text" v-model="userWeakAt" />
            <br />
            <button class="button" @click="submit()">
              提交資料開始配對囉!
            </button>
          </div>
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
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import axios from "../commons/axios";
export default {
  components: {
    DatePicker,
  },
  mounted: function () {
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
      userNickname: "",
      userGender: "",
      userBirthday: "",
      userSchool: "",
      userGoodAt: "",
      userWeakAt: "",
    };
  },
  mounted: function () {
    this.inputUserNickname = true;
  },
  methods: {
    async goToGender() {
      this.inputUserNickname = false;
      await delay(800);
      this.inputGender = true;
    },

    async goToBirthday() {
      this.inputGender = false;
      await delay(800);
      this.inputBirthday = true;
    },

    async goToSchool() {
      this.inputBirthday = false;
      await delay(800);
      this.inputSchool = true;
    },

    async goToGoodAt() {
      this.inputSchool = false;
      await delay(800);
      this.inputGoodAt = true;
    },

    async goToWeakAt() {
      this.inputGoodAt = false;
      await delay(800);
      this.inputWeakAt = true;
    },

    async submit() {
      axios({
        method: "post",
        url: "/user/info/update",
        data: {
          email: this.$store.state.email,
          authId: this.$store.state.authId,
          nickName: this.userNickname,
          gender: this.userGender,
          birthday: this.userBirthday,
          school: this.userSchool,
          goodAt: this.userGoodAt,
          weakAt: this.userWeakAt,
        },
      })
        .then((respones) => {
          console.log(respones.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.container-fluid {
  background-image: url("../../static/background.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
}
#block {
  text-align: center;
  width: 20em;
  height: 20em;
  border-radius: 1em;
  background-color: white;
}
.title {
  background: linear-gradient(to right, rgb(179, 212, 111), rgb(230, 249, 98));
  padding: 1em 0;
  border-radius: 1em 1em 0 0;
}
.title h6 {
  letter-spacing: 1em;
}
.inputUserInfo-main {
  margin-top: 5em;
}
.button {
  margin-top: 3em;
  background: linear-gradient(to right, rgb(179, 212, 111), rgb(230, 249, 98));
  border: 0px;
  border-radius: 1em;
  letter-spacing: 0.5em;
}
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}
</style>
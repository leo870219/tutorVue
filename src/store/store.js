/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        userInfo: {
            name: '',
            email: '',
            authId: '',
            nickName: '',
            gender: '',
            birthday: '',
            school: '',
            goodAt: '',
            weakAt: ''
        }
    },
    // todo: mutations、actions 之後資料太複雜再加上
    // mutations: {
    //   getName (state, username) {
    //     state.name = username
    //   },
    //   getEmail (state, useremail) {
    //     state.email = useremail
    //   },
    //   getAuthId (state, userauthId) {
    //     state.authId = userauthId
    //   },
    //   getNickName (state, usernickname) {
    //     state.nickName = usernickname
    //   },
    //   getGender (state, usergender) {
    //     state.gender = usergender
    //   },
    //   getBirthday (state, userbirthday) {
    //     state.birthday = userbirthday
    //   },
    //   getSchool (state, userschool) {
    //     state.school = userschool
    //   },
    //   getGoodAt (state, usergoodAt) {
    //     state.goodAt = usergoodAt
    //   },
    //   getWeakAt (state, userweakAt) {
    //     state.weakAt = userweakAt
    //   }
    // }
})
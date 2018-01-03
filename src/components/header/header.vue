<template>
  <div class="">
    <fish-menu mode="horizontal" defaultActive="0">
      <fish-option index="0" content="首页" @click="homePage"></fish-option>
      <fish-option index="1" content="选电影" @click="pickMovies"></fish-option>
      <fish-option index="2" content="排行榜" @click="rankingList"></fish-option>
      <fish-option index="3" content="分类" @click="classification"></fish-option>
      <fish-option index="4" content="影评" @click="review"></fish-option>
      <fish-option index="5" content="登录" @click="login" v-show="!$store.state.token"></fish-option>
      <fish-submenu index="6" v-show="$store.state.token">
        <template slot="title">{{$store.state.userName}}</template>
        <fish-option index="6-0" content="个人主页" @click="profile"></fish-option>
        <fish-option index="6-1" content="我的订单"></fish-option>
        <fish-option index="6-2" content="我的钱包"></fish-option>
        <fish-submenu index="6-3">
          <template slot="title">账号管理</template>
          <fish-option index="6-3-0" content="Jack"></fish-option>
          <fish-option index="6-3-1" content="Lucy"></fish-option>
          <fish-option index="6-3-2" content="Active"></fish-option>
        </fish-submenu>
        <fish-option index="6-4" content="注销" @click="logout"></fish-option>
      </fish-submenu>
    </fish-menu>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
    login: function () {
      this.$router.push('/login')
    },
    homePage: function () {
      this.$router.push('/homePage')
      console.log(this.userName)
      console.log(sessionStorage.getItem('token'))
    },
    pickMovies: function () {
      this.$router.push('/pickMovies')
    },
    rankingList: function () {
      this.$router.push('/rankingList')
    },
    classification: function () {
      this.$router.push('/classification')
    },
    review: function () {
      this.$router.push('/review')
    },
    profile: function () {
      this.$router.push('/profile')
    },
    logout: function () {
      axios.post('http://localhost:8888/logout', qs.stringify({userName: sessionStorage.getItem('userName')}), {
        headers: {
          'Authorization': sessionStorage.getItem('userName') + '_' + sessionStorage.getItem('token')
        }
      }).then(response => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('userName')
        this.$store.commit('logout')
        this.$message({
          message: '成功注销',
          type: 'success'
        })
      }, response => {
        this.$message({
          message: sessionStorage.getItem('userName') + ';' + sessionStorage.getItem('token'),
          type: 'error'
        })
      })
    }
  }
}
</script>


<style>
.global-nav {
  height: 28px;
  color: #d5d5d5;
  background-color: #545652;
  min-width: 950px;
}
</style>

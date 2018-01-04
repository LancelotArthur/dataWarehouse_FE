<template>
  <div class="">
    <fish-menu mode="horizontal" defaultActive="0" size="large">
      <fish-option index="0" content="首页" @click="homePage"></fish-option>
      <fish-option index="1" content="选电影" @click="pickMovies"></fish-option>
      <fish-option index="2" content="排行榜" @click="rankingList"></fish-option>
      <fish-option index="3" content="分类" @click="classification"></fish-option>
      <fish-option index="4" content="影评" @click="review"></fish-option>
      <fish-option index="5" content="登录" @click="login" v-show="!$store.state.token"></fish-option>
      <fish-submenu index="6" v-show="$store.state.token">
        <template slot="title">{{$store.state.userInfo.userName}}</template>
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
    <div style="width: 80%;margin: 0 auto">
      <el-col id="searching" :span="10" style="text-align: center;margin-left: 20%">
        <div style="margin-top: 15px;">
          <el-input placeholder="搜索电影、影人" clearable v-model="input" class="input-with-select" @focus="whenFocus">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="search(input)"></el-button>
          </el-input>
        </div>
      </el-col>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'Header',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    login: function () {
      this.$router.push('/login')
    },
    homePage: function () {
      this.$router.push('/homePage')
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
        this.$router.push('/login')
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
    },
    search: function (str) {
      this.$router.push('/searchResult/' + str)
    },
    whenFocus: function () {
      this.$router.push('/homePage')
    }
  }
}
</script>


<style>
.global-nav {
  height: 28px;
  color: #4b4848;
  background-color: #545652;
  min-width: 950px;
}
.el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>

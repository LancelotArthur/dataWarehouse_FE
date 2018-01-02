<template>
  <div style="margin: 60px">
    <div class="login-wrap" v-show="showLogin">
      <h3>登录</h3>
      <div>
        <el-input class="inputBox"
          placeholder="请输入用户名"
          v-model="info.userName"
          clearable="true">
        </el-input>
      </div>
      <div>
        <el-input class="inputBox"
          placeholder="请输入密码"
          v-model="info.userPassword"
          clearable="true">
        </el-input>
      </div>
      <el-button type="primary" @click="login">登录</el-button><br>
      <el-button type="text" @click="ToRegister">还没有账号？马上注册</el-button>
    </div>

    <div class="register-wrap" v-show="showRegister">
      <h3>注册</h3>
      <div>
        <el-input class="inputBox"
          placeholder="请输入用户名"
          v-model="newUsername"
          clearable>
        </el-input>
      </div>
      <div>
        <el-input class="inputBox"
          placeholder="请输入密码"
          v-model="newPassword"
          clearable>
        </el-input>
      </div>
      <el-button type="primary" @click="register">注册</el-button><br>
      <el-button type="text" @click="ToLogin">已有账号？马上登录</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  data () {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: '',
      newUsername: '',
      newPassword: '',
      info: {
        userName: '',
        userPassword: ''
      }
    }
  },
  methods: {
    login: function () {
      axios.post('http://localhost:8888/login', qs.stringify(this.info), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(response => {
        if (response.data.status === '200') {
          // sessionStorage.setItem('token', response.data.result.token)
          this.$confirm('是否要保存密码', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info'
          }).then(() => {
            this.$router.push('/homePage')
            // localStorage.setItem('userName', this.info.userName)
            // localStorage.setItem('userPassword', this.info.userPassword)
            this.$message({
              type: 'success',
              message: '保存成功!'
            })
          }).catch(() => {
            this.$router.push('/homePage')
            this.$message({
              type: 'success',
              message: '登录成功'
            })
          })
        } else if (response.data.status === '401') {
          this.$message({
            type: 'success',
            message: response.data.result
          })
        }
      }, response => {
        this.$message({
          message: '服务器错误',
          type: 'error'
        })
      })
    },
    register: function () { },
    ToRegister: function () {
      this.showLogin = false
      this.showRegister = true
    },
    ToLogin: function () {
      this.showRegister = false
      this.showLogin = true
    }
  }
}
</script>

<style>
.inputBox {
  margin: 10px;
}
.login-wrap {
  text-align: center;
  width: 25%;
  margin: 0 auto;
}
.register-wrap {
  width: 25%;
  margin: 0 auto;
}
</style>

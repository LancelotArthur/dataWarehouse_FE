<template>
    <div style="margin: 60px">
        <div class="login-wrap" v-show="showLogin">
          <h3>登录</h3>
          <div>
            <el-input class="inputBox"
              placeholder="请输入用户名"
              v-model="username"
              clearable="true">
            </el-input>
          </div>
          <div>
            <el-input class="inputBox"
              placeholder="请输入密码"
              v-model="password"
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
export default {
  data () {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: '',
      username: '',
      password: '',
      newUsername: '',
      newPassword: ''
    }
  },
  methods: {
    login: function () {
      this.$router.push('/homePage')
    },
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
    width: 30%;
    margin: 0 auto;
  }
  .register-wrap {
    width: 30%;
    margin: 0 auto;
  }
</style>

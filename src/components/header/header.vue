<template>
  <div class="">
    <div id="header">
      <el-input style="margin-top: 20px" placeholder="输入查询语句" clearable v-model="input" class="input-with-select" @focus="whenFocus">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="关系型数据库" value="1"></el-option>
          <el-option label="混合仓库系统" value="2"></el-option>
        </el-select>
        <el-button slot="append" :icon="collect_state ? 'el-icon-star-on' : 'el-icon-star-off'" 
        @click="collect"></el-button>
        <el-button slot="append" icon="el-icon-time" @click="history"></el-button>
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
    </div>
    <!-- <div ref="searchBar" style="width: 1000px;height: 50px;margin: 0 auto">
      <el-col :span="20" style="text-align: center;margin: 0 auto">
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
    </div> -->
    <div style="height: 100px;width: 100%;position: fixed;z-index:99;background-color: rgb(210, 213, 219)"></div>
    <div style="height: 90px"></div>
    <history id="component" v-if="history_state" :msg="historys"></history>
    <display-card id="component" v-for="(item, index) in statements" :key="index" :statement="item" keep-alive></display-card>
  </div>
</template>

<script>
// import axios from 'axios'
// import qs from 'qs'
import displayCard from '@/components/displayCard'
import history from '@/components/history'

export default {
  data () {
    return {
      input: '',
      collect_state: false,
      history_state: false,
      historys: [],
      statements: []
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    collect: function () {
      this.collect_state = !this.collect_state
    },
    history: function () {
      this.history_state = !this.history_state
    },
    search: function () {
      if (this.input !== '') {
        this.historys.unshift({time: new Date(), statement: this.input})
        this.statements.unshift(this.input)
        console.log(this.statements)
      } else {
        this.$notify.info({
          offset: 50,
          duration: 1500,
          title: 'sorry',
          message: 'please enter something'
        })
      }
    },
    whenFocus: function () {
    },
    handleScroll: function () {
      // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // var searchBar = this.$refs.searchBar
      // if (this.offsetTop === 0) {
      //   this.offsetTop = searchBar.offsetTop
      // }
      // if (scrollTop > this.offsetTop) {
      //   searchBar.style.position = 'fixed'
      //   searchBar.style.top = 0
      // } else {
      //   searchBar.style.position = 'static'
      // }
    }
  },
  components: {
    displayCard,
    history
  }
}
</script>


<style>
body {
  background-color: rgb(210, 213, 219);
}
.global-nav {
  height: 28px;
  color: rgb(210, 213, 219);
  background-color: rgb(210, 213, 219);
  min-width: 950px;
}
.el-select .el-input {
    width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
#header {
  width: 80%;
  height: 80px;
  background-color: rgb(239, 239, 244);
  position: fixed;
  top: 0;left: 0;right: 0;
  margin: 0 auto;
  padding: 0 10px 0px 10px;
  z-index: 100;
}
#component {
  width: 80%;
  background-color: rgb(239, 239, 244);
  margin: 20px auto 20px auto;
  z-index: 0;
}
</style>

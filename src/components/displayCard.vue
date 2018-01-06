<template>
  <div v-show="show">
    <el-container>
      <el-header height="37px">
        <el-col :span="16" style="text-align: left">
          {{statement}}
        </el-col>
        <el-col :span="8" style="text-align: right">
          <el-button-group>
          <el-button size="medium" :icon="fold_state ? 'el-icon-arrow-down' : 'el-icon-arrow-up'" @click="fold"></el-button>
          <el-button size="medium" icon="el-icon-refresh" @click="refresh"></el-button>
          <el-button size="medium" icon="el-icon-close" @click="close"></el-button>
        </el-button-group>
        </el-col>
      </el-header>
      <el-container v-show="!fold_state">
        <el-aside width="63px">
          <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" collapse="false">
            <el-menu-item index="1">
              <i class="el-icon-share"></i>
              <span slot="title">Graph</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">Table</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-tickets"></i>
              <span slot="title">Text</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-edit"></i>
              <span slot="title">Code</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Graph from '@/components/graph'
import Table from '@/components/table'
import Text from '@/components/text'
import Code from '@/components/code'

export default {
  data () {
    return {
      show: true,
      fold_state: false
    }
  },
  props: ['statement'],
  methods: {
    fold: function () {
      this.fold_state = !this.fold_state
      console.log(this.fold_state)
      console.log(this.msg)
    },
    refresh: function () {
    },
    close: function () {
      this.show = false
    }
  },
  components: {
    Graph,
    Table,
    Text,
    Code
  }
}
</script>

<style>
.el-header {
  padding-left: 50px;
  padding-right: 0;
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 36px;
  font-size: 18px;
  border-right: 1px solid #e6e9ef;
  border-bottom: 1px solid #e6e9ef;
  border-left: 1px solid #e6e9ef;
}

.el-aside {
  background-color: #f8f9fb;
  color: #333;
  text-align: center;
  line-height: 200px;
  border-right: 1px solid #e6e9ef;
  border-bottom: 1px solid #e6e9ef;
  border-left: 1px solid #e6e9ef;
}

.el-main {
  background-color: #f9fbfd;
  color: #333;
  text-align: center;
  line-height: 160px;
  border-right: 1px solid #e6e9ef;
  border-bottom: 1px solid #e6e9ef;
}

.el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
  border-right: 1px solid #e6e9ef;
  border-bottom: 1px solid #e6e9ef;
}

.el-menu-item {
  background-color: #f8f9fb;
}
</style>

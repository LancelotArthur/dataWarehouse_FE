<template>
  <div>
    <el-container>
      <el-header height="37px">
        <el-col :span="16" style="text-align: left">
          {{msg.statements[msg.index]}}
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
          <el-menu default-active="myCode" class="el-menu-vertical-demo" @select="handleSelect" collapse="false">
            <el-menu-item index="myGraph">
              <i class="el-icon-share"></i>
              <span slot="title">Graph</span>
            </el-menu-item>
            <el-menu-item index="myTable">
              <i class="el-icon-menu"></i>
              <span slot="title">Table</span>
            </el-menu-item>
            <el-menu-item index="myText">
              <i class="el-icon-tickets"></i>
              <span slot="title">Text</span>
            </el-menu-item>
            <el-menu-item index="myCode">
              <i class="el-icon-edit"></i>
              <span slot="title">Code</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <component :is="type" :id="type" :msg="[msg.statements[msg.index], res, msg.select]"></component>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import myGraph from '@/components/graph'
import myTable from '@/components/table'
import myText from '@/components/text'
import myCode from '@/components/code'
import axios from 'axios'

export default {
  data () {
    return {
      show: true,
      fold_state: false,
      type: 'myCode',
      res: []
    }
  },
  props: ['msg'],
  mounted () {
    console.log(this.msg.select)
    if (this.msg.select === '1') {
      axios.get('http://localhost:8888/count?' + this.msg.statements[this.msg.index]).then(response => {
        this.res = response.data.result
        console.log(this.msg.statements[this.msg.index])
      }, response => {
        this.$message({
          message: response.status,
          type: 'error'
        })
      })
    } else if (this.msg.select === '2') {
      axios.get('http://localhost:8888/neo4j/count?' + this.msg.statements[this.msg.index]).then(response => {
        this.res = response.data.result
        console.log(this.msg.statements[this.msg.index])
      }, response => {
        this.$message({
          message: response.status,
          type: 'error'
        })
      })
    }
  },
  methods: {
    fold: function () {
      this.fold_state = !this.fold_state
    },
    refresh: function () {
    },
    close: function () {
      this.msg.statements.splice(this.msg.index, 1)
    },
    handleSelect: function (index) {
      this.type = index
    }
  },
  components: {
    myGraph,
    myTable,
    myText,
    myCode
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
  height: 450px;
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

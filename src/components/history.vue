<template>
  <div>
    <el-container>
      <el-header height="37px">
        <el-col :span="16">
          <span style="text-align: center;margin-top: 10px;margin-left:250px" class="el-icon-time"></span>
        </el-col>
        <el-col :span="8" style="text-align: right">
          <el-button-group>
          <el-button size="medium" :icon="fold_state ? 'el-icon-arrow-down' : 'el-icon-arrow-up'" @click="fold"></el-button>
          <el-button size="medium" icon="el-icon-refresh" @click="refresh"></el-button>
          <el-button size="medium" icon="el-icon-close" @click="close"></el-button>
        </el-button-group>
        </el-col>
      </el-header>
    </el-container>
    <el-table v-show="!fold_state"
      :data="history"
      border @row-click="handleClick"
      style="width: 90%;margin: 0 auto;background-color: #efeff4;text-align: left">
      <el-table-column prop="time" label="time" width="200">
      </el-table-column>
      <el-table-column prop="statement" label="statement">
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      history: [],
      fold_state: false
    }
  },
  props: ['msg'],
  mounted: function () {
    this.msg.forEach(item => {
      this.history.push({time: item.time.toString().slice(0, 24), statement: item.statement})
    })
  },
  methods: {
    handleClick: function (row, event, column) {
      if (column.label !== '操作') {
        this.$parent.input = row.statement
      }
    },
    handleEdit: function (index, row) {
      console.log(index, row)
    },
    handleDelete: function (index, row) {
      this.msg.forEach((item, index) => {
        if (item.time.toString().slice(0, 24) === row.time) {
          this.msg.splice(index, 1)
        }
      })
      this.history = []
      this.msg.forEach(item => {
        this.history.push({time: item.time.toString().slice(0, 24), statement: item.statement})
      })
    },
    fold: function () {
      this.fold_state = !this.fold_state
      this.history = []
      this.msg.forEach(item => {
        this.history.push({time: item.time.toString().slice(0, 24), statement: item.statement})
      })
    },
    refresh: function () {
      this.history = []
      this.msg.forEach(item => {
        this.history.push({time: item.time.toString().slice(0, 24), statement: item.statement})
      })
    },
    close: function () {
      this.$parent.history_state = false
    }
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
}

.el-table-column {
  background-color: #efeff4;
}
</style>
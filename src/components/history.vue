<template>
  <div>
    <el-table
      :data="history"
      border
      style="width: 90%;margin: 0 auto;background-color: #efeff4;text-align: left">
      <el-table-column prop="time" label="time" width="180">
      </el-table-column>
      <el-table-column prop="statement" label="statement">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      history: []
    }
  },
  props: ['msg'],
  mounted: function () {
    this.msg.forEach(item => {
      console.log(item)
      this.history.push({time: item.time, statement: item.statement})
    })
  }
}
</script>

<style>
.el-table-column {
  background-color: #efeff4;
}
</style>
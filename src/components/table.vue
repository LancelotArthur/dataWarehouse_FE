<template>
  <div>
    <el-table :data="history" border
      style="width: 90%;margin: 0 auto;background-color: #efeff4;text-align: left">
      <el-table-column prop="actor" label="actor" width="300">
      </el-table-column>
      <el-table-column prop="times" label="times" width="300">
      </el-table-column>
      <el-table-column prop="director" label="director">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      res: '',
      data: []
    }
  },
  props: ['msg'],
  mounted: function () {
    this.res = this.msg[1]
    console.log(this.res)
    this.res.forEach(item => {
      this.data.push({actor: item[0], times: item[1], director: item[2]})
    })
    console.log(this.data)
  }
}
</script>

<style>

</style>

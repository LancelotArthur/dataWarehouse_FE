<template>
  <div>
    <!-- <div>
      <el-col :span="6" id="title">
        Server version
      </el-col>
      <el-col :span="14">
        mySQL
      </el-col>
    </div>
    <div style="background-color: #f5f5f5">
      <el-col :span="6" id="title">
        Server address
      </el-col>
      <el-col :span="14" style="background-color: #f5f5f5">
        localhost:8888
      </el-col>
    </div>
    <div>
      <el-col :span="6" id="title">
        Query
      </el-col>
      <el-col :span="14">
        {{msg}}
      </el-col>
    </div>
    <div>
      <el-col :span="6" id="title">
        Response
      </el-col>
      <el-col :span="14" style="background-color: #f5f5f5">

      </el-col>
    </div> -->
    <table style="width: 100%;background-color: #ffffff">
      <tbody>
        <tr class="odd">
          <td class="title">
            Server version
          </td>
          <td class="content">
            mySQL
          </td>
        </tr>
        <tr class="even">
          <td class="title">
            Server address
          </td>
          <td class="content">
            localhost:8888
          </td>
        </tr>
        <tr class="odd">
          <td class="title">
            Query
          </td>
          <td class="content">
            {{msg[0]}}
          </td>
        </tr>
        <tr class="even">
          <td class="title">
            Response
          </td>
          <td class="content">
            {{msg[1]}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      query: ''
    }
  },
  mounted: function () {
    this.query = this.$parent.statement
  },
  props: ['msg']
}
</script>

<style>
.div {
  text-align: left;
}
.title {
  text-align: center;
  vertical-align: top;
  width: 150px;
}
.content {
  text-align: left;
}
.even {
  background-color: #f5f5f5
}
</style>

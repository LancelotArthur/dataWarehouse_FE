<template>
  <div>
    <table style="width: 100%;background-color: #ffffff">
      <tbody>
        <tr class="odd">
          <td class="title">
            Server version
          </td>
          <td class="content">
            {{serverVersion}}
          </td>
        </tr>
        <tr class="even">
          <td class="title">
            Server address
          </td>
          <td class="content">
            {{serverAddress}}
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
          <td class="title" @click="handleClick">
            Time_consuming
          </td>
          <td class="content">
            {{time}}
          </td>
        </tr>
        <tr class="odd">
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
      query: '',
      res: [],
      time: '',
      serverVersion: '',
      serverAddress: ''
    }
  },
  props: ['msg'],
  mounted: function () {
    if (this.msg[2] === '1') {
      this.serverVersion = 'mySQL'
      this.serverAddress = 'localhost:8888'
    } else if (this.msg[2] === '2') {
      this.serverVersion = 'HDFS + neo4j'
      this.serverAddress = 'localhost:7474'
    }
    this.query = this.$parent.statement
    this.res = this.msg[1]
    if (this.msg[1].length === 2) {
      this.time = this.msg[1][0] / 1000 + 's'
    } else {
      this.time = this.msg[1][this.msg[1].length - 1].split(' : ')[1] / 1000 + 's'
    }
  },
  methods: {
    handleClick: function () {
      if (this.msg[1].length === 2) {
        this.time = this.msg[1][0] / 1000 + 's'
      } else {
        this.time = this.msg[1][this.msg[1].length - 1].slice(1, this.msg[1][this.msg[1].length - 1].length).split(' : ')[1] / 1000 + 's'
      }
    }
  }
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
.odd {
  background-color: #f5f5f5
}
</style>

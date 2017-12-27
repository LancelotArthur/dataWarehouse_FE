<template>
  <div>
    <el-row :gutter="30">
      <el-col :span="20">
        <div style="width: 80%; margin: 0 auto">
          <div id="onshow">
            <el-row :gutter="20">
              <el-col :span="4"><div class="grid-content bg-purple"><h3>正在热映</h3></div></el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  placeholder
                </div>
              </el-col>
              <el-col :span="8">
                <div class="grid-content bg-purple">
                  <el-pagination small layout="prev, pager, next" :total="30" :page-size="5">
                  </el-pagination>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 1 : 0">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../../assets/logo.png" class="image">
                  <div style="padding: 14px;">
                      <el-button type="text" class="button">操作按钮</el-button>
                      <br>
                      <time class="time">{{ currentDate }}</time>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <div id="recent" style="margin-top: 60px">
            <el-row :gutter="20">
              <el-col :span="4"><div class="grid-content bg-purple"><h3>正在热映</h3></div></el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="华语" name="first">
                    <span slot="label">华语</span>
                  </el-tab-pane>
                  <el-tab-pane label="欧美" name="second">
                    <span slot="label">欧美</span>
                  </el-tab-pane>
                  <el-tab-pane label="韩国" name="third">
                    <span slot="label">韩国</span>
                  </el-tab-pane>
                  <el-tab-pane label="日本" name="fourth">
                    <span slot="label">日本</span>
                  </el-tab-pane>
                </el-tabs>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="grid-content bg-purple">
                  <span @click="more">更多</span>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="4" v-for="(o) in 4" :key="o" :offset="1">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../../assets/logo.png" class="image">
                  <div style="padding: 14px;">
                      <el-button type="text" class="button">操作按钮</el-button>
                      <br>
                      <time class="time">{{ currentDate }}</time>
                  </div>
                </el-card>
              </el-col>
            </el-row>
            <el-row style="margin-top: 30px">
              <el-col :span="4" v-for="(o) in 4" :key="o" :offset="1">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="../../assets/logo.png" class="image">
                  <div style="padding: 14px;">
                      <el-button type="text" class="button">操作按钮</el-button>
                      <br>
                      <time class="time">{{ currentDate }}</time>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date(),
      activeName: 'first'
    }
  },
  methods: {
    handleClick: function (tab, event) {
      console.log(tab, event)
    },
    more: function () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

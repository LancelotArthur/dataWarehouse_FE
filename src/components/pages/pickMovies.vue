<template>
  <div style="width: 80%;margin: 0 auto">
    <el-row id="global-wrap" :gutter="50">
      <el-col id="article" :span="18">
        <el-container>
          <el-header height="100px" style="text-align: left">
            <el-row>
              <h2>选电影</h2>
            </el-row>
            <el-row style="margin-top: 10px">
              <fish-tag index="热门">热门</fish-tag>
              <fish-tag index="最新">最新</fish-tag>
              <fish-tag index="经典">经典</fish-tag>
              <fish-tag index="高分">高分</fish-tag>
              <fish-tag index="华语">华语</fish-tag>
              <fish-tag index="欧美">欧美</fish-tag>
              <fish-tag index="韩国">韩国</fish-tag>
              <fish-tag index="日本">日本</fish-tag>
              <fish-tag index="动作">动作</fish-tag>
              <fish-tag index="喜剧">喜剧</fish-tag>
              <fish-tag index="爱情">爱情</fish-tag>
              <fish-tag index="科幻">科幻</fish-tag>
              <fish-tag index="悬疑">悬疑</fish-tag>
              <fish-tag index="恐怖">恐怖</fish-tag>
              <fish-tag index="文艺">文艺</fish-tag>
            </el-row>
            <hr color="#d9d9d9"/>
          </el-header>
          <el-main>
            <el-row>
            </el-row>
            <el-row :span="10" v-for="(o) in 4" :key="o" style="margin-top: 20px">
              <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
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
          </el-main>
          <el-footer>
            <el-button type="info" style="width: 400px;height: 30px;padding: 0;margin-right: 8%" @click="load">
              加载更多
            </el-button>
          </el-footer>
        </el-container>
      </el-col>
      <el-col id="aside" :span="6">
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date()
    }
  },
  methods: {
    load: function () { }
  }
}
</script>

<style>

</style>

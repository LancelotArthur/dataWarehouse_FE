<template>
  <div style="width: 80%;margin: 0 auto">
    <el-row id="global-wrap" :gutter="50">
      <el-col id="article" :span="18">
        <el-container style="text-align: left;">
          <el-header style="padding: 0">
            <h1>最受欢迎的影评</h1>
            <a href="#">最受欢迎的</a> / <a href="#">新片评论</a>
          </el-header>
          <el-main style="padding: 0;margin-top: 20px">
            <el-row :span="4" v-for="(o) in 10" :key="o" :offset="0">
              <hr color="#d9d9d9"/>
              <el-container style="margin-top: 30px">
                <el-aside width="150px">
                  <img src="../../assets/logo.png" class="image">
                </el-aside>
                <el-container>
                  <el-header height="40px" style="text-align: left">
                    <el-row>
                      <el-col :span="3">
                        <h3><a href="#">靡菲m</a></h3>
                      </el-col>
                      <el-col :span="8">
                        <el-rate
                          v-model="rate"
                          disabled
                          show-score
                          text-color="#ff9900"
                          disabled-void-color="#cccccc"
                          score-template="{value}">
                        </el-rate>
                      </el-col>
                    </el-row>
                  </el-header>
                  <el-main style="padding-top: 0px">
                    <h5>
                      <a href="#">“幻术”和“无上密”到底是什么？解码隐藏在《妖猫传》表层故事之下的那些事儿</a> </h5>
                    <h5 style="text-align: left;margin-top: 10px">
                      这个故事并不简单，它真正想要表达的东西就隐藏在片子中，等待有心人的发现。 大家一定记得，白居易和空海刚组队时，曾经看过一场幻术表演：瓜翁用幻术变出西瓜，白居易以为是真的，空海知道是假的，瓜翁知道空海没有中术，送他西瓜，途中，西瓜变成鱼头，空海说还不扔掉，白... 
                      <a href="#">(展开)</a>
                    </h5>
                  </el-main>
                  <el-footer>Footer</el-footer>
                </el-container>
              </el-container>
            </el-row>
          </el-main>
          <el-footer style="padding: 0">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
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
      rate: 3.7,
      currentPage: 1
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style>

</style>

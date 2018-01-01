<template>
  <div style="width: 80%;margin: 0 auto">
    <el-row id="global-wrap" :gutter="50">
      <el-col id="article" :span="18">
        <el-row id="titile">
          <el-col :span="2">
            <img src="../../assets/logo.png" class="image">
          </el-col>
          <el-col :span="4">
            <h1>{{name}}</h1>
          </el-col>
        </el-row>
        <div style="text-align: left;margin:0">
          <el-row id="collection">
            <h3 style="margin: 20px 0 20px 0">{{name}}的收藏 · · · · · ·(<a href="#">全部</a>)</h3>
            <el-row v-for="o in 5" :key="o" style="margin:0">
              <h5 style="margin: 0"><a href="#">电影图片: 莫里斯 Maurice‎ (1987)</a></h5>
              <p class="ul" style="margin-top: 5px;margin-bottom:5px"/>
            </el-row>
          </el-row>
          <el-row id="collection">
            <h3 style="margin: 20px 0 20px 0">{{name}}的短评 · · · · · ·(<a href="#">全部</a>)</h3>
            <el-row v-for="o in 5" :key="o" style="margin:0">
              <h5 style="margin: 0"><a href="#">电影图片: 莫里斯 Maurice‎ (1987)</a></h5>
              <p class="ul" style="margin-top: 5px;margin-bottom:5px"/>
            </el-row>
          </el-row>
          <el-row id="collection">
            <h3 style="margin: 20px 0 20px 0">{{name}}的影评 · · · · · ·(<a href="#">全部</a>)</h3>
            <el-row v-for="o in 5" :key="o" style="margin:0">
              <h5 style="margin: 0"><a href="#">电影图片: 莫里斯 Maurice‎ (1987)</a></h5>
              <p class="ul" style="margin-top: 5px;margin-bottom:5px"/>
            </el-row>
          </el-row>
        </div>
      </el-col>
      <el-col id="aside" :span="6" style="padding: 0">
        <el-col style="background: #d0e0e3;border-radius: 5px;padding: 10px 10px 20px 10px">
          <el-row>
            <el-col :span="12" style="padding: 0">
              <img src="../../assets/logo.png" class="image">
            </el-col>
            <el-col :span="12" style="padding: 0">
              <h5 style="margin: 0">常居：<a href="#">上海</a> </h5>
              <h5 style="margin: 0">168033009</h5>
              <h5 style="margin: 0">{{joinTime}}加入</h5>
            </el-col>
          </el-row>
          <hr color="#cccccc" style="margin: 5px 10px 5px 10px"/>
          <el-row style="text-align: left">
            <h5 style="margin-top: 10px">(<a href="#">添加自我介绍</a>)</h5>
          </el-row>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Lancelot',
      joinTime: '2017-10-12'
    }
  }
}
</script>

<style>

</style>

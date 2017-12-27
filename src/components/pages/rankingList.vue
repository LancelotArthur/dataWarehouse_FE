<template>
  <div style="width: 80%;margin: 0 auto">
    <el-row id="global-wrap" :gutter="50">
      <el-col id="article" :span="18">
        <el-row style="text-align: left">
          <h1>排行榜</h1>
        </el-row>
        <el-row style="text-align: left;margin-top: 15px;margin-bottom: 15px">
          <h3>新片榜</h3>
        </el-row>
        <el-row :span="4" v-for="(o) in 4" :key="o" :offset="0">
          <p class="ul"/>
          <el-container style="margin-top: 30px">
            <el-aside width="150px">
              <img src="../../assets/logo.png" class="image">
            </el-aside>
            <el-container>
              <el-header height="20px" style="text-align: left">
                <h4><a href="#">暴雪将至 / The Looming Storm / The Storm Looming </a></h4></el-header>
              <el-main style="padding-top: 0px">
                <h5 style="text-align: left;margin-top: 10px">
                  2017-10-29(东京电影节) / 2017-11-17(中国大陆) / 段奕宏 / 江一燕 / 杜源 / 郑伟 / 郑楚一 / 张林 / 中国大陆 / 董越 / 120分钟 / 剧情 / 犯罪 / 悬疑 / 董越 Yue Dong / 汉语普通话
                </h5>
              </el-main>
              <el-footer style="text-align: left">Footer</el-footer>
            </el-container>
          </el-container>
        </el-row>
      </el-col>
      <el-col id="aside" :span="6">
        <el-row style="text-align: left">
          <h3>分类排行榜</h3>
        </el-row>
        <el-row style="margin-top: 10px">
          <fish-tag index="剧情">剧情</fish-tag>
          <fish-tag index="喜剧">喜剧</fish-tag>
          <fish-tag index="动作">动作</fish-tag>
          <fish-tag index="爱情">爱情</fish-tag>
          <fish-tag index="科幻">科幻</fish-tag>
          <fish-tag index="动画">动画</fish-tag>
          <fish-tag index="悬疑">悬疑</fish-tag>
          <fish-tag index="惊悚">惊悚</fish-tag>
          <fish-tag index="恐怖">恐怖</fish-tag>
          <fish-tag index="纪录片">纪录片</fish-tag>
          <fish-tag index="短片">短片</fish-tag>
          <fish-tag index="情色">情色</fish-tag>
          <fish-tag index="同性">同性</fish-tag>
          <fish-tag index="音乐">音乐</fish-tag>
          <fish-tag index="歌舞">歌舞</fish-tag>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default { }
</script>

<style>
  .ul {
    border-bottom: 1px dashed #DDDDDD;
    line-height: 100%;
    clear: both;
  }
  p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
  }
</style>

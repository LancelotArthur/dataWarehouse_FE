<template>
  <div style="width: 80%;margin: 0 auto">
    <el-row id="global-wrap" :gutter="50">
      <el-col id="article" :span="18">
        <el-row style="text-align: left">
          <h1>选影视</h1>
        </el-row>
        <el-row style="text-align: left;margin-top: 10px">
          <fish-tag index="全部形式">全部形式</fish-tag>
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
        <el-row style="text-align: left;margin-top: 10px">
          <fish-tag index="全部类型">全部类型</fish-tag>
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
        <el-row style="text-align: left;margin-top: 10px">
          <fish-tag index="全部地区">全部地区</fish-tag>
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
        <el-row style="text-align: left;margin-top: 10px">
          <fish-tag index="全部特色">全部特色</fish-tag>
          <fish-tag index="剧情">剧情</fish-tag>
          <fish-tag index="喜剧">喜剧</fish-tag>
          <fish-tag index="动作">动作</fish-tag>
          <fish-tag index="爱情">爱情</fish-tag>
          <fish-tag index="科幻">科幻</fish-tag>
          <fish-tag index="动画">动画</fish-tag>
          <fish-tag index="悬疑">悬疑</fish-tag>
          <!-- <el-button v-else class="button-new-tag" size="small" @click="showInput">+自定义标签</el-button> -->
        </el-row>
        <el-row style="text-align: left;margin-top: 10px">
          <el-radio-group v-model="radio5" size="small">
          <el-radio-button label="按热度排序"></el-radio-button>
          <el-radio-button label="按时间排序"></el-radio-button>
          <el-radio-button label="按评价排序"></el-radio-button>
        </el-radio-group>
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
        <el-button type="info" style="width: 400px;height: 30px;padding: 0;margin-right: 8%;margin-top: 30px" @click="load">
          加载更多
        </el-button>
      </el-col>
      <el-col id="aside" :span="6">
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default { }
</script>

<style>

</style>

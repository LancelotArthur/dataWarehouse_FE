<template>
  <div style="width: 80%;margin: 0 auto">
    <el-row id="global-wrap" :gutter="50">
      <el-col id="article" :span="18">
        <el-container id="detail">
          <el-header height="40px" style="text-align: left;padding: 0">
            <h1>菲恩·怀特海德 Fionn Whitehead</h1>
          </el-header>
          <el-container>
            <el-aside width="150px">
              <img src="https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1504371987.55.webp" class="image">
            </el-aside>
            <el-main style="padding-top: 10px;text-align: left">
              <h5 style="margin: 0">性别：1997</h5>
              <h5 style="margin: 0">出生地：英国,伦敦</h5>
              <h5 style="margin: 0">职业：演员</h5>
              <h5 style="margin: 0">更多中文名：菲安伟赫(港)</h5>
              <h5 style="margin: 0">IMDb编号：<a href="#">nm7887725</a> </h5>
            </el-main>
          </el-container>
        </el-container>
        <p class="ul"/>
        <el-row id="intro">
          <h3>影人简介  · · · · · ·</h3>
          <h5 style="margin-top: 10px">菲恩·怀特海德，英国演员，1997年出生于英国伦敦，成长于大伦敦区里士满镇的一个艺术世家。他的父亲Tim Whitehead是一位爵士作曲家，姐妹同样也是音乐家。在成长过程中，他曾考虑过要当一名霹雳舞表演者，后来却变成了做演员。13岁时，他在里士满的橙树剧院开始了自己的表演生涯，继而转到里士满学院，并在英国国家青年剧院就读夏季课程。在2015年之前，他还是一位在滑铁卢的咖啡店打工的有志演员。2016年，他主演了英国的迷你电视剧《他》，同时也在伦敦表演了舞台剧《Glenn ...(<a href="#">展开全部</a>)</h5>
        </el-row>
        <el-row id="intro">
          <h3>影人图片  · · · · · ·(<a href="#">全部132张 · 上传照片</a>)</h3>
          <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index == 0 ? 0 : 1">
            <img src="../../assets/logo.png" class="image">
          </el-col>
        </el-row>
        <el-row id="recent-works">
          <h3>最近的5部作品（已上映）· · · · · ·  (<a href="#">全部</a>)</h3>
          <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index == 0 ? 0 : 1">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../assets/logo.png" class="image">
              <div style="padding: 0;text-align: center">
                  <el-button type="text" class="button" @click="actorDetail">菲恩·怀特海德</el-button>
                  <h5 style="color: #d9d9d9;margin: 0;font-size: 13px">{{role}}</h5>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row id="most-popular-works">
          <h3>最受好评的5部作品   · · · · · ·  (<a href="#">全部</a>)</h3>
          <el-col :span="4" v-for="(o, index) in 5" :key="o" :offset="index == 0 ? 0 : 1">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../assets/logo.png" class="image">
              <div style="padding: 0;text-align: center">
                  <el-button type="text" class="button" @click="actorDetail">菲恩·怀特海德</el-button>
                  <h5 style="color: #d9d9d9;margin: 0;font-size: 13px">{{role}}</h5>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col id="aside" :span="6">
        <el-row id="most-popular-works">
          <h5>菲恩·怀特海德的影迷（2625）· · · · · ·  (<a href="#">全部</a>)</h5>
          <el-row v-for="(o) in 2" :key="o">
            <el-col :span="5" v-for="(o, index) in 4" :key="o" :offset="index == 0 ? 0 : 1">
              <el-card :body-style="{ padding: '0px' }">
                <img src="../../assets/logo.png" class="image">
                <div style="padding: 0;text-align: center">
                    <el-button type="text" class="button" @click="actorDetail" style="font-size:10px">tankdream</el-button>
                    <h5 style="color: #d9d9d9;margin: 0;font-size: 13px">{{role}}</h5>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default { }
</script>

<style>

</style>

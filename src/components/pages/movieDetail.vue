<template>
  <div style="width: 80%;margin: 0 auto">
    <el-row id="global-wrap" :gutter="50">
      <el-col id="article" :span="18">
        <el-container id="detail">
          <el-header height="40px" style="text-align: left;padding: 0"><h1>敦刻尔克 Dunkirk</h1></el-header>
          <el-container>
            <el-aside width="150px">
              <img src="../../assets/logo.png" class="image">
            </el-aside>
            <el-main style="padding-top: 0px;text-align: left">
              <h5 style="margin: 0">导演：<a href="#">克里斯托弗·诺兰</a> </h5>
              <h5 style="margin: 0">编剧：<a href="#">克里斯托弗·诺兰</a> </h5>
              <h5 style="margin: 0">主演：<a href="#">菲恩·怀特海德 / 汤姆·格林-卡尼 / 杰克·劳登 / 哈里·斯泰尔斯 / 阿奈林·巴纳德 / 更多...</a> </h5>
              <h5 style="margin: 0">类型：<a href="#">剧情 / 历史 / 战争</a> </h5>
              <h5 style="margin: 0">官方网站<a href="#">www.dunkirkmovie.com</a> </h5>
              <h5 style="margin: 0">制片国家/地区：<a href="#">英国 / 法国 / 美国 / 荷兰</a> </h5>
              <h5 style="margin: 0">语言：<a href="#">英语 / 法语 / 德语</a> </h5>
              <h5 style="margin: 0">上映日期：<a href="#">2017-09-01(中国大陆) / 2017-07-13(伦敦首映) / 2017-07-21(美国)</a> </h5>
              <h5 style="margin: 0">片长：<a href="#">107分钟</a> </h5>
              <h5 style="margin: 0">又名<a href="#">敦刻尔克大撤退 / 敦克尔克大行动(台) / 邓寇克大行动(港)</a> </h5>
              <h5 style="margin: 0">IMDb链接<a href="#">tt5013056</a> </h5>
            </el-main>
            <el-aside width="150px" style="border-left: 1px solid #d9d9d9">
              <h5>豆瓣评分</h5>
            </el-aside>
          </el-container>
        </el-container>
        <el-row id="summary">
          <h3>敦刻尔克的剧情简介 · · · · · ·</h3>
          <h5 style="margin-top: 10px">故事改编自著名的二战军事事件“敦刻尔克大撤退”。二战初期，40万英法盟军被敌军围困于敦刻尔克的海滩之上，面对敌军步步逼近的绝境，形势万分危急。英国政府和海军发动大批船员，动员人民起来营救军队。英国士兵汤米（菲昂·怀特海德 Fionn Whitehead 饰）在逃离海滩的过程中相继结识吉布森与亚历克斯，同时民用船主道森先生（马克·里朗斯 Mark Rylance 饰）与儿子彼得、17岁少年乔治也离开英国，去往敦刻尔克拯救士兵。三人陆续搭救了海军（基里安·墨菲 Cillian Murphy 饰）、飞行员柯林斯及汤米一行人，而战斗机飞行员法瑞尔（汤姆·哈迪 Tom Hardy 饰）则在被敌人双面夹击的艰难情形下顽强战斗。影片的故事从陆、海、空三个角度讲述，在德国军队的包围下，每个人不得不为自己的命运背水一战，才有可能活着回家。</h5>
        </el-row>
        <el-row id="actors">
          <h3>敦刻尔克的影人 · · · · · ·（<a href="#" style="font-size: 15px">全部</a>）</h3>
          <el-col :span="3" v-for="(o, index) in 6" :key="o" :offset="index == 0 ? 0 : 1">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../assets/logo.png" class="image">
              <div style="padding: 0;text-align: center">
                  <el-button type="text" class="button" @click="movieDetail">操作按钮</el-button>
                  <h5 style="color: #d9d9d9;margin: 0;font-size: 13px">{{role}}</h5>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row id="brief-review">
          <h3>敦刻尔克的短评 · · · · · ·（<a href="#" style="font-size: 15px">全部</a>）</h3>
          <a href="#">热门</a> / <a href="#">最新</a>
          <el-row :span="4" v-for="(o) in 5" :key="o" :offset="0" style="margin-top: 0">
            <hr color="#d9d9d9"/>
            <el-container>
              <el-header height="20px" style="text-align: left;padding: 0">
                <el-col :span="3">
                  <h4><a href="#">桃桃淘电影</a></h4>
                </el-col>
                <el-col :span="8">
                  <el-rate
                    v-model="rate"
                    disabled
                    text-color="#ff9900"
                    disabled-void-color="#cccccc"
                    score-template="{value}">
                  </el-rate>
                </el-col>
              </el-header>
              <el-main style="padding: 0">
                <h5 style="text-align: left;margin-top: 10px">
                  三条故事线，不同时间长度，却有意平行剪辑，造成假象。这一回没太多叙事花样，也没什么视觉奇观。主要还是还原恐怖气氛，营造当时的绝望与紧张感。这里有英雄也有被吓破胆的普通小兵，小兵代入感更强。音乐对影片情绪有强烈的推动，也让结尾更加释然。结尾滑翔真的很美。算诺兰一次新的挑战。
                </h5>
              </el-main>
            </el-container>
          </el-row>
        </el-row>
        <el-row id="review">
          <h3>敦刻尔克的影评 · · · · · ·（<a href="#" style="font-size: 15px">全部</a>）</h3>
          <a href="#">热门</a> / <a href="#">最新</a>
          <el-row :span="4" v-for="(o) in 5" :key="o" :offset="0" style="margin-top: 0">
            <hr color="#d9d9d9"/>
            <el-container>
              <el-header height="30px" style="text-align: left;padding: 0">
                <el-col :span="1">
                  <img src="../../assets/logo.png" class="image">
                </el-col>
                <el-col :span="length">
                  <h4><a href="#">古尔齐亚</a></h4>
                </el-col>
                <el-col :span="8">
                  <el-rate
                    v-model="rate"
                    disabled
                    text-color="#ff9900"
                    disabled-void-color="#cccccc"
                    score-template="{value}">
                  </el-rate>
                </el-col>
              </el-header>
              <el-main style="padding: 0">
                <h5 style="text-align: left;margin-top: 10px;margin-bottom: 10px">
                  <a href="#">为什么《敦刻尔克》是优秀的战争电影？</a> 
                </h5>
                <h5 style="text-align: left;margin-top: 10px;margin-bottom: 10px">
                  同样是战争中的大撤离，为什么说《敦刻尔克》就是一部优秀的战争电影，而《战狼》就是一部垃圾呢？ 让我来简单回顾一下，《敦刻尔克》都演了什么。 两个英国兵，在海滩上相遇了，一个正准备便便，一个正在扒死者的衣服和靴子，好猥琐。 然后下一刻，俩人眼神一对，计上心来，抬...  (<a href="#">展开</a>)
                </h5>
              </el-main>
            </el-container>
          </el-row>
        </el-row>
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
      role: '饰 汤米 Tommy',
      rate: 4.0,
      length: 2
    }
  }
}
</script>

<style>
  .el-row {
    text-align: left;
    margin-top: 30px;
  }
</style>

<template>
  <div style="width: 80%;margin: 0 auto">
    <el-row id="global-wrap" :gutter="50">
      <el-col id="article" :span="18">
        <el-container id="detail">
          <el-header height="40px" style="text-align: left;padding: 0">
            <h1>{{movie_data.movieName}}</h1>
          </el-header>
          <el-container>
            <el-aside width="150px">
              <img :src="movie_data.coverAddress" class="image">
            </el-aside>
            <el-main style="padding-top: 0px;text-align: left">
              <h5 style="margin: 0">导演：<a href="#">{{movie_data_celebrity.Directors[0].name}}</a> </h5>
              <h5 style="margin: 0">编剧：<a href="#">{{movie_data_celebrity.Writers[0].name}}</a> </h5>
              <h5 style="margin: 0">主演：<a href="#">{{movie_data_celebrity.Actors[0].name}}</a> </h5>
              <h5 style="margin: 0">类型：{{movie_data.genres}}</h5>
              <h5 style="margin: 0">语言：{{movie_data.movieLanguage}}</h5>
              <h5 style="margin: 0">上映日期：{{movie_data.releaseTime}}</h5>
              <h5 style="margin: 0">片长：{{movie_data.lastTimeMinute}}分钟</h5>
              <h5 style="margin: 0">电影分级：{{movie_data.mpaaRate}}</h5>
              <h5 style="margin: 0">豆瓣评分：{{movie_data.rate}}</h5>
            </el-main>
            <el-aside width="150px" style="border-left: 1px solid #d9d9d9">
              <el-button type="primary" :icon="isSeen" plain style="width: 134px;margin-left: 10px" @click="addToSeenList">
                看过
              </el-button>
              <el-button type="primary" :icon="isWish" plain style="margin-top: 20px" @click="addToWishList">
                加入心愿单
              </el-button>
              <el-button type="primary" icon="el-icon-edit" plain style="width: 134px;margin-top: 20px" @click="writeReview">
                写短评
              </el-button>
            </el-aside>
          </el-container>
        </el-container>
        <el-row id="summary">
          <h3>{{movie_data.movieName}}的剧情简介 · · · · · ·</h3>
          <h5 style="margin-top: 10px">{{movie_data.briefIntroduction}}</h5>
        </el-row>
        <el-row id="actors">
          <h3>{{movie_data.movieName}}的影人 · · · · · ·（<a href="#" style="font-size: 15px">全部</a>）</h3>
          <el-col :span="3" v-for="(item, index) in movie_data_celebrity.Actors.slice(0,6)" :key="item.id" :offset="index == 0 ? 0 : 1">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.headImg" alt="崩了" style="width: 100%">
              <div style="padding: 0;text-align: center">
                  <el-button type="text" class="button" @click="actorDetail">{{item.name.split(' ')[0]}}</el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row id="brief-review">
          <h3>{{movie_data.movieName}}的短评 · · · · · ·（<a href="#" style="font-size: 15px">全部</a>）</h3>
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
          <h3>{{movie_data.movieName}}的影评 · · · · · ·（<a href="#" style="font-size: 15px">全部</a>）</h3>
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
import axios from 'axios'

export default {
  data () {
    return {
      role: '饰 汤米 Tommy',
      rate: 4.0,
      length: 2,
      isSeen: 'el-icon-circle-plus-outline',
      isWish: 'el-icon-circle-plus-outline',
      movie_data: {},
      movie_data_celebrity: {}
    }
  },
  mounted: function () {
    axios.get('http://localhost:8888/movie/' + this.$route.params.id).then(response => {
      this.movie_data = response.data.result
      var genres = this.movie_data.genres.slice(2, this.movie_data.genres.length - 2).split('\', \'')
      this.movie_data.genres = genres.join(' / ')
      var releaseTime = this.movie_data.releaseTime.slice(2, this.movie_data.releaseTime.length - 2).split('\', \'')
      this.movie_data.releaseTime = releaseTime.join(' / ')
      this.movie_data.briefIntroduction = this.movie_data.briefIntroduction.slice(0, this.movie_data.briefIntroduction.length - 6)
    }, response => {
      this.$message({
        message: response.status,
        type: 'error'
      })
    })
    axios.get('http://localhost:8888/movie/' + this.$route.params.id + '/celebrity').then(response => {
      this.movie_data_celebrity = response.data.result
    }, response => {
      this.$message({
        message: response.status,
        type: 'error'
      })
    })
  },
  methods: {
    actorDetail: function () {
      this.$router.push('/actorDetail')
    },
    addToSeenList: function () {
      if (this.isSeen === 'el-icon-circle-plus-outline') {
        this.isSeen = 'el-icon-circle-check'
      } else {
        this.isSeen = 'el-icon-circle-plus-outline'
      }
    },
    addToWishList: function () {
      if (this.isWish === 'el-icon-circle-plus-outline') {
        this.isWish = 'el-icon-circle-check'
      } else {
        this.isWish = 'el-icon-circle-plus-outline'
      }
    },
    writeReview: function () {

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

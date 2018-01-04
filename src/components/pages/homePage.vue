<template>
  <div style="width: 80%;margin: 0 auto">
    <el-row id="global-wrap" :gutter="50">
      <el-col id="article" :span="18">
        <el-container id="onshow">
          <el-header height="20px">
            <el-row :gutter="20">
              <el-col :span="4"><div class="grid-content bg-purple"><h3>正在热映</h3></div></el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                </div>
              </el-col>
              <el-col :span="8">
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <el-row>
              <el-carousel :interval="4000" type="card" height="350px" style="text-align: center">
                <el-carousel-item v-for="(item) in movie_inTheaters" :key="item.id" @click="movieDetail">
                  <img :src="item.coverAddress" alt="">
                </el-carousel-item>
              </el-carousel>
            </el-row>
            <el-row>
              <el-carousel :interval="5000" arrow="always" height="250px" indicator-position="outside" style="margin-top: 20px">
                <el-carousel-item v-for="itemI in movie_inTheaters_more" :key="itemI">
                  <el-col :span="4" v-for="(item, index) in itemI" :key="item.id" :offset="index > 0 ? 1 : 0">
                    <el-card :body-style="{ padding: '0px' }">
                      <img :src="item.coverAddress" alt="" style="width: 100%">
                      <div style="padding: 0;text-align: center">
                        <el-button type="text" class="button" @click="movieDetail(item.id)">{{item.movieName}}</el-button>
                        <br>
                        <time class="time">{{ item.releaseTime.slice(2,12) }}</time>
                      </div>
                    </el-card>
                  </el-col>
                </el-carousel-item>
              </el-carousel>
            </el-row>
          </el-main>
        </el-container>
        <div id="recent" style="margin-top: 60px">
          <el-header style="padding: 0">
            <el-row :gutter="20">
              <el-col :span="4"><div class="grid-content bg-purple"><h3>最近热门电影</h3></div></el-col>
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
          </el-header>
          <el-main style="padding: 0">
            <el-row :span="2" v-for="(o) in 2" :key="o" style="margin-top: 10px">
              <el-col :span="4" v-for="(item) in movie_recent_Mandarin.slice(0,4)" :key="item.id" :offset="1">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="item.coverAddress" class="image" style="width: 100%">
                  <div style="padding: 0;text-align: center">
                    <el-button type="text" class="button" @click="movieDetail(item.id)">{{item.movieName}}</el-button>
                    <br>
                    <time class="time">{{ item.releaseTime.slice(2,12) }}</time>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-main>
          <el-footer style="padding-top: 10px;padding-right: 125px">
            <el-pagination small layout="prev, pager, next" :total="30" :page-size="5">
            </el-pagination>
          </el-footer>
        </div>
        <div id="review" style="margin-top: 60px">
          <el-row :gutter="20">
            <el-col :span="5"><div class="grid-content bg-purple"><h3>最受欢迎的影评</h3></div></el-col>
            <el-col :span="15">
              <div class="grid-content bg-purple">
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <span @click="more">更多</span>
              </div>
            </el-col>
          </el-row>
          <el-row :span="4" v-for="(o) in 4" :key="o" :offset="0">
            <el-container style="margin-top: 30px">
              <el-aside width="150px">
                <img src="../../assets/logo.png" class="image">
              </el-aside>
              <el-container>
                <el-header height="40px" style="text-align: left"><h4>一地鸡毛</h4></el-header>
                <el-main style="padding-top: 0px">
                  <h5>哎呀嘛 咔咔滴 评论 <a href="#">《我的！体育老师》</a> </h5>
                  <h5 style="text-align: left;margin-top: 10px">
                    还不错的喜剧片，王小米的机智可爱大叔的幽默风趣莉莉的幼稚每一个人的人物特点都非常明确，让人喜欢！编剧的台词功力也非常不错，演员表扬轻松自然！ 看“我的体育老师”王小米求婚那儿笑死我了 王小米：马克先... 
                    <a href="#">(全文)</a>
                  </h5>
                </el-main>
                <el-footer>Footer</el-footer>
              </el-container>
            </el-container>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
// import qs from 'qs'

export default {
  data () {
    return {
      currentDate: new Date(),
      activeName: 'first',
      movie_data: [],
      movie_inTheaters: [],
      movie_inTheaters_more: [],
      movie_recent_Mandarin: []
    }
  },
  mounted: function () {
    axios.get('http://localhost:8888/explore?type=year&tag=2016-2017&sort=Rate').then(response => {
      this.movie_data = response.data.result
      for (let index = 0; index < 6; index++) {
        this.movie_inTheaters.push(this.movie_data[index])
      }
      for (let index = 0; index < 6; index++) {
        var temp = []
        for (let i = 0; i < 5; i++) {
          temp.push(this.movie_data[index * 5 + i])
        }
        this.movie_inTheaters_more.push(temp)
      }
    }, response => {
      this.$message({
        message: response.status,
        type: 'error'
      })
    })
    axios.get('http://localhost:8888/explore?tag=汉语&type=language&sort=ReleaseTime').then(response => {
      this.movie_recent_Mandarin = response.data.result
    }, response => {
      this.$message({
        message: response.status,
        type: 'error'
      })
    })
  },
  methods: {
    handleClick: function (tab, event) {
      console.log(tab, event)
    },
    more: function () {
      this.$router.push('/')
    },
    movieDetail: function (id) {
      this.$router.push('/movieDetail/' + id)
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

  /* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
</style>

<template>
  <div class="">
    <fish-menu mode="horizontal" defaultActive="0">
      <fish-option index="0" content="首页" @click="homePage"></fish-option>
      <fish-option index="1" content="选电影" @click="pickMovies"></fish-option>
      <fish-option index="2" content="排行榜" @click="rankingList"></fish-option>
      <fish-option index="3" content="分类" @click="classification"></fish-option>
      <fish-option index="4" content="影评" @click="review"></fish-option>
      <fish-option index="5" content="登录" @click="login"></fish-option>
      <fish-submenu index="6">
        <template slot="title">用户</template>
        <fish-option index="6-0" content="Jack"></fish-option>
        <fish-option index="6-1" content="Lucy"></fish-option>
        <fish-option index="6-2" content="Active"></fish-option>
        <!--<fish-option index="3-3">Option-3</fish-option>-->
        <fish-submenu index="6-3">
          <template slot="title">submenu-3</template>
          <fish-option index="6-3-0" content="Jack"></fish-option>
          <fish-option index="6-3-1" content="Lucy"></fish-option>
          <fish-option index="6-3-2" content="Active"></fish-option>
        </fish-submenu>
        <fish-option index="6-4" content="Option-4"></fish-option>
        <fish-option index="6-5" content="Option-5">Option-5</fish-option>
      </fish-submenu>
    </fish-menu>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    login: function () {
      this.$router.push('/login')
    },
    homePage: function () {
      this.$router.push('/homePage')
    },
    pickMovies: function () {
      this.$router.push('/pickMovies')
    },
    rankingList: function () {
      this.$router.push('/rankingList')
    },
    classification: function () {
      this.$router.push('/classification')
    },
    review: function () {
      this.$router.push('/review')
    }
  }
}
</script>


<style>
.global-nav {
  height: 28px;
  color: #d5d5d5;
  background-color: #545652;
  min-width: 950px;
}
</style>

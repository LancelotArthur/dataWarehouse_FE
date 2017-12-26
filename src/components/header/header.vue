<template>
  <div class="global-nav">
    <fish-menu mode="horizontal" defaultActive="0">
      <fish-option index="0" content="首页"></fish-option>
      <fish-option index="1" content="选电影"></fish-option>
      <fish-option index="2" content="用户" @click="login()"></fish-option>
      <fish-submenu index="3">
        <template slot="title">submenu</template>
        <fish-option index="3-0" content="Jack"></fish-option>
        <fish-option index="3-1" content="Lucy"></fish-option>
        <fish-option index="3-2" content="Active"></fish-option>
        <!--<fish-option index="3-3">Option-3</fish-option>-->
        <fish-submenu index="3-3">
          <template slot="title">submenu-3</template>
          <fish-option index="3-3-0" content="Jack"></fish-option>
          <fish-option index="3-3-1" content="Lucy"></fish-option>
          <fish-option index="3-3-2" content="Active"></fish-option>
        </fish-submenu>
        <fish-option index="3-4" content="Option-4"></fish-option>
        <fish-option index="3-5" content="Option-5">Option-5</fish-option>
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

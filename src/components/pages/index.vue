<template>
  <div>
    <Header></Header>
    <div style="margin: 80px">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header'
export default {
  data () {
    return {
    }
  },
  components: {
    Header
  }
}
</script>

<style>

</style>

<template>
  <div>
    <Header></Header>
    <div style="margin: 60px">
      <fish-pagination :rows="5" :total="50" :current="page" @change="(current) => page = current">
      </fish-pagination>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header'

export default {
  data () {
    return {
      page: 2
    }
  },
  components: {
    Header
  }
}
</script>

<style>

</style>

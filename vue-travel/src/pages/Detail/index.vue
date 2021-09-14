<template>
  <div>
    <detail-banner />
    <detail-header />
    <div class="content">
      <detail-list />
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
}
</script>

<style lang='stylus' scoped>
.content
 height 50rem
</style>

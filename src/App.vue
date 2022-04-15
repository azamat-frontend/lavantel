<template>
  <the-header></the-header>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>

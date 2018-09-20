<template>
  <div id="app">
    <MainNavigation/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import MainNavigation from '@/components/base/MainNavigation.vue';
import Footer from '@/components/base/Footer.vue';
export default {
  metaInfo: {
    title: 'Royal | Osiguranje i registracija vozila | Novi Sad'
  },
  components: {
    MainNavigation,
    Footer
  }
}
</script>

<style lang="scss">
@import './assets/scss/settings';
@import './assets/scss/base';
@import './assets/scss/transitions';
@import './assets/scss/helpers';
</style>



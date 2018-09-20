<template>
  <div id="app">
    <MainNavigation/>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
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



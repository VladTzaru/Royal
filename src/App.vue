<template>
  <div id="app">
    <MainNavigation/>
  </div>
</template>

<script>
import MainNavigation from '@/components/MainNavigation.vue';
export default {
  components: {
    MainNavigation
  }
}
</script>

<style lang="scss">
@import './assets/scss/settings';

body {
  margin: 0;
  padding: 0;
  color: $text-primary;
  text-align: left;
  background-color: #fff;
  font-weight: 400;
  letter-spacing: 0;
  -webkit-font-smoothing: antialiased;
  text-transform: none;
  font-family: "Roboto", arial, sans-serif;
  font-size: 16px;
  line-height: 26px;
  overflow-x: hidden;
}
</style>



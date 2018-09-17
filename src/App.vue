<template>
  <div id="app">
    <MainNavigation/>
    <router-view></router-view>
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
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  line-height: 26px;
  overflow-x: hidden;
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-bottom: 1rem;
  font-family: Merriweather, serif;
  font-weight: 700;
  color: inherit;
}

.btn {
  font-size: 16px;
  letter-spacing: .125rem;
  text-transform: uppercase;
}

.btn-primary {
  transition: $transition-primary;
  color: #fff;
  padding: .875rem 1.5rem;
  font-weight: 700;
  background-color: $secondary;
  border-color: $secondary;
  box-shadow: $box-shadow-primary;
  &:hover {
    background-color: $secondary-dark;
    box-shadow: $box-shadow-hover;
  }
}

.btn-pill {
  border-radius: 10rem;
}
</style>



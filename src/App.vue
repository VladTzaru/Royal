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
  components: {
    MainNavigation,
    Footer
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
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 26px;
  overflow-x: hidden;
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
  margin-bottom: 1rem;
  font-weight: 500;
  color: inherit;
}

a {
  transition: $transition-primary;
  text-decoration: none !important;
  color: $text-primary;
  &:hover {
    color: $primary;
  }
}

.bg-skew {
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: skewY(-5deg);
    transform-origin: top left;
    z-index: -1;
  }
}

.bg-skew-light:before {
    background-color: $secondary-light;
}

.btn {
  font-size: 16px;
  outline: none !important;
  letter-spacing: .125rem;
  text-transform: uppercase;
}

.btn-primary {
  transition: $transition-primary;
  color: #fff;
  padding: .875rem 1.5rem;
  font-weight: 700;
  background-color: $primary-light;
  border: $primary-light;
  border-color: $primary-light;
  box-shadow: $box-shadow-primary;
  &:hover, &:focus, &:active, &:visited {
    background-color: $primary !important;
    box-shadow: $box-shadow-hover;
    outline: none !important;
  }
}

.hr-rule {
  width: 3rem;
  border-top-width: 2px !important;
  margin-bottom: 46px;
}

.border-secondary {
  border-top-color: $primary !important;
}

.btn-pill {
  border-radius: 10rem;
}

.img-thumbnail {
    box-shadow: $box-shadow-primary;
}
</style>



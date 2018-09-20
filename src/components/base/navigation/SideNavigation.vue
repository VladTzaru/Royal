<template>

    <nav id="sideNav" class="nav flex-column" :class="{ sideNavShow: show }">
        <a class="navbar-brand sideNav-navbar-title page-scroll" href="#nav-wrapper">Royal Logo</a>
        <a class="nav-item nav-link text-uppercase page-scroll" href="#nav-wrapper">Home</a>
        <a class="nav-item nav-link text-uppercase page-scroll" href="#projects">Projects</a>
        <a class="nav-item nav-link text-uppercase page-scroll" href="#nav-wrapper">Resume</a>
        <a class="nav-item nav-link text-uppercase page-scroll" href="#stay-connected">Contact</a>
    </nav>
</template>

<script>
export default {
    name: 'SideNavigation',
    props: ['show'],
    watch: {

    }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/settings';

#sideNav {
  position: fixed;
  z-index: 10000;
  width: 100%;
  max-width: 16.25rem;
  top: 0;
  bottom: 0;
  left: -300px;
  transition: all 0.3s ease;
  padding: 1.45em 1em;
  border-right: 4px solid $primary;
  background-color: #fff;
  }

  #sideNav .sideNav-navbar-title {
    color: $primary;
    margin-bottom: .45em; }
    #sideNav .sideNav-navbar-title::after {
      content: none; }

.sideNavShow {
  transform: translateX(300px); 
}

.disable-scroll {
  overflow: hidden;
  height: 100%; 
}
</style>


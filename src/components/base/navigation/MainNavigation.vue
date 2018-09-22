<template>
  <header>
    <div class="container">
      <div class="nav-wrapper">
        <nav v-scroll="stickyNav" class="navbar navbar-expand-lg" id="mainNav">

          <router-link to="/" tag="a" class="navbar-brand">Royal Logo</router-link>

          <button @click="isToggled = !isToggled" class="navbar-toggler" type="button" aria-controls="mainNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end">
            <ul class="navbar-nav">
              <router-link to="/o-nama" active-class="active" tag="li" class="nav-item">
                <a class="nav-link text-uppercase">O nama</a></router-link>

              <router-link to="/usluge" active-class="active" tag="li" class="nav-item">
                <a class="nav-link text-uppercase">Usluge</a></router-link>

              <router-link to="/kontakt" active-class="active" tag="li" class="nav-item">
                <a class="nav-link text-uppercase">Kontakt</a></router-link>
            </ul>
          </div>

        </nav>
      </div> <!-- .nav-wrapper ends -->

    </div>

    <SideNavigation :show="isToggled" @wasToggled="isToggled = $event" @wasClicked="isToggled = $event" />

  </header>
</template>

<script>
import SideNavigation from './SideNavigation.vue'
export default {
  name: 'MainNavigation',
  data () {
    return {
      isToggled: false
    }
  },
  components: {
    SideNavigation
  },
  methods: {
    stickyNav (evt, el) {
      if (window.scrollY > 550) {
        el.classList.add('navbar-sticky')
      } else {
        el.classList.remove('navbar-sticky')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/settings';
header {
  padding: 18px 0;
}
.navbar-expand-lg {
  height: 70px;
}
.nav-link {
  letter-spacing: 1px;
  transition: $transition-primary;
  font-size: 16px;
  padding: 0 1.25rem !important;
  color: $text-primary !important;
  border-bottom: 1px solid transparent;
  &:hover, &:focus {
    color: $secondary-light !important;
  }
}
.nav-wrapper {
  width: 100%;
  height: 70px;
}

.navbar-sticky {
  position: fixed;
  background-color: #fff;
  box-shadow: $header-shadow;
  animation: ease-in-top 300ms ease-in;
  transition: $transition-primary;
  width: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  transform: translate3d(0, 0, 0);
}

.navbar-toggler {
  background-color: transparent;
  outline: none !important;
  font-size: 1.4rem;
  cursor: pointer;
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#5e35b1' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
}

@keyframes ease-in-top {
  from {
    transform: translateY(-84.44px);
  }
  to {
    transform: translateY(0);
  }
}
</style>

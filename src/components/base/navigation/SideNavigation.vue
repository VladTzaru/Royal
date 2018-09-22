<template>

    <nav id="sideNav" class="nav flex-column" :class="{ sideNavShow: show }">
        <router-link to="/" tag="a" class="navbar-brand">Royal Logo</router-link>
        <br>
        <router-link to="/o-nama" active-class="active" tag="li" class="nav-item">
            <a class="nav-link text-uppercase">O nama</a></router-link>
        <router-link to="/usluge" active-class="active" tag="li" class="nav-item">
            <a class="nav-link text-uppercase">Usluge</a></router-link>
        <router-link to="/kontakt" active-class="active" tag="li" class="nav-item">
            <a class="nav-link text-uppercase">Kontakt</a></router-link>
        <br><br>
        <a id="btn-closeSideNav" class="nav-link text-uppercase btn btn-primary" @click="closeSideNavigation" href="javascript:void(0)">Zatvori</a>
    </nav>
</template>

<script>
export default {
  name: 'SideNavigation',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    show (isToggled) {
      if (isToggled) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'auto'
      }
    },
    $route (to, from) {
      let isToggled = this.show
      isToggled = false
      this.$emit('wasClicked', isToggled)
    }
  },
  methods: {
    closeSideNavigation (e) {
      let isToggled = this.show
      if (isToggled) {
        isToggled = false
        this.$emit('wasToggled', isToggled)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/settings';

#sideNav {
  position: fixed;
  box-shadow: $box-shadow-primary;
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
  .navbar-brand {
      color: $primary;
  }
  }

.sideNavShow {
  transform: translateX(300px);
}

.disable-scroll {
  overflow: hidden;
  height: 100%;
}

#btn-closeSideNav {
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0;
    font-size: 12px;
    width: 100%;
}
</style>

<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <router-link to="/" tag="a" class="navbar-brand">Royal Logo</router-link>
        <button class="navbar-toggler" type="button" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="mainNav">
          <ul class="navbar-nav">
            <router-link to="/o-nama" active-class="active" tag="li" class="nav-item">
              <a class="nav-link text-uppercase">O nama</a></router-link>

            <router-link to="/usluge" active-class="active" tag="li" class="nav-item">
              <a class="nav-link text-uppercase">Usluge</a></router-link>

            <router-link to="/pitanja" active-class="active" tag="li" class="nav-item">
              <a class="nav-link text-uppercase">Pitanja</a></router-link>

            <router-link to="/kontakt" active-class="active" tag="li" class="nav-item">
              <a class="nav-link text-uppercase">Kontakt</a></router-link>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  name: 'MainNavigation'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/settings';
header {
  box-shadow: $header-shadow;
  padding: 18px 0;
}
.nav-link {
  transition: $transition-primary;
  font-size: 16px;
  padding: 0 1.25rem !important;
  color: $text-primary !important;
  border-bottom: 1px solid transparent;
  &:hover, &:focus {
    color: $secondary !important;
  }
}
</style>

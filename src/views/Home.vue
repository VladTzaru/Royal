<template>
  <Hero>
    <h1 slot="hero-title" class="display-4">Brza, jednostavna i povoljna rešenja</h1>
    <p slot="hero-text" class="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sed
    perspiciatis eius officia quisquam fugit ad a repellendus.</p>
    <router-link slot="hero-btn" class="btn btn-primary btn-pill" to="/usluge" tag="button">Saznajte više</router-link>
    <img slot="hero-img" src="../assets/img/wireless.jpg" class="img-thumbnail" alt="Creation process">
  </Hero>
</template>

<script>

import Hero from '../components/Hero.vue';
export default {
  name: 'home',
  components: {
    Hero
  }
}
</script>

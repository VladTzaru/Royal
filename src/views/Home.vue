<template>
<main>
  <Hero>
    <h1 slot="hero-title" class="display-4">Brza, jednostavna i povoljna rešenja</h1>
    <p slot="hero-text" class="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sed
      perspiciatis eius officia quisquam fugit ad a repellendus.</p>
    <router-link slot="hero-btn" class="btn btn-primary btn-pill" to="/usluge" tag="button">Saznaj više</router-link>
    <img slot="hero-img" src="../assets/img/wireless.jpg" class="d-none d-lg-block img-fluid img-thumbnail" alt="Creation process">
  </Hero>
  <Services />
  <Features/>
</main>

</template>

<script>

import Hero from '../components/Hero.vue';
import Services from '../components/services/Services.vue';
import Features from '../components/features/Features.vue';
export default {
  name: 'Home',
  components: {
    Hero,
    Services,
    Features
  }
}
</script>

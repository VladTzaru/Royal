<template>
<transition name="slide-top" appear>
  <main>
    <Hero>
      <h1 slot="hero-title" class="display-4">Royal &mdash; agencija za registraciju vozila</h1>
      <p slot="hero-text" class="lead mb-4">Da Vam tehnički pregled ne bude više noćna mora, nudimo Vam najbrže i najprofesionalnije usluge tehničkog pregleda.</p>
      <router-link slot="hero-btn" class="btn btn-primary btn-pill" to="/usluge" tag="button">Saznaj više</router-link>
      <img slot="hero-img" src="../assets/img/business-min.jpg" class="d-none d-lg-block img-fluid img-thumbnail" alt="Registracija vozila | Royal">
    </Hero>
    <Services />
    <Features/>
    <Testimonials/>
    <Cta>
        <h2 slot="cta-title" class="mb-4">Ako imate pitanja, imamo odgovore.</h2>
        <router-link slot="cta-btn" class="btn btn-primary btn-pill" to="/kontakt" tag="button">Kontaktirajte nas</router-link>
    </Cta>
  </main>
</transition>

</template>

<script>

import Hero from '../components/hero/Hero.vue'
import Services from '../components/services/Services.vue'
import Features from '../components/features/Features.vue'
import Testimonials from '../components/testimonials/Testimonials.vue'
import Cta from '../components/Cta.vue'
export default {
  name: 'Home',
  metaInfo: {
    title: 'Osiguranje i registracija vozila | Royal',
    meta: [{
      vmid: 'description',
      name: 'description',
      content: 'Da Vam tehnički pregled ne bude više noćna mora, nudimo Vam najbrže i najprofesionalnije usluge tehničkog pregleda.'
    }]
  },
  components: {
    Hero,
    Services,
    Features,
    Testimonials,
    Cta
  }
}
</script>

<template>
    <transition name="slide-top" appear>
        <main>
            <Hero>
                <h1 slot="hero-title" class="display-4">Kontakt</h1>
                <p slot="hero-text" class="lead mb-4">Obratite nam se ukoliko imate bilo kakvih pitanja, trudićemo se da Vam odgovorimo u najkraćem vremenskom roku.</p>
                <img slot="hero-img" src="../assets/img/contact.jpg" class="d-lg-block img-fluid img-thumbnail"
                    alt="Kontakt | Royal">
            </Hero>
            <Contacts class="mt-4" />
            <div class="container mt-5">
                <div id="tim" class="row justify-content-center">
                    <div class="col-lg-9"><TeamMembers /></div>
                </div>
            </div>
        </main>
    </transition>
</template>

<script>
import Hero from '../components/hero/Hero.vue';
import Contacts from '../components/contact/Contacts.vue';
import TeamMembers from '../components/team/TeamMembers.vue';
export default {
    name: 'ContactView',
    metaInfo: {
        title: 'Kontakt | Royal',
        meta: [{
            vmid: 'description',
            name: 'description',
            content: 'Ukoliko imate bilo kakva pitanja vezana uz naše usluge, slobodno nas kontaktirajte.'
        }],
    },
    components: {
        Hero, 
        Contacts,
        TeamMembers
    }
}
</script>


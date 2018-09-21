<template>
    <section>
        <div class="bg-skew bg-skew-light">

            <!-- Icon blocks -->
            <div class="container">
                <div class="row pt-5">
                    <Service v-for="(service, i) in services"
                    :key="i"
                    :service="service"/>
                </div>
            </div>

            <!-- Call to action -->
            <Cta>
                <h2 slot="cta-title" class="mb-4">Saznajte više o nama.</h2>
                <router-link slot="cta-btn" class="btn btn-primary btn-pill" to="/o-nama" tag="button">Pogledaj</router-link>
                <router-link slot="cta-link" class="cta-link" to="/o-nama" tag="a">Saznaj više</router-link>
            </Cta>

        </div>
    </section>

</template>

<script>
import Service from './Service.vue';
import Cta from '../Cta.vue';
export default {
    name: 'Services',
    data() {
        return {
            services: [
                {title: 'Registracija vozila', description: 'Inače neugodan i dug proces je konačno postao jednostavan i povoljan.', icon: 'fas fa-car'},
                {title: 'Tehnicki pregled vozila', description: 'Sprovođenje tehničkog pregleda vozila bez Vašeg prisustva.', icon: 'fas fa-wrench'},
                {title: 'Osiguranje ', description: "Iskoristite mogućnost povoljnijeg osiguranja Vašeg vozila.", icon: 'fas fa-hand-holding-heart'},
                {title: 'Pay spot', description: 'Brzo i lako plaćanje svih računa. Komunalije, Telekom, mobilni operateri, Srbijagas...', icon: 'fas fa-money-bill-wave'}
            ]
        }
    },
    components: {
        Service,
        Cta
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/settings';
h2.mb-4 {
    color: $secondary-text;
}
</style>



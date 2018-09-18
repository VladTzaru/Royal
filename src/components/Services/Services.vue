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
                {title: 'Service 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum facilisis dictum.', icon: 'fab fa-accessible-icon'},
                {title: 'Service 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum facilisis dictum.', icon: 'fab fa-sass'},
                {title: 'Service 3', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum facilisis dictum.", icon: 'fab fa-font-awesome-flag'},
                {title: 'Service 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: 'fas fa-mobile-alt'},
                {title: 'Service 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: 'fab fa-gulp'},
                {title: 'Service 6', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", icon: 'fas fa-code'}
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



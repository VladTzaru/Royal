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
            <hr class="hr-rule border-secondary">
            <div class="container py-5">
                <div class="text-center">
                    <h2 class="mb-4">Saznajte više o nama, kako radimo i zašto smo bolji od drugih</h2>
                    <div class="mb-4">
                        <router-link slot="hero-btn" class="btn btn-primary btn-pill" to="/kontakt" tag="button">Pogledaj</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import Service from './Service.vue';
export default {
    name: 'Services',
    data() {
        return {
            services: [
                {title: 'Accessible', description: 'Built with accessibility in mind and following best practices.', icon: 'fab fa-accessible-icon'},
                {title: 'Sass Files', description: 'Easily customize your site modifying the source scss files.', icon: 'fab fa-sass'},
                {title: 'Font Awesome', description: "More than 1200 vector icons from the web's most popular icon set.", icon: 'fab fa-font-awesome-flag'},
                {title: 'Mobile First', description: 'Mobile-first flexbox grid to build layouts of all shapes and sizes.', icon: 'fas fa-mobile-alt'},
                {title: 'Gulp', description: 'Automated workflow for your development tasks.', icon: 'fab fa-gulp'},
                {title: 'Valid Code', description: "W3C valid code to ensure the site works properly on all major browsers.", icon: 'fas fa-code'}
            ]
        }
    },
    components: {
        Service
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/settings';
h2.mb-4 {
    color: $secondary-text;
}
</style>



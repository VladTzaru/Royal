<template>
    <section>
        <div class="hero-cover d-flex align-items-center position-relative py-5 py-lg-6 mb-4" :style="{'background-image': 'url(' + require(`@/assets/img/work.jpg`) + ')'}">
            <div class="hero-overlay hero-primary opacity-8"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="display-4 text-white">Mi smo mali tim sa velikim idejama.</h1>
                        <p class="lead text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias magni minus sint eligendi?</p>
                        <router-link slot="hero-btn" class="btn btn-primary btn-pill" to="/kontakt" tag="button">Kontaktirajte nas</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HeroFluid'
}
</script>


<style lang="scss" scoped>
@import '../../assets/scss/settings';
.btn-primary {
    background-color: #fff;
    color: $text-primary;
     &:hover, &:focus, &:active, &:visited {
      background-color: #fff !important;
      box-shadow: $box-shadow-hover;
      color: $text-primary !important;
      outline: none !important;
    }
}
.hero-cover {
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
}
.opacity-8 {
    opacity: 0.8;
}
.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.hero-primary {
    background-color: $primary !important;
}
</style>


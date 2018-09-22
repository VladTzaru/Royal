<template>
    <section>
        <div class="bg-skew bg-skew-light">
            <div class="container">
                <h2 class="h3 mt-5 mb-4 text-center">Šta ljudi govore o nama...</h2>
                <div class="row py-5">
                    <div class="col-md">
                        <blockquote class="bg-white rounded mb-4 p-4 p-lg-5 text-center">
                            <img class="avatar avatar-frame mb-4" src="../../assets/img/leo-gill-min.jpg" alt="Leo Gill | Royal">
                            <p class="text-secondary">Profesionalan pristup radu i veoma prijatni ljudi.</p>
                            <cite class="small text-uppercase">Aleksandar Milić</cite>
                        </blockquote>
                    </div>
                    <div class="col-md">
                        <blockquote class="bg-white rounded mb-4 p-4 p-lg-5 text-center">
                            <img class="avatar avatar-frame mb-4" src="../../assets/img/renee-sims-min.jpg" alt="Renee Sims |Royal">
                            <p class="text-secondary">Prezadovoljna! Registracija vozila nikad nije bila jednostavnija. Hvala Royal timu!</p>
                            <cite class="small text-uppercase">Ana Pavlović</cite>
                        </blockquote>
                    </div>
                    <div class="col-md">
                        <blockquote class="bg-white rounded mb-4 p-4 p-lg-5 text-center">
                            <img class="avatar avatar-frame mb-4" src="../../assets/img/dallas-kwok-min.jpg" alt="Dallas Kwok | Royal">
                            <p class="text-secondary">Sjajni ljudi, veoma uslužni i profesionalni.</p>
                            <cite class="small text-uppercase">Dušan Purić</cite>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
export default {
  name: 'Testimonials'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/settings';
h2 {
    color: $secondary-text;
}
.avatar-frame {
    width: 64px;
    height: 64px;
}
.avatar {
    border-radius: 50%;
}
blockquote {
    box-shadow: $box-shadow-primary;
}
cite {
    color: $secondary;
    font-style: normal;
    letter-spacing: 0.1rem;
}
</style>

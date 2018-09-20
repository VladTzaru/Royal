<template>
    <section>
        <div class="bg-skew bg-skew-light">
            <div class="container">
                <h2 class="h3 mt-5 mb-4 text-center">Šta ljudi govore o nama...</h2>
                <div class="row py-5">
                    <div class="col-md">
                        <blockquote class="bg-white rounded mb-4 p-4 p-lg-5 text-center">
                            <img class="avatar avatar-frame mb-4" src="../../assets/img/leo-gill.jpg" alt="Leo Gill">
                            <p class="text-secondary">Boost theme is awesome! We've seen amazing results already.</p>
                            <cite class="small text-uppercase">Leo Gill</cite>
                        </blockquote>
                    </div>
                    <div class="col-md">
                        <blockquote class="bg-white rounded mb-4 p-4 p-lg-5 text-center">
                            <img class="avatar avatar-frame mb-4" src="../../assets/img/renee-sims.jpg" alt="Renee Sims">
                            <p class="text-secondary">It really saves me time and effort. Boost theme is exactly what
                                our
                                business has been lacking.</p>
                            <cite class="small text-uppercase">Renee Sims</cite>
                        </blockquote>
                    </div>
                    <div class="col-md">
                        <blockquote class="bg-white rounded mb-4 p-4 p-lg-5 text-center">
                            <img class="avatar avatar-frame mb-4" src="../../assets/img/dallas-kwok.jpg" alt="Dallas Kwok">
                            <p class="text-secondary">Boost theme impressed me on multiple levels.</p>
                            <cite class="small text-uppercase">Dallas Kwok</cite>
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
}
</style>


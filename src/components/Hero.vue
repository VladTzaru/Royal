<template>
    <section>
        <div class="container">
            <div class="row justify-content-lg-between align-items-lg-center py-5">
                <div class="col-lg-6">
                    <slot name="hero-title"></slot>
                    <slot name="hero-text"></slot>
                    <slot name="hero-btn"></slot>
                </div>
                <div class="col-lg-6">
                    <slot name="hero-img"></slot>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../assets/scss/settings';
.img-thumbnail {
    box-shadow: $box-shadow-primary;
}
</style>

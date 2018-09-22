<template>
<section>
    <div class="container py-5">
        <hr class="hr-rule border-secondary">
        <div class="text-center">
            <slot name="cta-title"></slot>
            <div class="mb-4">
                <slot name="cta-btn"></slot>
            </div>
            <slot name="cta-link"></slot>
        </div>
    </div>
</section>

</template>

<style lang="scss" scoped>
@import '../assets/scss/settings';
.cta-link {
    border-bottom: 2px solid $primary;
    transition: $transition-primary;
    font-size: 15px;
    letter-spacing: 1px;
    padding-bottom: 2px;
    text-transform: uppercase;
    &:hover {
        color: $primary;
    }
}
</style>

<template>
    <div class="col-sm-6 col-lg-4 contact-divider">
        <div class="text-center py-5">
            <span class="contact-icon contact-icon-blue mb-4">
                <span :class="contact.icon" class="icon-inner"></span>
            </span>
            <h2 class="h6 mb-1">{{contact.category}}</h2>
            <p class="mb-0">{{contact.content}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    props: {
        contact: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/settings';
.contact-space-2 {
    padding-top: 4.0625rem;
    padding-bottom: 4.0625rem;
}
.contact-divider {
    position: relative;
    &:after {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      border-right: 1px solid rgba(0,0,0,.1);
      content: "";
    }
}

.contact-icon-blue {
    color: $secondary-light;
    background: #fff;
}

.contact-icon {
    position: relative;
    z-index: 1;
    line-height: 0.7;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    width: 44px;
    height: 44px;
    font-size: 22px;
    border-radius: 50%;
    transition: $transition-primary;
    box-shadow: $box-shadow-primary;
}

h2, p {
  color: $secondary-text;
}
</style>
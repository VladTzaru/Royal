<template>
<div class="col-sm-6 mb-4 mb-md-5">
    <span class="icon icon-primary mb-3">
        <i class="icon-inner" :class="service.icon" aria-hidden="true"></i>
    </span>
    <h3 class="h4">{{service.title}}</h3>
    <p class="mb-md-0">{{service.description}}</p>
</div>
</template>

<script>
export default {
  name: 'Service',
  props: {
    service: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/settings';

h3 {
    font-size: 32px;
}
p {
    font-size: 18px;
}
h3, p {
    color: $secondary-text;
}
.icon {
    border-radius: 50%;
    display: inline-block;
    position: relative;
    text-align: center;
    font-size: 32px;
    width: 5.25rem;
    height: 5.25rem;
    margin: 0 auto;
    box-shadow: $box-shadow-primary;
}

.icon-primary {
    background-color: #fff;
    color: $secondary-light;
}

@media screen and (max-width: 576px) {
  div {
    text-align: center;
  }
}
</style>

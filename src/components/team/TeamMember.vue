<template>
    <div class="col-sm-6 col-xl-4">
        <div class="card my-3">
            <img :alt="member.name" class="card-img-top h-100" :src="require(`@/assets/img/${member.imgSrc}`)">
            <div class="card-body text-center">
                <h4 class="card-title h5">{{member.name}}</h4>
                <p class="text-secondary">{{member.position}}</p>
                <a class="icon icon-sm" :href="`mailto:${member.contact}`">
                    <i class="fas fa-envelope icon-inner"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TeamMember',
  props: {
    member: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/settings';
.text-secondary {
    color: $primary !important;
}
.icon {
    border-radius: 50%;
    transition: $transition-primary;
    display: inline-block;
    font-size: 18px;
    position: relative;
    text-align: center;
    color: #fff;
    width: 34px;
    height: 34px;
    background-color: $primary-light;
    &:hover {
        background-color: $primary;
    }
}
</style>

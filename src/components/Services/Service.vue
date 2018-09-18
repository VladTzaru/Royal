<template>   
<div class="col-sm-6 col-md-4 mb-4 mb-md-5">
    <div class="pr-lg-3">
        <span class="icon icon-primary mb-3">
            <i :class="service.icon" aria-hidden="true"></i>
        </span>
        <h3 class="h4">{{service.title}}</h3>
        <p class="mb-md-0">{{service.description}}</p>
    </div>
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
i {
    font-size: 34px;
    color: $secondary-text;
}
h3 {
    font-size: 32px;
}
p {
    font-size: 18px;
}
h3, p {
    color: $secondary-text;
}

</style>



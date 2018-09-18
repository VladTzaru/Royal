<template>
    <div class="row justify-content-lg-between align-items-lg-center py-4 py-lg-5">
        <div :class="setPosition()[0]" class="col-lg-5 mb-4 mb-lg-0">
            <h2>{{title}}</h2>
            <hr class="hr-rule border-secondary ml-0 mb-3 text-left">
            <p>{{description}}</p>
        </div>
        <div :class="setPosition()[1]" class="col-lg-6">
            <img :src="require(`@/assets/img/${imgSrc}`)" class="img-fluid img-thumbnail" :alt="alt">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Feature',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imgSrc: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    },
    methods: {
        setPosition() {
            const setup = [];
            if (this.position === 'img-right') {
                setup.push.apply(setup, ['order-lg-1', 'order-lg-2']);
                return setup;
            } else {
                setup.push.apply(setup, ['order-lg-2', 'order-lg-1']);
                return setup;
            }
        }
    }
}
</script>


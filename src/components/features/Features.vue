<template>
    <section>
        <div class="container">
            <Feature
                title="Radimo kako znamo i umemo"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum aperiam eos mollitia asperiores doloribus, quod non deserunt autem sed? "
                imgSrc="people.jpg"
                position="img-right"
                alt="Finance results"/>
            
            <Feature
                title="Ratomire, ovo izgleda cool!"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eum aperiam eos mollitia asperiores doloribus, quod non deserunt autem sed? "
                imgSrc="woman.jpg"
                position="img-left"
                alt="Woman is nice"/>
        </div>
        lorem
    </section>
</template>

<script>
import Feature from './Feature.vue';
export default {
    name: 'Features',
    components: {
        Feature
    }
}
</script>
<template>
    <Contact/>
</template>

<script>
import Contact from '../components/base/Contact.vue';
export default {
    name: 'ContactView',
    metaInfo: {
        title: 'Kontakt | Royal'
    },
    meta: [{
      vmid: 'description',
      name: 'description',
      content: 'Kontaktirajte nas brzo, mi to volimo.'
    }],
    components: {
        Contact
    }
}
</script>


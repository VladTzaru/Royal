<template>
    <section>
        <div class=" u-space-2">
            <div class="row">
                <Contact v-for="(contact, i) in contactInfo"
                :key="i"
                :contact="contact"/>
            </div>
            <hr class="my-0"> 
        </div>
    </section>
</template>

<script>
import Contact from './Contact.vue';
export default {
    name: 'Contacts',
    data() {
      return {
        contactInfo: [
            {category: 'Address', content: '153 Williamson Plaza, 09514', icon: 'fa fa-map-marker-alt'},
            {category: 'Email', content: 'support@royal.com', icon: 'fa fa-envelope'},
            {category: 'Phone Number', content: '+381 (65) 139-9222', icon: 'fa fa-phone'},
            {category: 'Fax', content: '+381 (65) 139-9222', icon: 'fa fa-fax'}
        ]
      }
    },
    components: {
        Contact
    }
}
</script>
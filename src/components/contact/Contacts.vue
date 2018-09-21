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
            {category: 'Adresa', content: 'Bulevar kralja Petra I 23, Novi Sad', icon: 'fa fa-map-marker-alt'},
            {category: 'Email', content: 'support@royal.com', icon: 'fa fa-envelope'},
            {category: 'Telefon', content: "069-151-3665 | 069-151-3666", icon: 'fa fa-phone'}
        ]
      }
    },
    components: {
        Contact
    }
}
</script>
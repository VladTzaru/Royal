<template>
    <section>
        <div class="container">
            <Feature
                title="Brzo i povoljno."
                description="U saradnji sa DDOR osiguranjem nudimo Vam sva imovinska, putna, vizna i životna osiguranja. Brzo i povoljno ih možete ugovoriti u našoj agenciji."
                imgSrc="people.jpg"
                position="img-right"
                alt="Polisa osiguranja | Royal"/>
            
            <Feature
                title="Registracija vozila bez muke."
                description="Registrovati vozilo možete od sada i dok ste na radnom mestu. Na Vama je samo da nas pozovete i zakazete termin."
                imgSrc="woman.jpg"
                position="img-left"
                alt="Registracija vozila | Royal"/>
        </div>
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
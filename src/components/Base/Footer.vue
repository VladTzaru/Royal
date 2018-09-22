<template>
    <footer class="site-footer mt-5">
        <div class="container">
            <div class="row justify-content-md-between">
                <div class="col-sm-12 col-md-5 mb-4">
                    <h3 class="h5 mb-3">Royal d.o.o.</h3>
                    <p class="mb-0">Agencija za registraciju vozila.</p>
                    <p>PIB: 110986388</p>
                     <ul class="nav flex-column">
                        <li class="mb-1"><a href="tel:069-151-3665">069-151-3665</a></li>
                        <li class="mb-1"><a href="tel:069-151-3666">069-151-3666</a></li>
                        <li class="mb-1"><a href="mailto:info@royal.com">info@royal.com</a></li>
                    </ul>
                </div>
                <div class="col-sm-12 col-md-4 mb-4">
                    <h3 class="h5 mb-3">Usluge</h3>
                    <ul class="nav flex-column">
                        <li class="mb-1"><a href="javascript:void(0)">Registracija vozila</a></li>
                        <li class="mb-1"><a href="javascript:void(0)">Tehnički pregled</a></li>
                        <li class="mb-1"><a href="javascript:void(0)">Ugovaranje polise osiguranja</a></li>
                        <li class="mb-1"><a href="javascript:void(0)">Pay spot</a></li>
                    </ul>
                </div>
                <div class="col-sm-12 col-md-3 mb-4">
                    <h3 class="h5 mb-3">O nama</h3>
                    <ul class="nav flex-column">
                        <router-link class="mb-1" tag="li" to="/o-nama">
                            <a>Naš tim</a>
                        </router-link>
                        <router-link class="mb-1" tag="li" to="/kontakt">
                            <a>Kontakt</a>
                        </router-link>
                        
                    </ul>
                </div>
            </div>

            <hr class="m-0">

            <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-center mt-4">
                <p class="small text-muted">&copy; Royal {{getCurrentYear()}}</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    methods: {
        getCurrentYear() {
            const d = new Date();
            return d.getFullYear();
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/settings';
.site-footer {
    background-color: $dim-text;
    padding-top: 44px;
}
</style>
<template>
    <footer class="site-footer mt-5">
        <div class="container">
            <div class="row justify-content-md-between">
                <div class="col-sm-12 col-md-4 mb-4">
                    <h3 class="h5 mb-3">Royal d.o.o.</h3>
                    <p>Bulevar kralja Petra I 23, Novi Sad</p>
                    <p><a href="tel:069-151-3665">069-151-3665</a></p>
                    <p><a href="tel:069-151-3666">069-151-3666</a></p>
                    <a href="mailto:info@royal.com">info@royal.com</a>
                </div>
                <div class="col-4 col-md-2 mb-4">
                    <h3 class="h5 mb-3">O nama</h3>
                    <ul class="nav flex-column">
                        <li class="mb-1"><a href="#">Naš tim</a></li>
                        <li class="mb-1"><a href="#">Careers</a></li>
                        <li class="mb-1"><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div class="col-4 col-md-2 mb-4">
                    <h3 class="h5 mb-3">Usluge</h3>
                    <ul class="nav flex-column">
                        <li class="mb-1"><a href="#">Registracija vozila</a></li>
                        <li class="mb-1"><a href="#">Tehnički pregled vozila</a></li>
                        <li class="mb-1"><a href="#">Osiguranje</a></li>
                        <li class="mb-1"><a href="#">Pay spot</a></li>
                    </ul>
                </div>
                <div class="col-4 col-md-2 mb-4">
                    <h3 class="h5 mb-3">Pomoć</h3>
                    <ul class="nav flex-column">
                        <li class="mb-1"><a href="#">FAQ</a></li>
                        <li class="mb-1"><a href="#">Kontakt</a></li>
                    </ul>
                </div>
            </div>

            <hr class="m-0">

            <div class="d-flex flex-column flex-sm-row justify-content-sm-between align-items-center mt-4">
                <p class="small text-muted">&copy; Tzaru 2018</p>
                <ul class="list-inline">
                    <li class="list-inline-item">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/settings';
.site-footer {
    background-color: $dim-text;
    padding-top: 44px;
}
</style>



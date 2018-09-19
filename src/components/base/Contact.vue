<template>
    <main>
        <div class="container">
            <h1 class="display-4 mb-5 py-5 text-center">Kontakt</h1>
        </div>
        <div class="bg-skew bg-skew-light">
            <div class="container">
                <div class="row justify-content-lg-center">
                    <div class="col-lg-9">
                        <p>Molimo popunite formular ispod i javićemo vam se što pre.</p>
                        <p class="small">Polja označena sa &#42; su obavezna.</p>
                        <form class="py-4">
                            <div class="form-group">
                                <label for="inputName" class="small text-uppercase">Ime &#42;</label>
                                <input v-model.lazy="userInfo.name" type="text" class="form-control" id="inputName" placeholder="Unesite vaše ime" required="">
                            </div>
                            <div class="form-group">
                                <label for="inputLastname" class="small text-uppercase">Prezime &#42;</label>
                                <input v-model.lazy="userInfo.lastname" type="text" class="form-control" id="inputLastname" placeholder="Unesite vaše prezime" required="">
                            </div>
                            <div class="form-group">
                                <label for="inputPhone" class="small text-uppercase">Telefon</label>
                                <input v-model.lazy="userInfo.lastname" type="text" class="form-control" id="inputPhone" placeholder="Unesite vaš broj telefona">
                            </div>
                            <div class="form-group">
                                <label for="inputEmail" class="small text-uppercase">Email &#42;</label>
                                <input v-model.lazy="userInfo.email" type="email" class="form-control" id="inputEmail" placeholder="Unesite email adresu" required="">
                            </div>
                            <div class="form-group">
                                <label for="messageTetxarea" class="small text-uppercase">Poruka &#42;</label>
                                <textarea v-model.lazy="message" class="form-control rounded" id="messageTetxarea" rows="9" placeholder="Unesite poruku" required=""></textarea>
                            </div>
                            <button type="submit" class="btn btn-pill btn-primary">Pošalji</button>
                        </form>
                    </div>
                </div>
            </div>
        </div><!-- end bg-skew -->
    </main>
</template>

<script>
export default {
    name: 'Contact_View',
    data() {
        return {
           userInfo: {
               name: '',
               email: ''
           },
           message: ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/settings';
.disabled {
  background: $primary !important;
  pointer-events: none;
}
p, label {
    color: $secondary-text !important;
}
</style>



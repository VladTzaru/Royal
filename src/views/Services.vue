<template>
    <transition name="slide-right" appear>
        <main>
            <h1 class="display-4 py-5 text-center">Services</h1>
            <div class="bg-light mb-5 py-5 py-lg-6">
                <div class="container text-center">
                    <div class="row justify-content-lg-center py-5">
                        <div class="col-lg-8">
                            <h2 class="mb-4">We do stuff</h2>
                            <p class="lead">Go back go
                                <router-link tag="a" to="/">homepage</router-link> and see if you can find what you are
                                looking for.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </transition>
</template>

<script>
export default {
    name: 'Services',
    metaInfo: {
        title: 'Usluge | Royal',
        meta: [{
            vmid: 'description',
            name: 'description',
            content: 'Naše usluge su odlične, samo dođite.'
        }]
    },

}
</script>
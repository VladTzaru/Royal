<template>
    <main id="content">
        <h1 class="display-4 py-5 text-center">Page not found</h1>
        <div class="bg-light mb-5 py-5 py-lg-6">
            <div class="container text-center">
                <div class="row justify-content-lg-center py-5">
                    <div class="col-lg-8">
                        <h2 class="mb-4">Error 404</h2>
                        <p class="lead">The page you are looking for no longer exists. Perhaps you can go to the
                            <router-link tag="a" to="/">homepage</router-link> and see if you can find what you are
                            looking for.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
  name: 'PageNotFound'
}
</script>

<template>
    <section>
        <div class="container">
            <h1 class="display-4 my-5 my-lg-6 text-center">O nama</h1>
        </div>
        <div class="container">
                <h2 class="lead text-center mb-5">We are a small team with passion for our work</h2>
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quis! Nemo voluptate facere, minima consequuntur tempora quia corrupti? Iste vitae cupiditate dicta, eveniet incidunt accusantium qui aperiam provident soluta dolor?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quis! Nemo voluptate facere, minima consequuntur tempora quia corrupti? Iste vitae cupiditate dicta, eveniet incidunt accusantium qui aperiam provident soluta dolor?</p>
                        <hr class="hr-rule border-secondary mt-4 mb-5">
                        <h3 class="text-center mb-4">Upoznajte tim</h3>
                        <TeamMembers/>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
import TeamMembers from '../team/TeamMembers.vue';
export default {
    name: 'CompanyInfo',
    components: {
        TeamMembers
    }
}
</script>


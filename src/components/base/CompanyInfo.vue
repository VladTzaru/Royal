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
                        <h3 class="text-center mb-4">Meet the team</h3>
                        <div class="row">
                            <TeamMember v-for="(member, i) in team"
                            :key="i"
                            :member="member"/>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
import TeamMember from './TeamMember.vue';
export default {
    name: 'CompanyInfo',
    data() {
        return {
            team: [
                {name: 'Ratko Bojovic', position: 'CEO', contact: 'ratko@royal.com', imgSrc: 'ratko.jpg'},
                {name: 'Vladimir Bojovic', position: 'Web Developer', contact: 'vladimir@royal.com', imgSrc: 'vladimir.jpg'},
                {name: 'Micko Bojovic', position: 'Seljak iz Misevica', contact: 'misevici@royal.com', imgSrc: 'micko.jpg'}
            ]
        }
    },
    components: {
        TeamMember
    }
}
</script>


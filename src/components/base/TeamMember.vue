<template>
    <div class="col-sm-6 col-xl-4">
        <div class="card card-hover my-3">
            <img class="card-img-top h-100" src="../../assets/img/leo-gill.jpg" alt="">
            <div class="card-body text-center">
                <h4 class="card-title h5">{{member.name}}</h4>
                <p class="text-secondary">{{member.position}}</p>
                <a :href="member.contact" class="card-link">Contact</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeamMember',
    props: {
        member: {
            type: Object,
            required: true
        }
    }
}
</script>


<template>
    <div class="row">
        <TeamMember v-for="(member, i) in team"
            :key="i"
            :member="member"/>
    </div>
</template>

<script>
import TeamMember from './TeamMember.vue'
export default {
  name: 'TeamMembers',
  data () {
    return {
      team: [
        { name: 'Aleksandar Pavić', position: 'Vlasnik', contact: 'ratko@royal.com', imgSrc: 'ratko-min.jpg' },
        { name: 'Vladimir Bojovic', position: 'Web Developer', contact: 'vladimir@royal.com', imgSrc: 'vladimir-min.jpg' },
        { name: 'Micko Bojovic', position: 'Seljak iz Misevica', contact: 'misevici@royal.com', imgSrc: 'micko-min.jpg' }
      ]
    }
  },
  components: {
    TeamMember
  }

}
</script>

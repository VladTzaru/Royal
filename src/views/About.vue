<template>
<transition name="slide-left" appear>
  <main>
    <HeroFluid/>
    <CompanyInfo id="info"/>
  </main>
</transition>

</template>

<script>

import HeroFluid from '../components/hero/HeroFluid.vue'
import CompanyInfo from '../components/base/CompanyInfo.vue'
export default {
  name: 'About',
  metaInfo: {
    title: 'O nama | Royal',
    meta: [{
      vmid: 'description',
      name: 'description',
      content: 'Mi smo mali tim sa velikim idejama.'
    }]
  },
  components: {
    HeroFluid,
    CompanyInfo
  }
}
</script>

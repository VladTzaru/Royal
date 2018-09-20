<template>
<main>
  <HeroFluid/>
  <CompanyInfo/>
</main>
</template>

<script>

import HeroFluid from '../components/hero/HeroFluid.vue';
import CompanyInfo from '../components/base/CompanyInfo.vue';
export default {
  name: 'About',
  metaInfo: {
    title: 'O nama | Royal'
  },
  components: {
    HeroFluid,
    CompanyInfo
  }
}
</script>



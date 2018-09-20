import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Meta from 'vue-meta'

// DIRECTIVES
Vue.directive('scroll', {
  inserted (el, binding) {
    let f = evt => {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
});

// META SETUP
Vue.use(Meta, {
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  // ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

Vue.config.productionTip = false

// INSTANCE
new Vue({
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')

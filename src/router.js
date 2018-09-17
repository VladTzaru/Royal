import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'naslovna',
      component: Home
    },
    {
      path: '/o-nama',
      name: 'o-nama',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "o-nama" */ './views/About.vue')
    },
    {
      path: '/usluge',
      name: 'usluge',
      component: () => import(/* webpackChunkName: "usluge" */ './views/Services.vue')
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import(/* webpackChunkName: "kontakt" */ './views/Contact.vue')
    }
  ]
})

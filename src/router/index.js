import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index.vue'
import overview from '../view/overview.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/overview',
      name: 'overview',
      component: overview
    },
  ]
})

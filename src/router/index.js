import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index.vue'
import overview from '../view/Overview.vue'
import approval from '../view/Approval.vue'
import execution from '../view/Execution.vue'
import proposed from '../view/Proposed.vue'
import My from '../view/My.vue'
import MyHold from '../view/MyHold.vue'
import UrgentMatter from '../view/UrgentMatter.vue'
import Opinion from '../view/Opinion.vue'
import ViewReport from '../view/ViewReport.vue'

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
    {
      path: '/approval',
      name: 'approval',
      component: approval
    },
    {
      path: '/execution',
      name: 'execution',
      component: execution
    },
    {
      path: '/proposed',
      name: 'proposed',
      component: proposed
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/MyHold',
      name: 'MyHold',
      component: MyHold
    },
    {
      path: '/UrgentMatter',
      name: 'UrgentMatter',
      component: UrgentMatter
    },
    {
      path: '/Opinion',
      name: 'Opinion',
      component: Opinion
    },
    {
      path: '/ViewReport',
      name: 'ViewReport',
      component: ViewReport
    },
  ]
})

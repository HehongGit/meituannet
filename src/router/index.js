import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import defaultPage from '@/layout/default.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/defaultPage',
      component: defaultPage
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../layout/blank.vue')
    }
  ]
})

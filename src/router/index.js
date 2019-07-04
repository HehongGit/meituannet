import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: '/defaultPage',
    redirect: '/index',
    component: defaultPage,
    children: [{
      path: 'index',
      name: 'index',
      component: () => import('../page/index.vue')
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../layout/blank.vue')
  }
  ]
})

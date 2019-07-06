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
    },
    {
      path: 'changeCity',
      name: 'changeCity',
      component: () => import('../page/changeCity.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../page/category.vue')
    },
    {
      path: '/changeCity',
      name: 'changeCity',
      component: () => import('../page/changeCity.vue')
    }
    ]
  },
  {
    path: '/blank',
    name: 'blank',
    component: () => import('../layout/blank.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('../page/login.vue')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('../page/register.vue')
      }
    ]
  }

  ]
})

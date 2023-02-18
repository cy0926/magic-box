import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '@/pages/indexName.vue'
import Login from '@/pages/loginName.vue'
import NotFound from '@/pages/errorName.vue'

// const routes = []

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

export default router

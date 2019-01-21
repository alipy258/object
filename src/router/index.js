import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/home/home')
    },
    {
      path: '/like',
      name: 'like',
      component: () => import('@/components/like/like')
    },
    {
      path: '/vip',
      name: 'vip',
      component: () => import('@/components/vip/vip')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

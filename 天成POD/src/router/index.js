import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  // 中文版
  {
    path: '/',
    name: 'home',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/ai',
    query: '/ai',
    component: () => import('../views/cnversion/ai.vue')
  },
  {
    path: '/hpc',
    query: '/hpc',
    component: () => import('../views/cnversion/hpc.vue')
  },
  {
    path: '/yunnao',
    query: '/yunnao',
    component: () => import('../views/cnversion/yunnao.vue')
  },
  {
    path: '/university',
    query: '/university',
    component: () => import('../views/cnversion/university.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
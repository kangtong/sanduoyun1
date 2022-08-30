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
    component: HomeView
  },
  {
    path: '/guangshiliandong',
    component: () => import('../components/guagnshiliandong.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router

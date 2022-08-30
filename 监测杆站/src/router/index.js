import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  // 中文版
  {
    path: '/wudianchangxuhang',
    component: () => import('../views/homechildren/wudianchangxuhang.vue')
  },
  {
    path: '/wuwangwenhuichuan',
    component: () => import('../views/homechildren/wuwangwenhuichuan.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

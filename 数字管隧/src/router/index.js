import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  // // 中文版
  {
    path: '/suidao',
    component: () => import('../views/cnversion/suidao.vue')
  },
  {
    path: '/guanlang',
    component: () => import('../views/cnversion/guanlang.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

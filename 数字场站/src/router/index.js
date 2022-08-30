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
    path: '/quanjingganzhi',
    component: () => import('../views/cnversion/quanjingganzhi.vue')
  },
  {
    path: '/zhinengxunjian',
    component: () => import('../views/cnversion/zhinengxunjian.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router

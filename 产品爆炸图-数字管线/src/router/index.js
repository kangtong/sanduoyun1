import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  // 中文版二级页面
  {
    path: '/youqiguanxian',
    component: () => import('../views/cnversion/youqiguanxian.vue')
  },
  {
    path: '/shudianxianlu',
    component: () => import('../views/cnversion/shudianxianlu.vue')
  },
  {
    path: '/guansui',
    component: () => import('../views/cnversion/guansui.vue')
  },
  // 中文版三级页面
  {
    path: '/shudianthreeone',
    component: () => import('../views/cnthreeview/shudianthreeone.vue')
  },
  {
    path: '/shudianthreetwo',
    component: () => import('../views/cnthreeview/shudianthreetwo.vue')
  },
  {
    path: '/youqithreeone',
    component: () => import('../views/cnthreeview/youqithreeone.vue')
  },
  {
    path: '/youqithreetwo',
    component: () => import('../views/cnthreeview/youqithreetwo.vue')
  },
  {
    path: '/youqithree',
    component: () => import('../views/cnthreeview/youqithree.vue')
  },
  {
    path: '/guansuione',
    component: () => import('../views/cnthreeview/guansuione.vue')
  },
  {
    path: '/guansuitwo',
    component: () => import('../views/cnthreeview/guansuitwo.vue')
  },
  {
    path: '/guansuithree',
    component: () => import('../views/cnthreeview/guansuithree.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

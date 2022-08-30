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
    path: '/fusioncube1000h',
    component: () => import('../views/cnversion/fusioncube1000h.vue')
  },
  {
    path: '/oceanstor',
    component: () => import('../views/cnversion/oceanstor.vue')
  },
  {
    path: '/intelligenceies',
    component: () => import('../views/cnversion/intelligenceies.vue'),
  },
  {
    path: '/fusioncube1000c',
    component: () => import('../views/cnversion/fusioncube1000c.vue'),
  },
  {
    path: '/atals',
    component: () => import('../views/cnversion/atals.vue'),
  },
  {
    path: '/fusioncubefive',
    component: () => import('../views/cnversion/fusioncubefive.vue'),
  },
  {
    path: '/demoview',
    component: () => import('../views/cnversion/demoview.vue'),
  },
  {
    path: '/chaorongheresource',
    component: () => import('../views/cnversion/chaorongheresource.vue'),
  },
  {
    path: '/qinglianghuaresource',
    component: () => import('../views/cnversion/qinglianghuaresource.vue'),
  },
  {
    path: '/qinglianghuaresourseone',
    component: () => import('../views/cnversion/qinglianghuaresourseone.vue'),
  },
  {
    path: '/fusionmodule',
    component: () => import('../views/cnversion/fusionmodule.vue'),
  },
  {
    path: '/fusioncube800',
    component: () => import('../views/cnversion/fusioncube800.vue'),
  },
  //二级页面
  {
    path: '/saasasis',
    component: () => import('../views/iesitem/SaasAsis.vue'),
  },
  {
    path: '/saastobe',
    component: () => import('../views/iesitem/SaasTobe.vue'),
  },
  {
    path: '/yizhanshiasis',
    component: () => import('../views/iesitem/YizhanshiAsis.vue'),
  },
  {
    path: '/yizhanshitobe',
    component: () => import('../views/iesitem/YizhanshiTobe.vue'),
  },
  {
    path: '/jituanduofenzhiasis',
    component: () => import('../views/iesitem/JituanduofenzhiAsis.vue'),
  },
  {
    path: '/jituanduofenzhitobe',
    component: () => import('../views/iesitem/JituanduofenzhiTobe.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router

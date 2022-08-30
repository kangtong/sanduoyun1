import Vue from 'vue'
import VueRouter from 'vue-router'
import Homeview from '../views/cnversion/homeview.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Homeview
  },
  //中文版
  {
    path: '/huaweiesight',
    component: () => import('../views/cnversion/HuaweieSight.vue')
  },
  {
    path: '/parkpro',
    component: () => import('../views/cnversion/ParkPro.vue')
  },
  {
    path: '/fastinstall',
    component: () => import('../views/cnversion/FastInstall.vue')
  },
  {
    path: '/efficient',
    component: () => import('../views/cnversion/Efficient.vue')
  },
  {
    path: '/huaweiopenlab',
    component: () => import('../views/cnversion/HuaweiOpenLab.vue')
  },
  {
    path: '/fishbone',
    component: () => import('../views/cnversion/Fishbone.vue')
  },
  // 中文版轮播页
  ,
  {
    path: '/swiperone',
    component: () => import('../views/swiperitem/swiperone.vue')
  },
  {
    path: '/swipertwo',
    component: () => import('../views/swiperitem/swipertwo.vue')
  },
  {
    path: '/swiperthree',
    component: () => import('../views/swiperitem/swiperthree.vue')
  },
  {
    path: '/swiperfour',
    component: () => import('../views/swiperitem/swiperfour.vue')
  },
  {
    path: '/swiperfive',
    component: () => import('../views/swiperitem/swiperfive.vue')
  },
  {
    path: '/swipersix',
    component: () => import('../views/swiperitem/swipersix.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

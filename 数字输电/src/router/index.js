import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
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
  // 中文版
  {
    path: '/yunbianxietong',
    component: () => import('../views/cnversion/yunbianxietong.vue')
  },
  {
    path: '/minjiezuwang',
    component: () => import('../views/cnversion/minjiezuwang.vue')
  },
  {
    path: '/rongheganzhi',
    component: () => import('../views/cnversion/rongheganzhi.vue'),
  },
  {
    path: '/weibochangju',
    component: () => import('../views/cnversion/weibochangju.vue'),
  },
  {
    path: '/opgw',
    component: () => import('../views/cnversion/opgw.vue'),
  },
  {
    path: '/qinglianghua',
    component: () => import('../views/cnversion/qinglianghua.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
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
    path: '/lvse',
    query: '/lvse',
    component: () => import('../views/cnversion/lvse.vue')
  },
  {
    path: '/suanli',
    query: '/suanli',
    component: () => import('../views/cnversion/suanli.vue')
  },
  {
    path: '/dsxc',
    query: '/dsxc',
    component: () => import('../views/cnversion/dsxc.vue')
  },
  {
    path: '/dsxx',
    query: '/dsxx',
    component: () => import('../views/cnversion/dsxx.vue')
  },
  {
    path: '/dsxs',
    query: '/dsxs',
    component: () => import('../views/cnversion/dsxs.vue')
  },
  {
    path: '/shuniu',
    query: '/shuniu',
    component: () => import('../views/cnversion/shuniu.vue')
  },
  {
    path: '/shuniu1',
    query: '/shuniu1',
    component: () => import('../views/cnversion/shuniu1.vue')
  },
  {
    path: '/dsxcJiejue',
    query: '/dsxcJiejue',
    component: () => import('../views/cnversion/dsxcJiejue.vue')
  },
  {
    path: '/dsxxJiejue',
    query: '/dsxxJiejue',
    component: () => import('../views/cnversion/dsxxJiejue.vue')
  },
  {
    path: '/zhileng',
    query: '/zhileng',
    component: () => import('../views/cnversion/zhileng.vue')
  },
  {
    path: '/gongdian',
    query: '/gongdian',
    component: () => import('../views/cnversion/gongdian.vue')
  },
  {
    path: '/qita',
    query: '/qita',
    component: () => import('../views/cnversion/qita.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router

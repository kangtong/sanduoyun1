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
    path: '/guankong',
    query: '/guankong',
    component: () => import('../views/cnversion/guankong.vue')
  },
  {
    path: '/jiance',
    query: '/jiance',
    component: () => import('../views/cnversion/jiance.vue')
  },
  {
    path: '/zhihui',
    query: '/zhihui',
    component: () => import('../views/cnversion/zhihui.vue')
  },
  // 中文版三级页面
  {
    path: '/guankongone',
    query: '/guankongone',
    component: () => import('../views/threeview/guankongone.vue')
  },
  {
    path: '/guankongtwo',
    query: '/guankongtwo',
    component: () => import('../views/threeview/guankongtwo.vue')
  },
  {
    path: '/jianceone',
    query: '/jianceone',
    component: () => import('../views/threeview/jianceone.vue')
  },
  {
    path: '/jiancetwo',
    query: '/jiancetwo',
    component: () => import('../views/threeview/jiancetwo.vue')
  },
  {
    path: '/jiancethree',
    query: '/jiancethree',
    component: () => import('../views/threeview/jiancethree.vue')
  },
  {
    path: '/zhihuione',
    query: '/zhihuione',
    component: () => import('../views/threeview/zhihuione.vue')
  },
  {
    path: '/zhihuitwo',
    query: '/zhihuitwo',
    component: () => import('../views/threeview/zhihuitwo.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  // 数字杆站
  {
    path: '/shuziganzhan',
    component: () => import('../views/cnversion/shuziganzhan.vue')
  },
  // 检测杆站
  {
    path: '/jianceganzhan',
    component: () => import('../views/cnversion/jianceganzhan.vue')
  },
  // 智慧杆站
  {
    path: '/zhihuiganzhan',
    component: () => import('../views/cnversion/zhihuiganzhan.vue')
  },
  // 管控杆站
  {
    path: '/guankongganzhan',
    component: () => import('../views/cnversion/guankongganzhan.vue')
  },
  // 数字管线
  {
    path: '/shuziguanxian',
    component: () => import('../views/cnversion/shuziguanxian.vue')
  },
  // 数字管隧
  {
    path: '/shuziguansui',
    component: () => import('../views/cnversion/shuziguansui.vue')
  },
  // 数字线路
  {
    path: '/shuzixianlu',
    component: () => import('../views/cnversion/shuzixianlu.vue')
  },
  // 数字场站
  {
    path: '/shuzichangzhan',
    component: () => import('../views/cnversion/shuzichangzhan.vue')
  },
  // 数字场站-弹窗
  {
    path: '/changzhanguanlis',
    component: () => import('../views/cnversion/changzhanguanlis.vue')
  },
  // 中文版
  // 痛点
  {
    path: '/painpoint',
    component: () => import('../views/cnversion/Painpoint.vue')
  },
  // 解决方案
  {
    path: '/solution',
    component: () => import('../views/cnversion/Solution.vue')
  },
  {
    path: '/changzhanguanli',
    component: () => import('../views/cnversion/changzhanguanli.vue')
  },
  {
    path: '/duoganheyi',
    component: () => import('../views/cnversion/duoganheyi.vue')
  },
  {
    path: '/guansuijiance',
    component: () => import('../views/cnversion/guansuijiance.vue')
  },
  {
    path: '/huanjingjiance',
    component: () => import('../views/cnversion/huanjingjiance.vue')
  },
  {
    path: '/quanluganzhi',
    component: () => import('../views/cnversion/quanluganzhi.vue')
  },
  {
    path: '/xianluxunjian',
    component: () => import('../views/cnversion/xianluxunjian.vue')
  },
  //智能开放
  {
    path: '/loop',
    component: () => import('../views/cnversion/loop.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

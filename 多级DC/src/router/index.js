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
  // 中文版
  {
    path: '/yunweiasis',
    component: () => import('../views/cnversion/yunwei/yunweiasis.vue')
  },
  {
    path: '/yunweitobe',
    component: () => import('../views/cnversion/yunwei/yunweitobe.vue')
  },
  {
    path: '/guankongasis',
    component: () => import('../views/cnversion/guankong/guankongasis.vue')
  },
  {
    path: '/guankongtobe',
    component: () => import('../views/cnversion/guankong/guankongtobe.vue')
  },
  {
    path: '/zongbuguankongyun',
    component: () => import('../views/cnversion/aloneview/zongbuguankongyun.vue')
  },
  {
    path: '/qinglinaghuafenzhi',
    component: () => import('../views/cnversion/aloneview/qinglinaghuafenzhi.vue')
  },
  {
    path: '/yunweiasisone',
    component: () => import('../views/cnversion/yunwei/yunweiasisone.vue')
  },
  {
    path: '/yunweitobeone',
    component: () => import('../views/cnversion/yunwei/yunweitobeone.vue')
  },
  {
    path: '/yunwangone',
    component: () => import('../views/cnversion/yunwang/yunwangone.vue')
  },
  {
    path: '/yunwangtwo',
    component: () => import('../views/cnversion/yunwang/yunwangtwo.vue')
  },
  {
    path: '/yunhuafenzhi',
    component: () => import('../views/cnversion/aloneview/yunhuafenzhi.vue')
  },
  {
    path: '/gaoxiaoasis',
    component: () => import('../views/cnversion/gaoxiaoxietong/gaoxiaoasis.vue')
  },
  {
    path: '/gaoxiaotobe',
    component: () => import('../views/cnversion/gaoxiaoxietong/gaoxiaotobe.vue')
  },
  {
    path: '/zhijianfenzhi',
    component: () => import('../views/cnversion/aloneview/zhijianfenzhi.vue')
  },
  {
    path: '/zhijianfenzhione',
    component: () => import('../views/cnversion/aloneview/zhijianfenzhione.vue')
  },
  // 带返回按钮的二级页面
  {
    path: '/backguankongasis',
    component: () => import('../views/cnversion/havebackview/backguankongasis.vue')
  },
  {
    path: '/backguankongtobe',
    component: () => import('../views/cnversion/havebackview/backguankongtobe.vue')
  },
  {
    path: '/backyunwangtwo',
    component: () => import('../views/cnversion/havebackview/backyunwangtwo.vue')
  },
  {
    path: '/backyunwangone',
    component: () => import('../views/cnversion/havebackview/backyunwangone.vue')
  },
  {
    path: '/backyunweiasis',
    component: () => import('../views/cnversion/havebackview/backyunweiasis.vue')
  },
  {
    path: '/backyunweiasisone',
    component: () => import('../views/cnversion/havebackview/backyunweiasisone.vue')
  },
  {
    path: '/backyunweitobe',
    component: () => import('../views/cnversion/havebackview/backyunweitobe.vue')
  },
  {
    path: '/backyunweitobeone',
    component: () => import('../views/cnversion/havebackview/backyunweitobeone.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

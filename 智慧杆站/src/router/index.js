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
    path: '/zhijianbushu',
    component: () => import('../views/cnversion/zhijianbushu.vue')
  },
  {
    path: '/yunbianxietong',
    component: () => import('../views/cnversion/yunbianxietong.vue')
  },
  {
    path: '/zhihuijieneng',
    component: () => import('../views/cnversion/zhihuijieneng.vue')
  },

   {
    path: '/threeduoganheyi',
    component: () => import('../views/threeview/threeduoganheyi.vue')
  },
  {
    path: '/threecar',
    component: () => import('../views/threeview/threecar.vue')
  },
  {
    path: '/threemanholcover',
    component: () => import('../views/threeview/threemanholcover.vue')
  },
  {
    path: '/threestreetlamp',
    component: () => import('../views/threeview/threestreetlamp.vue')
  },
  {
    path: '/threexiaofengtiangu',
    component: () => import('../views/threeview/threexiaofengtiangu.vue')
  }
]

const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router

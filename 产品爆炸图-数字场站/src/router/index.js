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
  {
    path: '/FCview',
    component: () => import('../views/FCview.vue')
  },
  {
    path: '/Teight',
    component: () => import('../views/Teight.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router

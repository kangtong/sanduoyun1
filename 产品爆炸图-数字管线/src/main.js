import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/global.css'
Vue.config.productionTip = false;
// (function () {
  /**
   * @Tip:
   * FenZhon:Number 设置超时时间(分钟)
   * timeoutJianCha:时间戳 多久检查一次
   * lastTime:时间戳 最后一次操作的时间
   * currentTime:时间戳 当前操作的时间
   * timer:计时器
   */
  // let FenZhon = 0.1
  // let lastTime = new Date().getTime()
  // let currentTime = new Date().getTime()
  // let timeout = FenZhon * 180 * 10000
  // let timer = null
  // let timeoutJianCha = 1000
  /** 
   * @event: 监听鼠标按下事件并更新最后一次操作的时间
   * @Tip:
   */
  // window.onload = function () {
  //   window.document.onmousedown = function () {
  //     localStorage.setItem('yemiandingshiqi', new Date().getTime())
  //   }
  // }

  /**
   * @event: 检查是否超时,并且设置每隔多久检查一次
   */

//   function checkTimeout() {
//     currentTime = new Date().getTime()
//     lastTime = localStorage.getItem('yemiandingshiqi')
//     if (currentTime - lastTime > timeout) {
//       router.push('/')
//     }
//   }
//   timer = setInterval(checkTimeout, timeoutJianCha)
// })()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
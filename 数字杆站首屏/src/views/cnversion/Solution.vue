<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      v-show="lang"
      loop
      autoplay
      muted
      class="home_img"
      src=""
    ></video>
    <video
      v-show="!lang"
      loop
      autoplay
      muted
      class="home_img"
      src=""
    ></video>
    <!-- 回到首页 -->
    <img
      @click="$router.push({ path:'/', query: $route.query})"
      class="home_en rb0-fixed"
      src="../../assets/imgs/home.png"
      alt=""
    />
    <!-- 环境监测 -->
    <div class="huanjing" @click="$router.push({ path:'huanjingjiance', query: $route.query})"></div>
    <!-- 全路感知 -->
    <div class="quanlu" @click="$router.push({ path:'quanluganzhi', query: $route.query})"></div>
    <!-- 线路巡检 -->
    <div class="xianlu" @click="$router.push({ path:'xianluxunjian', query: $route.query})"></div>
    <!-- 多杆合一 -->
    <div class="duogan" @click="$router.push({ path:'duoganheyi', query: $route.query})"></div>
    <!-- 管隧监测 -->
    <div class="guansui" @click="$router.push({ path:'guansuijiance', query: $route.query})"></div>
    <!-- 场站管理 -->
    <div class="changzhan" @click="$router.push({ path:'changzhanguanli', query: $route.query})"></div>
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>
<style lang='less' scoped>
.home_img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.check_en {
  position: absolute;
  top: 92%;
  left: 90%;
}
.home_en {
  width: 48px;
  height: 48px;
  position: absolute;
  top: 93%;
  left: 96%;
}
.huanjing {
  width: 13%;
  height: 26%;
  position: absolute;
  top: 18%;
  left: 27%;
  // border: 1px solid red;
}
.quanlu {
  width: 13%;
  height: 26%;
  position: absolute;
  top: 18%;
  left: 52%;
  // border: 1px solid red;
}
.xianlu {
  width: 13%;
  height: 26%;
  position: absolute;
  top: 18%;
  left: 76%;
  // border: 1px solid red;
}
.duogan {
  width: 13%;
  height: 26%;
  position: absolute;
  top: 67%;
  left: 21%;
  // border: 1px solid red;
}
.guansui {
  width: 13%;
  height: 27%;
  position: absolute;
  top: 66%;
  left: 56%;
  // border: 1px solid red;
}
.changzhan {
  width: 13%;
  height: 26%;
  position: absolute;
  top: 67%;
  left: 80.3%;
  // border: 1px solid red;
}
</style>

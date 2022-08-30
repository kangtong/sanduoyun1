<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      v-show="lang"
      class="home_video"
      autoplay
      muted
      loop
      src="../assets/videos/cn/01数字线路-输电 首页.mp4"
    ></video>
    <video
      v-show="!lang"
      class="home_video"
      autoplay
      muted
      loop
      src="../assets/videos/en/01数字线路-输电 首页.mp4"
    ></video>
    <!--    :style="lang?'opacity:0':'opacity:1'"-->

    <!-- 敏捷组网 -->
    <div :class="lang?'minjiezuwang':'enminjiezuwang'" @click="$router.push({ path:'minjiezuwang', query: $route.query})"></div>
    <!--  云边协同 -->
    <div :class="lang?'yunbianxietong':'enyunbianxietong'" @click="$router.push({ path:'yunbianxietong', query: $route.query})"></div>
    <!-- 融合感知 -->
    <div :class="lang?'rongheganzhi':'enrongheganzhi'" @click="$router.push({ path:'rongheganzhi', query: $route.query})"></div>
    <!-- 中英文切换 -->
    <div class="check rb0-fixed" :class="lang?'en':'cn'" @click="langSelect"></div>
  </div>
</template>

<script>
import { myMixins } from "../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>
<style lang='less' scoped>
.yunbianxietong {
  width: 17%;
  height: 7%;
  // border: 1px solid red;
  position: absolute;
  top: 39%;
  left: 18.5%;
  cursor: pointer;
}
.minjiezuwang {
  width: 17%;
  height: 7%;
  // border: 1px solid red;
  position: absolute;
  top: 8%;
  left: 39%;
  cursor: pointer;
}
.rongheganzhi {
  width: 17%;
  height: 7%;
  // border: 1px solid red;
  position: absolute;
  top: 67%;
  left: 54.3%;
  cursor: pointer;
}
.enyunbianxietong {
  width: 22%;
  height: 7%;
  // border: 1px solid red;
  position: absolute;
  top: 39%;
  left: 18.5%;
  cursor: pointer;
}
.enminjiezuwang {
  width: 22%;
  height: 7%;
  // border: 1px solid red;
  position: absolute;
  top: 8%;
  left: 39%;
  cursor: pointer;
}
.enrongheganzhi {
  width: 22%;
  height: 7%;
  // border: 1px solid red;
  position: absolute;
  top: 67%;
  left: 54.3%;
  cursor: pointer;
}
.check {
  width: 48px;
  height: 48px;
  position: absolute;
  top: 93%;
  left: 96%;
  z-index: 2;
  cursor: pointer;
}
.en{
  background: url("../assets/imgs/en.png") no-repeat;
  background-size: 100% 100%;
}
.cn{
  background: url("../assets/imgs/cn.png") no-repeat;
  background-size: 100% 100%;
}
</style>

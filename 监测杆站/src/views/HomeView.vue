<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      v-show="lang"
      class="home_img"
      autoplay
      loop
      muted
      src="../assets/videos/cn/01监测杆站-首页.mp4"
    ></video>
    <video
      v-show="!lang"
      class="home_img"
      autoplay
      loop
      muted
      src="../assets/videos/en/01监测杆首页-转.mp4"
    ></video>
    <!-- 无网稳回传 -->
    <div class="cur" :class="lang?'one':'enone'" @click="$router.push({ path:'wuwangwenhuichuan', query: $route.query})"></div>
    <!-- 无电长续航 -->
    <div class="cur" :class="lang?'two':'entwo'" @click="$router.push({ path:'wudianchangxuhang', query: $route.query})"></div>
    <!-- 中英文切换 -->
    <img
      v-show="lang"
      src="../assets/imgs/en.png"
      class="check_en cur rb0-fixed"
      @click="langSelect"
    />
    <img
      v-show="!lang"
      src="../assets/imgs/cn.png"
      class="check_cn cur rb0-fixed"
      @click="langSelect"
    />
  </div>
</template>

<script>
import { myMixins } from "../assets/js/mixin.js";
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
.one {
  width: 17.5%;
  height: 8%;
  // border: 1px solid red;
  position: absolute;
  top: 76%;
  left: 12.5%;
}
.two {
  width: 17%;
  height: 7%;
  // border: 1px solid red;
  position: absolute;
  top: 76.5%;
  left: 39.5%;
}
.enone {
  width: 38.5%;
  height: 6%;
  // border: 1px solid red;
  position: absolute;
  top: 77%;
  left: 8%;
}
.entwo {
  width: 39%;
  height: 7%;
  // border: 1px solid red;
  position: absolute;
  top: 76.5%;
  left: 52.5%;
}
.check_cn {
  width: 48px;
  height: 48px;
  position: absolute;
  top: 93.3%;
  left: 96.3%;
}
</style>

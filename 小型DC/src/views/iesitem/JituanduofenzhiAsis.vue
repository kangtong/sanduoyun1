<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      v-show="lang"
      class="home_video"
      autoplay
      loop
      muted
      src="../../assets/videos/cn/集团多分支ASIS.mp4"
    ></video>
    <video
      v-show="!lang"
      class="home_video"
      autoplay
      loop
      muted
      src="../../assets/videos/en/集团多分支ASIS_EN.mp4"
    ></video>
    <!-- 切换到tobe页面 -->
    <div class="tobe_btn" @click="$router.push({ path:'jituanduofenzhitobe', query: $route.query})"></div>
    <!-- 返回到上一页 -->
    <div class="back_btn" @click="$router.push({ path:'intelligenceies', query: $route.query})"></div>
    <!-- 返回到首页 -->
    <div class="home_btn" @click="$router.push({ path:'/', query: $route.query})"></div>
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>


<style lang="less" scoped>
.home_video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.tobe_btn {
  width: 9%;
  height: 6%;
  position: absolute;
  top: 2%;
  left: 51%;
  cursor: pointer;
  // border: 1px solid green;
}
.back_btn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93%;
  left: 92.7%;
  // border: 1px solid #fff;
}
.home_btn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93%;
  left: 96.2%;
  // border: 1px solid #fff;
}
</style>

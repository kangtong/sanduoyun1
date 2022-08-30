<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
        v-show="lang"
        class="video"
      autoplay
      loop
      muted
      src="../../assets/videos/cn/集成服务-集成能力.mp4"
    ></video>
    <video
        v-show="!lang"
        class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/en/集成服务-集成能力.mp4"
    ></video>
    <!-- 快速安装 -->
    <div class="fastinstall btn" @click="$router.push({ path:'fastinstall', query: $route.query})"></div>
    <!-- 高效集成 -->
    <div class="efficient btn" @click="$router.push({ path:'efficient', query: $route.query})"></div>
    <!-- 下一页 -->
    <div class="next_btn right-icon rb1-fixed" @click="$router.push({ path:'swiperone', query: $route.query})"></div>
    <!-- 返回上一页 -->
    <div class="home_btn left-icon rb0-fixed" @click="$router.push({ path:'/', query: $route.query})"></div>
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>
<style lang="less" scoped>
.video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.fastinstall {
  width: 10%;
  height: 4%;
  position: absolute;
  top: 86%;
  left: 30%;
  // border: 1px solid #fff;
}
.efficient {
  width: 10%;
  height: 4%;
  position: absolute;
  top: 86%;
  left: 47%;
  // border: 1px solid #fff;
}
</style>

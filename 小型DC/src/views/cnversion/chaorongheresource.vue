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
      src="../../assets/videos/cn/超融合资源池.mp4"
    ></video>
    <video
      v-show="!lang"
      class="home_video"
      autoplay
      muted
      loop
      src="../../assets/videos/en/超融合资源池_EN.mp4"
    ></video>
    <div class="back_btn" @click="$router.push({ path:'demoview', query: $route.query})"></div>
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
.back_btn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93%;
  left: 96.2%;
}
</style>

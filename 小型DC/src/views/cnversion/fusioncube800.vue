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
      src="../../assets/videos/cn/800模块化机房.mp4"
    ></video>
    <video
      v-show="!lang"
      class="home_video"
      autoplay
      muted
      loop
      src="../../assets/videos/en/800模块化机房_EN.mp4"
    ></video>
    <!-- 返回首页 -->
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
.home_btn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93%;
  left: 96.2%;
}
</style>

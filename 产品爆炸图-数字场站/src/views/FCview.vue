
<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      class="video"
      ref="fcvideo"
      :autoplay="lang"
      loop
      src="../assets/videos/cn/FC500-cn.mp4"
    ></video>
    <div @click="$router.push({ path:'/', query: $route.query})" class="home_btn cur" alt=""></div>
    <div @click="HandleStartPlayPc" class="stop_btn cur"></div>
  </div>
</template>

<script>
import { myMixins } from "../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>

<style lang='less' scoped>
.video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.home_btn {
  width: 2.7%;
  height: 5%;
  position: absolute;
  top: 72.7%;
  left: 89.5%;
  // border: 1px solid red;
}
.stop_btn {
  width: 2.7%;
  height: 5%;
  position: absolute;
  top: 79.5%;
  left: 89.5%;
  // border: 1px solid red;
}
</style>

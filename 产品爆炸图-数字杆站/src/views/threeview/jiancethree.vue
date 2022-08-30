
<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
        v-if="lang"
      class="video"
      ref="fcvideo"
      autoplay
      loop
      src="../../assets/videos/cn/AR502H-cn - 3.mp4"
    ></video>
    <video
        v-if="!lang"
        class="video"
        ref="fcvideo"
        autoplay
        loop
        src="../../assets/videos/en/AR502H-cn - 3.mp4"
    ></video>
    <!-- 关闭按钮 -->
    <img
      src="../../assets/imgs/close.png"
      @click="$router.push({ path: '/jiance', query: $route.query })"
      class="back_btn cur"
    />
    <!-- 播放按钮 -->
    <img
      src="../../assets/imgs/play.png"
      @click="HandleStartPlayPc"
      class="stop_btn cur"
    />
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
  created() {
    localStorage.setItem("jiance", false);
  },
};
</script>

<style lang='less' scoped>
</style>

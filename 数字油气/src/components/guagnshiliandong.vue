<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
        v-show="lang"
      autoplay
      loop
      muted
      class="home_video"
      src="../assets/videos/cn/02光视联动-转.mp4"
    ></video>
    <video
        v-show="!lang"
        autoplay
        loop
        muted
        class="home_video"
        src="../assets/videos/en/02光视联动-转.mp4"
    ></video>
    <!-- 返回首页 -->
    <img
      src="../assets/imgs/home.png"
      class="home_btn rb0-fixed"
      @click="$router.push({ path:'/', query: $route.query})"
    />
  </div>
</template>

<script>
import { myMixin } from "../assets/js/mixin";
export default {
  mixins: [myMixin],
};
</script>
<style lang='less' scoped>
.home_video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>

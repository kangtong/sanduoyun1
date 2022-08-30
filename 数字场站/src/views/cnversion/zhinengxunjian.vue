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
      src="../../assets/videos/cn/03数字场站-无线覆盖CN.mp4"
    ></video>
    <video
        v-show="!lang"
        class="home_video"
        autoplay
        muted
        loop
        src="../../assets/videos/en/03数字场站-无线覆盖EN.mp4"
    ></video>
    <img
      class="home_btn rb0-fixed"
      src="../../assets/imgs/home.png"
      @click="$router.push({ path:'/', query: $route.query})"
    />

  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default { mixins: [myMixins] };
</script>

<style lang="less" scoped>
.home_video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>

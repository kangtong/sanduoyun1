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
        src="../../assets/videos/cn/03云边协调.mp4"
    ></video>
    <video
        v-show="!lang"
        class="home_video"
        autoplay
        muted
        loop
        src="../../assets/videos/en/03云边协调.mp4"
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

</style>

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
        src="../../assets/videos/cn/OPGW方案.mp4"
    ></video>
    <video
        v-show="!lang"
        class="home_video"
        autoplay
        muted
        loop
        src="../../assets/videos/en/OPGW方案.mp4"
    ></video>
    <img
        class="home_btn rb0-fixed"
        src="../../assets/imgs/home.png"
        @click="$router.push({ path:'/', query: $route.query})"
    />
    <img
      @click="$router.push({path:'/minjiezuwang',query: $route.query})"
      class="back_btn rb1-fixed"
      src="../../assets/imgs/left.png"
      alt=""
    />
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default { mixins: [myMixins] };
</script>

<style lang="less" scoped>

</style>

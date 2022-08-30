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
      src="../../assets/videos/cn/设计.mp4"
    ></video>
    <video
        v-show="!lang"
        class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/en/设计.mp4"
    ></video>
    <!-- 返回上一页 -->
    <div class="home_btn left-icon rb0-fixed" @click="$router.push({ path:'huaweiopenlab', query: $route.query})"></div>
    <div class="one userno" @click="$router.push({ path:'swiperone', query: $route.query})"></div>
    <div class="two userno" @click="$router.push({ path:'swipertwo', query: $route.query})"></div>
    <div class="four userno" @click="$router.push({ path:'swiperfour', query: $route.query})"></div>
    <div class="five userno" @click="$router.push({ path:'swiperfive', query: $route.query})"></div>
    <div class="six userno" @click="$router.push({ path:'swipersix', query: $route.query})"></div>
    <!-- 下一页 -->
    <div class="next_btn right-icon rb1-fixed" @click="$router.push({ path:'fishbone', query: $route.query})"></div>
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>
<style lang="less" scoped>
</style>

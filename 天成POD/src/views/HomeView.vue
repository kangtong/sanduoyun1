<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      v-show="lang"
      loop
      autoplay
      muted
      src="../assets/videos/动效/中文/20220804首页 -中文 1页.mp4"
      class="video"
    ></video>
    <video
      v-show="!lang"
      loop
      autoplay
      muted
      src="../assets/videos/动效/英文/20220804首页 -英文 1页.mp4"
      class="video"
    ></video>
    <img
      class="cur"
      :class="lang ? 'ai' : 'enai'"
      @click="$router.push({ path: '/ai', query: $route.query })"
      src="../assets/imgs/资源 2opoo.png"
    />
    <img
      src="../assets/imgs/资源 3opoo.png"
      class="cur"
      :class="lang ? 'hpc' : 'enhpc'"
      @click="$router.push({ path: '/hpc', query: $route.query })"
    />
    <!-- 中英文切换 -->
    <div
      class="checken_btn cur"
      :class="lang ? 'en' : 'cn'"
      @click="langSelect"
    ></div>
  </div>
</template>

<script>
import { myMixins } from "../assets/js/mixins";
export default {
  mixins: [myMixins],
  methods: {
    init() {},
  },
};
</script>
<style lang="less" scoped>
</style>

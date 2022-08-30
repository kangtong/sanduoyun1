<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      v-show="lang"
      autoplay
      muted
      loop
      src="../../assets/videos/动效/中文/20220804首页 -中文 2页.mp4"
      class="video"
    ></video>
    <video
      v-show="!lang"
      autoplay
      muted
      loop
      src="../../assets/videos/动效/英文/20220804首页 -英文 2页.mp4"
      class="video"
    ></video>
    <img
      src="../../assets/imgs/资源 3opoo.png"
      class="hpc cur"
      :class="lang ? 'hpc' : 'enhpc'"
      @click="$router.push({ path: '/hpc', query: $route.query })"
    />
    <img
      class="home_btn cur"
      src="../../assets/imgs/资源 5opoo.png"
      @click="$router.push({ path: '/home', query: $route.query })"
    />
    <div
      class="cur"
      :class="lang ? 'yunnao' : 'enyunnao'"
      @click="$router.push({ path: '/yunnao', query: $route.query })"
    ></div>
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixins";
export default {
  mixins: [myMixins],
  methods: {
    init() {},
  },
};
</script>
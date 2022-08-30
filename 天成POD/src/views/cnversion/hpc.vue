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
      src="../../assets/videos/动效/中文/20220804首页 -中文 3页.mp4"
      class="video"
    ></video>
    <video
      v-show="!lang"
      autoplay
      muted
      loop
      src="../../assets/videos/动效/英文/20220804首页 -英文 3页.mp4"
      class="video"
    ></video>
    <!-- ai按钮 -->
    <img
      src="../../assets/imgs/资源 2opoo.png"
      class="cur"
      :class="lang ? 'ai' : 'enai'"
      @click="$router.push({ path: '/ai', query: $route.query })"
    />
    <!-- 返回首页 -->
    <img
      class="home_btn cur"
      src="../../assets/imgs/资源 5opoo.png"
      @click="$router.push({ path: '/home', query: $route.query })"
    />
    <div
      class="university cur"
      @click="$router.push({ path: '/university', query: $route.query })"
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
<style lang="less" scoped>
.university {
  width: 5.5%;
  height: 9.7%;
  position: absolute;
  top: 71%;
  left: 59.4%;
  border-radius: 50%;
  // border: 1px solid red;
}
.ai_btn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93.2%;
  left: 96.2%;
  // border: 1px solid red;
}
</style>

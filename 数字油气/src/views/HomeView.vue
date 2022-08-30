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
      src="../assets/videos/cn/01油气场景循环-转.mp4"
    ></video>
    <video
        v-show="!lang"
        autoplay
        loop
        muted
        class="home_video"
        src="../assets/videos/en/01油气场景循环-转.mp4"
    ></video>
    <!-- 光视联动 -->
    <div
      class="guangshiliandong"
      @click="$router.push({ path:'guangshiliandong', query: $route.query})"
    > </div>
    <!-- 切换英文 -->
    <div class="rb0-fixed" :class="lang?'check_en':'check_cn'" @click="langSelect"></div>
  </div>
</template>

<script>
import { myMixin } from "../assets/js/mixin";
export default {
  mixins: [myMixin],
  methods: {

  },
  created(option) {

  },
};
</script>
<style lang='less' scoped>
.home_video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.guangshiliandong {
  width: 17%;
  height: 7%;
  position: absolute;
  top: 24%;
  left: 42%;
  cursor: pointer;
}

</style>

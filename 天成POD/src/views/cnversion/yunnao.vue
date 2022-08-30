<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      v-show="lang"
      autoplay
      @click="close"
      loop
      src="../../assets/videos/视频案例/鹏城实验室案例-终稿-1-20刷新+(4).mp4"
      class="video cur"
    ></video>
    <video
      v-show="!lang"
      autoplay
      @click="close"
      loop
      src="../../assets/videos/视频案例/鹏城实验室案例视频英文版终稿.mp4"
      class="video cur"
    ></video>
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixins";
export default {
  mixins: [myMixins],
  methods: {
    close() {
      this.$router.push("./ai");
    },
    init() {},
  },
};
</script>
<style lang="less" scoped>
</style>

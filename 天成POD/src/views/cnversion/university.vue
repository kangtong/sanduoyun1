<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      autoplay
      @click="close"
      loop
      src="../../assets/videos/视频案例/【案例视频】中国科学技术大学.mp4"
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
      this.$router.push("./hpc");
    },
    init() {},
  },
};
</script>
<style lang="less" scoped>
</style>

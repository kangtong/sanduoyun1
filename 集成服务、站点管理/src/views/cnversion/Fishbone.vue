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
      src="../../assets/videos/cn/鱼骨.mp4"
    ></video>
    <video
        v-show="!lang"
        class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/en/鱼骨.mp4"
    ></video>
    <!-- 返回上一页 -->
    <div class="home_btn left-icon rb0-fixed" @click="$router.push({path:'/parkpro',query: $route.query})"></div>
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
  created() {
    sessionStorage.setItem("parkpro", false);
  },
};
</script>
<style lang="less" scoped>

</style>

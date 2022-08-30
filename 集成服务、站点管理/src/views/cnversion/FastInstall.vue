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
      src="../../assets/videos/cn/集成服务-快速安装.mp4"
    ></video>
    <video
        v-show="!lang"
        class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/en/集成服务-快速安装.mp4"
    ></video>
    <!-- 高效集成 -->
    <div class="btn" :class="lang?'efficient':'enefficient'" @click="$router.push({path:'efficient', query: $route.query})"></div>
    <!-- 集成能力 -->
    <div class="btn" :class="lang?'power':'enpower'" @click="$router.push({path:'huaweiopenlab', query: $route.query})"></div>
    <!-- 返回上一页 -->
    <div class="home_btn left-icon rb0-fixed" @click="$router.push({ path:'/', query: $route.query})"></div>
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>
<style lang="less" scoped>
.video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.efficient {
  width: 10%;
  height: 4%;
  position: absolute;
  top: 86%;
  left: 47%;
  // border: 1px solid #fff;
}
.power {
  width: 10%;
  height: 4%;
  position: absolute;
  top: 86%;
  left: 63%;
  // border: 1px solid #fff;
}
.enefficient {
  width: 10%;
  height: 4%;
  position: absolute;
  top: 86%;
  left: 47%;
  // border: 1px solid #fff;
}
.enpower {
  width: 10%;
  height: 4%;
  position: absolute;
  top: 86%;
  left: 63%;
  // border: 1px solid #fff;
}
</style>

<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <div class="video1container" v-show="video1show">
      <video
          v-show="lang"
          class="video"
        autoplay
        @ended="video1end"
        muted
        src="../../assets/videos/cn/集成服务-入场.mp4"
      ></video>
      <video
          v-show="!lang"
          class="video"
          autoplay
          @ended="video1end"
          muted
          src="../../assets/videos/en/集成服务-入场.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="video2show">
      <video
          v-show="lang"
          class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/cn/集成服务某公园.mp4"
      ></video>
      <video
          v-show="!lang"
          class="video"
          autoplay
          loop
          muted
          src="../../assets/videos/en/集成服务某公园.mp4"
      ></video>
    </div>
    <!-- 快速安装 -->
    <div class="fastinstall btn" @click="$router.push({ path:'fastinstall', query: $route.query})"></div>
    <!-- 高效集成 -->
    <div class="efficient btn" @click="$router.push({ path:'efficient', query: $route.query})"></div>
    <!-- 集成能力 -->
    <div class="power btn" @click="$router.push({ path:'huaweiopenlab', query: $route.query})"></div>
    <!-- 返回首页 -->
    <div class="home_btn home-icon rb0-fixed" @click="$router.push({ path:'/', query: $route.query})"></div>
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
  data() {
    return {
      video1show: true,
      video2show: false,
    };
  },
  methods: {
    video1end() {
      this.video1show = false;
      this.video2show = true;
      sessionStorage.setItem("parkpro", this.video1show);
    },
  },
  created() {
    var flat = sessionStorage.getItem("parkpro");
    flat == "false" ? (flat = false) : (flat = true);
    this.video1show = flat;
    this.video2show = !flat;
    sessionStorage.setItem("parkpro", true);
    sessionStorage.setItem("parkpro", false);
  },
};
</script>
<style lang="less" scoped>
.video1container {
  width: 100%;
  height: 100%;
  .video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
.video2container {
  width: 100%;
  height: 100%;
  .video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
.fastinstall {
  width: 10%;
  height: 4%;
  position: absolute;
  top: 86%;
  left: 30%;
  // border: 1px solid #fff;
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
}
</style>

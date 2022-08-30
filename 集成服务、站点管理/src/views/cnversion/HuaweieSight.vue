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
        src="../../assets/videos/cn/站点管理-入场.mp4"
      ></video>
      <video
          v-show="!lang"
          class="video"
          autoplay
          @ended="video1end"
          muted
          src="../../assets/videos/en/站点管理-入场.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="video2show">
      <video
          v-show="lang"
          class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/cn/站点服务-内容.mp4"
      ></video>
      <video
          v-show="!lang"
          class="video"
          autoplay
          loop
          muted
          src="../../assets/videos/en/站点服务-内容.mp4"
      ></video>
    </div>
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
    var flat = sessionStorage.getItem("zhandianguanli");
    flat == "false" ? (flat = false) : (flat = true);
    this.video1show = flat;
    this.video2show = !flat;
    sessionStorage.setItem("zhandianguanli", true);
    sessionStorage.setItem("zhandianguanli", false);
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
.siteadmin {
  width: 12%;
  height: 20%;
  position: absolute;
  top: 36%;
  left: 15%;
  // border: 1px solid #fff;
}
</style>

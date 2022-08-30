
<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <template v-if="lang">
      <div class="video1container" v-show="video1show">
        <video
            class="video"
            @ended="video1end"
            muted
            autoplay
            src="../../assets/video/cn/03城市道路 01云边协同入场-转.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video2show">
        <video
            class="video"
            loop
            muted
            autoplay
            src="../../assets/video/cn/03城市道路 02云边协同首页循环-转.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video3show">
        <video
            ref="video3"
            @ended="toPause"
            autoplay
            muted
            class="video"
            src="../../assets/video/cn/03城市道路 05云边协同出场-转.mp4"
        ></video>
      </div>
    </template>
    <template v-else>
      <div class="video1container" v-show="video1show">
        <video
            class="video"
            @ended="video1end"
            muted
            autoplay
            src="../../assets/video/en/03城市道路 01云边协同入场-转.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video2show">
        <video
            class="video"
            loop
            muted
            autoplay
            src="../../assets/video/en/03城市道路 02云边协同首页循环-转.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video3show">
        <video
            ref="video3"
            @ended="toPause"
            autoplay
            muted
            class="video"
            src="../../assets/video/en/03城市道路 05云边协同出场-转.mp4"
        ></video>
      </div>
    </template>
    <!-- 返回首页 -->
    <img
      class="home_btn cur rb0-fixed"
      @click="close"
      src="../../assets/imgs/home.png"
    />
    <div
        v-if="video2show"
        class="openmanholecover cur"
      @click="$router.push({ path:'threemanholcover', query: $route.query})"
    ></div>
    <div v-if="video2show" class="opencar cur" @click="$router.push({ path:'threecar', query: $route.query})"></div>
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
      video3show: false
    };
  },
  methods: {
    video1end() {
      if (!this.video1show) {
        return
      }
      this.video2show = true;
      this.video1show = false;
      this.video3show = false
      sessionStorage.setItem("yunbianxietong1", this.video1show);
    },
    toPause() {
      if (!this.video3show) {
        return
      }
      this.$router.push({ path:'/', query: this.$route.query});
    },
    close() {
      this.$refs.video3.pause()
      this.video3show = true
      this.video2show = false
      this.video1show = false
      this.$refs.video3.play()
    }
  }
};
</script>

<style lang='less' scoped>
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
.openmanholecover {
  width: 3%;
  height: 6%;
  position: absolute;
  top: 31%;
  left: 58%;
  // border: 1px solid red;
}
.opencar {
  width: 3%;
  height: 6%;
  position: absolute;
  top: 54%;
  left: 69%;
  // border: 1px solid green;
}
</style>

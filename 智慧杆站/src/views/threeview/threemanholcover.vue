
<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <template v-if="lang">
      <div class="video1container" v-show="video1show">
        <video
            autoplay
            loop
            muted
            class="video"
            src="../../assets/video/cn/03城市道路 03云边协同窨井盖.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video2show">
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
            autoplay
            loop
            muted
            class="video"
            src="../../assets/video/en/03城市道路 03云边协同窨井盖-转.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video2show">
        <video
            ref="video3"
            @pause="toPause"
            autoplay
            muted
            class="video"
            src="../../assets/video/en/03城市道路 05云边协同出场-转.mp4"
        ></video>
      </div>
    </template>
    <div class="opencar cur" @click="$router.push({ path:'/threecar', query: $route.query})"></div>
    <img class="home_btn cur rb0-fixed" @click="video1end" src="../../assets/imgs/home.png" />
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
    toPause() {
      if (!this.video2show) {
        return
      }
      this.$router.push({ path:'/', query: this.$route.query});
    },
    video1end() {
      if (!this.video1show) {
        return
      }
      this.$refs.video3.pause()
      this.video1show = false
      this.video2show = true
      this.$refs.video3.play()
    },
  },
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
.opencar {
  width: 3%;
  height: 6%;
  position: absolute;
  top: 54%;
  left: 69%;
  // border: 1px solid green;
}
</style>

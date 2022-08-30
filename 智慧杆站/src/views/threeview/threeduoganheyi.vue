
<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <template v-if="lang">
      <div class="video1container" v-show="video1show">
        <video
            autoplay
            muted
            class="video"
            src="../../assets/video/cn/02城市道路 03多杆合一.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video2show">
        <video
            ref="video3"
            @ended="toPause"
            autoplay
            muted
            class="video"
            src="../../assets/video/cn/02城市道路 04多杆合一出场-转.mp4"
        ></video>
      </div>
    </template>
    <template v-else>
      <div class="video1container" v-show="video1show">
        <video
            autoplay
            muted
            class="video"
            src="../../assets/video/en/02城市道路 03多杆合一-转.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video2show">
        <video
            ref="video3"
            @pause="toPause"
            autoplay
            muted
            class="video"
            src="../../assets/video/en/02城市道路 04多杆合一出场-转.mp4"
        ></video>
      </div>
    </template>
    <img class="home_btn cur rb0-fixed" @click="video1end" src="../../assets/imgs/home.png" />
    <img class="close_btn cur rb1-fixed" @click="close" src="../../assets/imgs/left.png" />
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
    close() {
      localStorage.setItem("isShow", true);
      this.$router.push({ path:'/zhijianbushu', query: this.$route.query})
    }
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
.close_btn {
  width: 48px;
  height: 48px;
  position: absolute;
  top: 17%;
  left: 81%;
  // border: 1px solid #000;
}
</style>

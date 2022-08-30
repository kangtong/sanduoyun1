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
            src="../../assets/video/cn/02城市道路 01多杆合一入场.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video2show">
        <video
            class="video"
            loop
            muted
            autoplay
            src="../../assets/video/cn/02城市道路 02多杆合一首页循环.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video3show">
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
            class="video"
            @ended="video1end"
            muted
            autoplay
            src="../../assets/video/en/02城市道路 01多杆合一入场-转.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video2show">
        <video
            class="video"
            loop
            muted
            autoplay
            src="../../assets/video/en/02城市道路 02多杆合一首页循环-转.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video3show">
        <video
            ref="video3"
            @ended="toPause"
            autoplay
            muted
            class="video"
            src="../../assets/video/en/02城市道路 04多杆合一出场-转.mp4"
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
      class="openduoganheyi cur"
      @click="$router.push({ path:'/threeduoganheyi', query: $route.query})"
    ></div>
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
      this.video2show = true
      this.video1show = false
      this.video3show = false
      sessionStorage.setItem("zhijianbushu1", this.video1show);
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
  },
  mounted() {
    if (localStorage.getItem("isShow") == "true") {
      this.video2show = true;
      this.video1show = false;
      this.video3show = false
    } else {
      this.video1show = true;
      this.video2show = false;
      this.video3show = false
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
.openduoganheyi {
  width: 4.6%;
  height: 8%;
  position: absolute;
  top: 16%;
  left: 76.5%;
}
</style>


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
            src="../../assets/video/cn/04城市道路 01智慧节能入场-转.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video2show">
        <video
            class="video"
            loop
            muted
            autoplay
            src="../../assets/video/cn/04城市道路 02智慧节能循环-转.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video3show">
        <video
            ref="video3"
            @ended="toPause"
            autoplay
            muted
            class="video"
            src="../../assets/video/cn/04城市道路 05智慧节能智到首页-转.mp4"
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
            src="../../assets/video/en/04城市道路 01智慧节能入场-转.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video2show">
        <video
            class="video"
            loop
            muted
            autoplay
            src="../../assets/video/en/04城市道路 02智慧节能循环-转.mp4"
        ></video>
      </div>
      <div class="video2container" v-show="video3show">
        <video
            ref="video3"
            @ended="toPause"
            autoplay
            muted
            class="video"
            src="../../assets/video/en/04城市道路 05智慧节能智到首页-转.mp4"
        ></video>
      </div>
    </template>

    <!-- 返回首页 -->
    <img
      class="home_btn cur rb0-fixed"
      @click="close"
      src="../../assets/imgs/home.png"
    />
    <div v-if="video2show" class="cur" :class="lang?'openstreetlamp':'enopenstreetlamp'" @click="$router.push({ path:'threestreetlamp', query: $route.query})"></div>
    <div
        v-if="video2show"
        class="cur" :class="lang?'openxiaofengtiangu':'enopenxiaofengtiangu'"
      @click="$router.push({ path:'threexiaofengtiangu', query: $route.query})"
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
      this.video2show = true;
      this.video1show = false;
      this.video3show = false
      sessionStorage.setItem("zhihuijieneng1", this.video1show);
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
.openstreetlamp {
  width: 15.5%;
  height: 7%;
  position: absolute;
  top: 13%;
  left: 32.6%;
  // border: 1px solid red;
}
.openxiaofengtiangu {
  width: 16%;
  height: 7%;
  position: absolute;
  top: 68%;
  left: 13%;
  // border: 1px solid green;
}

.enopenstreetlamp {
  width: 27%;
  height: 7%;
  position: absolute;
  top: 13%;
  left: 32.6%;
}
.enopenxiaofengtiangu {
  width: 27%;
  height: 7%;
  position: absolute;
  top: 68%;
  left: 13%;
}
</style>

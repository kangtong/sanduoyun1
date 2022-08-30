
<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <div class="video1container" v-show="video1show">
      <video
          v-show="lang"
          class="video"
        @ended="video1end"
          ref="video1cn"
        muted
        src="../assets/videos/cn/数字场站-入场.mp4"
      ></video>
      <video
          v-show="!lang"
          class="video"
          @ended="video1end"
          ref="video1en"
          muted
          src="../assets/videos/en/数字场站-入场-en.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="video2show">
      <video
          v-show="lang"
          class="video"
          ref="video2cn"
          loop
        muted
        src="../assets/videos/cn/数字场站-循环.mp4"
      ></video>
      <video
          v-show="!lang"
          class="video"
          ref="video2en"
          loop
          muted
          src="../assets/videos/en/数字场站-循环-en.mp4"
      ></video>
    </div>
    <div v-show="video2show" v-if="lang" class="Fcview_btn cur" @click="$router.push({ path:'FCview', query: $route.query})"></div>
    <div v-show="video2show" class="cur" :class="lang?'teight_btn':'en_teight_btn'" @click="$router.push({ path:'Teight', query: $route.query})"></div>
    <!-- 中英文切换 -->
    <div class="check rb0-fixed" :class="lang?'en':'cn'" @click="langSelect"></div>
  </div>
</template>

<script>
import { myMixins } from "../assets/js/mixin";
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
      localStorage.setItem("yunbianxietong1", this.video1show);
      this.updateVideoState()
    },
    updateVideoState() {
      console.log('updateVideoState', this.video1show, this.video2show, this.lang)
      if (this.video1show) {
        if (this.lang) {
          this.$refs.video1en.pause()
          this.$refs.video1cn.play()
        } else {
          this.$refs.video1cn.pause()
          this.$refs.video1en.play()
        }
      }
      if (this.video2show) {
        if (this.lang) {
          this.$refs.video2en.pause()
          this.$refs.video2cn.play()
        } else {
          this.$refs.video2cn.pause()
          this.$refs.video2en.play()
        }
      }
    }
  },
  watch: {
    lang(val) {
      this.updateVideoState()
    }
  },
  created() {
    var flat = localStorage.getItem("yunbianxietong1");
    flat == "false" ? (flat = false) : (flat = true);
    this.video1show = flat;
    this.video2show = !flat;
    localStorage.setItem("yunbianxietong2", true);
    localStorage.setItem("yunbianxietong1", false);
  },
  mounted() {
    this.updateVideoState()
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
.Fcview_btn {
  width: 23%;
  height: 23%;
  position: absolute;
  top: 17%;
  left: 64%;
  // border: 1px solid red;
}
.teight_btn {
  width: 23%;
  height: 23%;
  position: absolute;
  top: 44%;
  left: 64%;
  // border: 1px solid red;
}
.en_teight_btn {
  width: 23%;
  height: 23%;
  position: absolute;
  top: 33%;
  left: 64%;
}
.check {
  width: 48px;
  height: 48px;
  position: absolute;
  top: 93%;
  left: 96%;
  z-index: 2;
  cursor: pointer;
}
.en{
  background: url("../assets/imgs/en.png") no-repeat;
  background-size: 100% 100%;
}
.cn{
  background: url("../assets/imgs/cn.png") no-repeat;
  background-size: 100% 100%;
}
</style>

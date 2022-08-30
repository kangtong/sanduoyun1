
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
        :autoplay="lang"
        muted
        src="../../assets/videos/cn/数字管线-1-入场.mp4"
      ></video>
      <video
          v-show="!lang"
          class="video"
          @ended="video1end"
          :autoplay="!lang"
          muted
          src="../../assets/videos/en/数字管线-1-入场-en.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="video2show">
      <video
          v-show="lang"
          class="video"
          :autoplay="lang"
          ref="video2cn"
          loop
        muted
        src="../../assets/videos/cn/数字管线-1-循环.mp4"
      ></video>
      <video
          v-show="!lang"
          class="video"
          :autoplay="!lang"
          ref="video2en"
          loop
          muted
          src="../../assets/videos/en/数字管线-1-循环-en.mp4"
      ></video>
    </div>
    <div
        v-show="video2show"
        class="cur"
      :class="lang?'shudianone_btn':'en_shudianone_btn'"
      @click="$router.push({ path:'shudianthreeone', query: $route.query})"
    ></div>
    <div
        v-show="lang && video2show"
      class="shudiantwo_btn cur"
      @click="$router.push({ path:'shudianthreetwo', query: $route.query})"
    ></div>
    <div class="home_btn cur home-icon rb0-fixed" @click="tanchuClicks"></div>
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
  computed: {
    video() {
      return this.lang ? this.$refs.video2cn : this.$refs.video2en
    }
  },
  methods: {
    video1end() {
      this.video.pause()
      this.video.currentTime = 0
      this.video.play()
      this.$nextTick(() => {
        this.video1show = false;
        this.video2show = true;
      })
    },
    tanchuClicks() {
      this.video1show = false;
      this.video2show = false;
      this.$router.push({ path:'/', query: this.$route.query})
    },
  },
  created() {
    var flat = localStorage.getItem("shudian");
    flat == "false" ? (flat = false) : (flat = true);
    console.log(flat);
    this.video1show = flat;
    this.video2show = !flat;
    sessionStorage.setItem('didEnter', true)
  },
  mounted() {
    if (this.video2show === false) {
      this.video.pause()
      this.video.currentTime = 0
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
.shudianone_btn {
  width: 23%;
  height: 24%;
  position: absolute;
  top: 17%;
  left: 64%;
  // border: 1px solid red;
}
.en_shudianone_btn {
  width: 23%;
  height: 24%;
  position: absolute;
  top: 33%;
  left: 64%;
}
.shudiantwo_btn {
  width: 23%;
  height: 24%;
  position: absolute;
  top: 44%;
  left: 64%;
  // border: 1px solid red;
}
.home_btn {
  position: absolute;
  top: 93%;
  left: 96%;
  // border: 1px solid red;
}
</style>

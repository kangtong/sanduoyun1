
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
        src="../../assets/videos/cn/数字管线-2-入场.mp4"
      ></video>
      <video
          v-show="!lang"
          class="video"
          @ended="video1end"
          :autoplay="!lang"
          muted
          src="../../assets/videos/en/数字管线-2-入场-en.mp4"
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
        src="../../assets/videos/cn/数字管线-2-循环.mp4"
      ></video>
      <video
          v-show="!lang"
          class="video"
          :autoplay="!lang"
          ref="video2en"
          loop
          muted
          src="../../assets/videos/en/数字管线-2-循环-en.mp4"
      ></video>
    </div>
    <div v-show="video2show" class="cur" :class="lang?'youqione_btn':'en_youqione_btn'" @click="$router.push({ path:'youqithreeone', query: $route.query})"></div>
    <div v-show="lang && video2show" class="youqitwo_btn cur" @click="$router.push({ path:'youqithreetwo', query: $route.query})"></div>
    <div v-show="lang && video2show" class="youqithree_btn cur" @click="$router.push({ path:'youqithree', query: $route.query})"></div>
    <div class="home_btn cur home-icon rb0-fixed" @click="$router.push({ path:'/', query: $route.query})"></div>
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
  },
  created() {
    var flat = localStorage.getItem("youqi");
    console.log(flat);
    flat == "false" ? (flat = false) : (flat = true);
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
.youqione_btn {
  width: 20%;
  height: 20%;
  position: absolute;
  top: 46%;
  left: 29%;
  // border: 1px solid red;
}
.youqitwo_btn {
  width: 20%;
  height: 20%;
  position: absolute;
  top: 46%;
  left: 52%;
  // border: 1px solid red;
}
.youqithree_btn {
  width: 21%;
  height: 21%;
  position: absolute;
  top: 46%;
  left: 74%;
  // border: 1px solid red;
}
.home_btn {
  position: absolute;
  top: 93%;
  left: 96%;
  // border: 1px solid red;
}
.en_youqione_btn {
  width: 23%;
  height: 24%;
  position: absolute;
  top: 33%;
  left: 64%;
  // border: 1px solid red;
}
</style>


<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <div class="video1container" v-if="lang && video1show">
      <video
        class="video"
        @ended="video1end"
        autoplay
        muted
        src="../../assets/videos/cn/东数西算入场.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="lang && video2show">
      <video
        class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/cn/东数西算循环.mp4"
      ></video>
    </div>

    <div class="video1container" v-if="!lang && video1show">
      <video
          class="video"
          @ended="video1end"
          autoplay
          muted
          src="../../assets/videos/en/东数西算入场.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="!lang && video2show">
      <video
          class="video"
          autoplay
          loop
          muted
          src="../../assets/videos/en/东数西算循环.mp4"
      ></video>
    </div>

<!--    东数西存-->
    <div
        class="dsxc1 cur"
        @click="$router.push({ path: '/dsxc', query: $route.query })"
    ></div>
    <!--    东数西训-->
    <div
        class="dsxx cur"
        @click="$router.push({ path: '/dsxx', query: $route.query })"
    ></div>
<!--首页-->
    <img
        src="../../assets/imgs/home.png"
        class="check_en cur"
        @click="$router.push({ path:'/home', query: $route.query})"
    />
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
    },
    init(){
      this.video1show = true;
      this.video2show = false;
    }
  },
  created() {
	  localStorage.setItem("dsxc", false);
    this.init()
  },
};
</script>


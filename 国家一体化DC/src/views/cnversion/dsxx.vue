
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
        src="../../assets/videos/cn/东数西训入场.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="lang && video2show">
      <video
        class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/cn/东数西训循环.mp4"
      ></video>
    </div>


    <div class="video1container" v-if="!lang && video1show">
      <video
          class="video"
          @ended="video1end"
          autoplay
          muted
          src="../../assets/videos/en/东数西训入场.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="!lang && video2show">
      <video
          class="video"
          autoplay
          loop
          muted
          src="../../assets/videos/en/东数西训循环.mp4"
      ></video>
    </div>
    <!--    东数西存-->
    <div
        class="dsxc1 cur"
        @click="$router.push({ path: '/dsxc', query: $route.query })"
    ></div>
    <!--    东数西算-->
    <div
        class="dsxs cur"
        @click="$router.push({ path: '/dsxs', query: $route.query })"
    ></div>
    <div
        class="dsxcJiejue cur"
        @click="$router.push({ path: '/dsxxJiejue', query: $route.query })"
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
      var flat = localStorage.getItem("dsxx");
      flat == "false" ? (flat = false) : (flat = true);
      this.video1show = flat;
      this.video2show = !flat;
    }
  },
  created() {
	localStorage.setItem("dsxc", false);
    this.init()
  },
};
</script>


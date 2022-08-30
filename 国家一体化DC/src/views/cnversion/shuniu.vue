
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
        src="../../assets/videos/cn/风液混合型-入场.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="lang && video2show">
      <video
        class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/cn/机房循环.mp4"
      ></video>
    </div>

    <div class="video1container" v-if="!lang && video1show">
      <video
          class="video"
          @ended="video1end"
          autoplay
          muted
          src="../../assets/videos/en/风液混合型-入场.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="!lang && video2show">
      <video
          class="video"
          autoplay
          loop
          muted
          src="../../assets/videos/en/机房循环.mp4"
      ></video>
    </div>

    <div
        class="zhileng cur"
        @click="$router.push({ path: '/zhileng', query: $route.query })"
    ></div>
    <div
        class="gongdian cur"
        @click="$router.push({ path: '/gongdian', query: $route.query })"
    ></div>
    <div
        class="qita cur"
        @click="$router.push({ path: '/qita', query: $route.query })"
    ></div>

    <!--返回-->
    <img
        src="../../assets/imgs/back.png"
        v-show="video2show"
        class="check_en cur"
        @click="$router.push({ path:'/home', query: $route.query})"
    />
    <!--首页-->
    <img
        src="../../assets/imgs/home.png"
        class="check_en cur"
        v-show="video1show"
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
      var flat = localStorage.getItem("shuniu");
      flat == "false" ? (flat = false) : (flat = true);
      this.video1show = flat;
      this.video2show = !flat;
    }
  },
  created() {
    this.init()
  },
};
</script>


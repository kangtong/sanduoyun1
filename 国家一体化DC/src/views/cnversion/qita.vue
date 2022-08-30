
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
        src="../../assets/videos/cn/PLF入场.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="lang && video2show">
      <video
        class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/cn/PLF循环.mp4"
      ></video>
    </div>


    <div class="video1container" v-if="!lang && video1show">
      <video
        class="video"
        @ended="video1end"
        autoplay
        muted
        src="../../assets/videos/en/PLF入场.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="!lang && video2show">
      <video
        class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/en/PLF循环.mp4"
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
        @click="$router.push({ path: '/shuniu1', query: $route.query })"
    ></div>
	<div class="qita1 cur" @click="$router.push({ path: '/shuniu1', query: $route.query })"></div>
    <img
        src="../../assets/imgs/back.png"
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
    // localStorage.setItem("shuniu", false);
    this.init()
  },
};
</script>


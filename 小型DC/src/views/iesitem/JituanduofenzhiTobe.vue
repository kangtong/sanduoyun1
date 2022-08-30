<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <div class="video1container" v-show="video1show">
      <video
        v-show="lang"
        class="home_video"
        autoplay
        @ended="video1end"
        muted
        src="../../assets/videos/cn/集团多分支TOBE.mp4"
      ></video>
      <video
        v-show="!lang"
        class="home_video"
        autoplay
        @ended="video1end"
        muted
        src="../../assets/videos/en/集团多分支TOBE_EN.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="video2show">
      <video
        v-show="lang"
        class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/cn/集团多分支TOBE2.mp4"
      ></video>
      <video
        v-show="!lang"
        class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/en/集团多分支TOBE2_EN.mp4"
      ></video>
    </div>
    <!-- 切换到tobe页面 -->
    <div class="tobe_btn" @click="$router.push({ path:'jituanduofenzhiasis', query: $route.query})"></div>
    <!-- 返回到上一页 -->
    <div class="back_btn" @click="$router.push({ path:'intelligenceies', query: $route.query})"></div>
    <!-- 返回到首页 -->
    <div class="home_btn" @click="$router.push({ path:'/', query: $route.query})"></div>
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
      sessionStorage.setItem("jituanduofenzhi", this.video1show);
    },
  },
  created() {
    var flat = localStorage.getItem("jituanduofenzhi");
    console.log(flat);
    flat == "false" ? (flat = false) : (flat = true);
    this.video1show = flat;
    this.video2show = !flat;
    sessionStorage.setItem("jituanduofenzhi", true);
  },
};
</script>


<style lang="less" scoped>
.home_video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.tobe_btn {
  width: 9%;
  height: 6%;
  position: absolute;
  top: 2%;
  left: 40%;
  cursor: pointer;
  // border: 1px solid green;
}
.back_btn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93%;
  left: 92.7%;
  // border: 1px solid #fff;
}
.home_btn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93%;
  left: 96.2%;
  // border: 1px solid #fff;
}
</style>

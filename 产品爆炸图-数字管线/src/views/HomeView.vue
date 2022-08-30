
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
          autoplay
        muted
        src="../assets/videos/cn/数字管线-首页-入场.mp4"
      ></video>
      <video
          v-show="!lang"
          class="video"
          @ended="video1end"
          autoplay
          muted
          src="../assets/videos/en/数字管线-首页-入场-en.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="video2show">
      <video
          v-show="lang"
          class="video"
          autoplay
        loop
        muted
        src="../assets/videos/cn/数字管线-首页-循环.mp4"
      ></video>
      <video
          v-show="!lang"
          class="video"
          autoplay
          loop
          muted
          src="../assets/videos/en/数字管线-首页-循环-en.mp4"
      ></video>
    </div>
    <div v-show="video2show" class="shudian_btn cur" @click="$router.push({ path:'shudianxianlu', query: $route.query})"></div>
    <div v-show="video2show" class="youqi_btn cur" @click="$router.push({ path:'youqiguanxian', query: $route.query})"></div>
    <div v-show="video2show" class="guansui_btn cur" @click="$router.push({ path:'guansui', query: $route.query})"></div>
    <!-- 切换中英文 -->
    <div class="check_en cur rb0-fixed" :class="lang?'en':'cn'" @click="langSelect"></div>
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
    },
  },
  created() {
    if (sessionStorage.getItem('didEnter')) {
      this.video1show = false
      this.video2show = true
    }
    localStorage.setItem("shudian", true);
    localStorage.setItem("youqi", true);
    localStorage.setItem("guansui", true);
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
.shudian_btn {
  width: 21%;
  height: 22%;
  position: absolute;
  top: 28%;
  left: 13%;
  // border: 1px solid red;
}
.youqi_btn {
  width: 21%;
  height: 22%;
  position: absolute;
  top: 28%;
  left: 39%;
  // border: 1px solid red;
}
.guansui_btn {
  width: 21%;
  height: 22%;
  position: absolute;
  top: 28%;
  left: 66%;
  // border: 1px solid red;
}
.check_en {
  width: 48px;
  height: 48px;
  position: absolute;
  top: 93%;
  left: 96%;
  // border: 1px solid red;
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

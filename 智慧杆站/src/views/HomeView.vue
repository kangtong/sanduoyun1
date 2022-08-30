<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
        v-show="lang"
      autoplay
      loop
      muted
      class="video"
      src="../assets/video/cn/01智慧杆站 首页循环-转.mp4"
    ></video>
    <video
        v-show="!lang"
        autoplay
        loop
        muted
        class="video"
        src="../assets/video/en/01智慧杆站 首页循环-转.mp4"
    ></video>
    <!-- 智简部署 -->
    <div class="cur" :class="lang?'zhijianbushu':'enzhijianbushu'" @click="$router.push({ path: '/zhijianbushu', query: $route.query })"></div>
    <!-- 云边协同 -->
    <div class="cur" :class="lang?'yunbianxietong':'enyunbianxietong'" @click="$router.push({ path: '/yunbianxietong', query: $route.query })"></div>
    <!-- 智慧节能 -->
    <div class="cur" :class="lang?'zhihuijieneng':'enzhihuijieneng'" @click="$router.push({ path: '/zhihuijieneng', query: $route.query })"></div>
    <!-- 中英文切换 -->
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
  created() {
    sessionStorage.setItem("zhijianbushu1", true);
    sessionStorage.setItem("yunbianxietong1", true);
    sessionStorage.setItem("zhihuijieneng1", true);
    localStorage.setItem("isShow", false);
  },
};
</script>
<style lang='less' scoped>
.home_img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.zhijianbushu {
  width: 17%;
  height: 6%;
  // border: 1px solid red;
  position: absolute;
  top: 28%;
  left: 15.5%;
}
.yunbianxietong {
  width: 16%;
  height: 6%;
  // border: 1px solid red;
  position: absolute;
  top: 28%;
  left: 69%;
}
.zhihuijieneng {
  width: 17%;
  height: 6%;
  // border: 1px solid red;
  position: absolute;
  top: 73%;
  left: 32%;
}


.enzhijianbushu {
  width: 36%;
  height: 6%;
  position: absolute;
  top: 28%;
  left: 15%;
}
.enyunbianxietong {
  width: 26%;
  height: 6%;
  position: absolute;
  top: 28%;
  left: 69%;
}
.enzhihuijieneng {
  width: 27%;
  height: 6%;
  position: absolute;
  top: 74%;
  left: 32%;
}
</style>

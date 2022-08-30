<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      v-show="lang"
      class="home_video"
      autoplay
      muted
      loop
      src="../../assets/videos/cn/功能性页.mp4"
    ></video>
    <video
      v-show="!lang"
      class="home_video"
      autoplay
      muted
      loop
      src="../../assets/videos/en/功能性页_EN.mp4"
    ></video>
    <!-- 超融合资源池 -->
    <div class="chaoronghe" @click="$router.push({ path:'chaorongheresource', query: $route.query})"></div>
    <!-- 轻量化资源池 -->
    <div
      class="qinglianghua"
      @click="$router.push({ path:'qinglianghuaresource', query: $route.query})"
    ></div>
    <!-- fusioncube -->
    <div class="fusionmodule" @click="$router.push({ path:'fusionmodule', query: $route.query})"></div>
    <!-- 返回首页 -->
    <div class="home_btn" @click="$router.push({ path:'/', query: $route.query})"></div>
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>

<style lang="less" scoped>
.home_video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.chaoronghe {
  width: 13.5%;
  height: 20%;
  position: absolute;
  top: 53%;
  left: 9.5%;
  cursor: pointer;
  // border: 1px solid #fff;
}
.qinglianghua {
  width: 37%;
  height: 12.4%;
  position: absolute;
  top: 53.5%;
  left: 54.2%;
  cursor: pointer;
  // border: 1px solid #fff;
}
.fusionmodule {
  width: 37%;
  height: 13%;
  position: absolute;
  top: 68%;
  left: 54.2%;
  cursor: pointer;
  // border: 1px solid #fff;
}
.home_btn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93%;
  left: 96.2%;
}
</style>


<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      class="video"
      ref="fcvideo"
      :autoplay="lang"
      loop
      src="../../assets/videos/cn/M7641-cn - 2.mp4"
    ></video>
    <div @click="$router.push({ path:'youqiguanxian', query: $route.query})" class="home_btn cur close_icon" alt=""></div>
    <div @click="HandleStartPlayPc" class="stop_btn"></div>
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
  created() {
    localStorage.setItem("youqi", false);
  },
};
</script>

<style lang='less' scoped>
.home {
  width: 100%;
  height: 100%;
  .video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .home_btn {
    position: absolute;
    top: 72.7%;
    left: 89.5%;
    // border: 1px solid red;
  }
  .stop_btn {
    width: 2.8%;
    height: 5%;
    position: absolute;
    top: 79.3%;
    left: 89.5%;
    // border: 1px solid red;
  }
}
</style>

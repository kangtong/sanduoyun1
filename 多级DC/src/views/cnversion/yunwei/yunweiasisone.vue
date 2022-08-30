
<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
        v-show="lang"
      class="img"
      muted
      loop
      autoplay
      src="../../../assets/videos/cn/02统一运营运维ASIS02-CN.mp4"
    ></video>
    <video
        v-show="!lang"
        class="img"
        muted
        loop
        autoplay
        src="../../../assets/videos/en/02统一运营运维ASIS02-EN.mp4"
    ></video>
    <div class="home_btn cur" @click="$router.push({ path:'/', query: $route.query})"></div>
    <div class="tobe cur" @click="$router.push({ path:'/yunweitobe', query: $route.query})"></div>
    <div class="asis cur" @click="$router.push({ path:'/yunweiasis', query: $route.query})"></div>
  </div>
</template>

<script>
import { myMixins } from "../../../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>

<style lang='less' scoped>
.img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.tobe {
  width: 9%;
  height: 5%;
  position: absolute;
  top: 3%;
  left: 51%;
  // border: 1px solid red;
}
.asis {
  width: 22%;
  height: 6%;
  position: absolute;
  top: 41%;
  left: 73%;
  // border: 1px solid red;
}
</style>

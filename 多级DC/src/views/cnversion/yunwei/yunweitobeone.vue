
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
      src="../../../assets/videos/cn/03统一运营运维 TOBE02-CN.mp4"
    ></video>
    <video
        v-show="!lang"
        class="img"
        muted
        loop
        autoplay
        src="../../../assets/videos/en/03统一运营运维 TOBE02-EN.mp4"
    ></video>
    <div class="home_btn cur" @click="$router.push({ path:'/', query: $route.query})"></div>
    <div class="asis cur" @click="$router.push({ path:'/yunweiasis', query: $route.query})"></div>
    <div class="tobe cur" @click="$router.push({ path:'/yunweitobe', query: $route.query})"></div>
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
.asis {
  width: 9%;
  height: 6%;
  position: absolute;
  top: 2%;
  left: 39.6%;
  // border: 1px solid red;
}
.tobe {
  width: 20%;
  height: 6%;
  position: absolute;
  top: 41%;
  left: 74%;
  // border: 1px solid red;
}
</style>

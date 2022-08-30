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
      src="../../../assets/videos/cn/05统一安全管控 TOBE-转.mp4"
    ></video>
    <video
        v-show="!lang"
        class="img"
        muted
        loop
        autoplay
        src="../../../assets/videos/en/05统一安全管控 TOBE-转.mp4"
    ></video>
    <!-- 返回按钮 -->
    <div class="back_btn cur" @click="$router.push({ path:'/zongbuguankongyun', query: $route.query})"></div>
    <div class="home_btn cur" @click="$router.push({ path:'/', query: $route.query})"></div>
    <div class="asis cur" @click="$router.push({ path:'/backguankongasis', query: $route.query})"></div>
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
  height: 5%;
  position: absolute;
  top: 3%;
  left: 40%;
  // border: 1px solid red;
}
.back_btn{
  background: url("../../../assets/img/back.png") no-repeat;
  background-size: 100% 100%;
}
</style>

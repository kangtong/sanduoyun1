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
      src="../../../assets/videos/cn/012统一云网编排子页002-中文0617.mp4"
    ></video>
    <video
        v-show="!lang"
        class="img"
        muted
        loop
        autoplay
        src="../../../assets/videos/en/012统一云网编排子页002-英文0617.mp4"
    ></video>
    <!-- 返回按钮 -->
    <div class="backone_btn cur" @click="$router.push({ path:'/zongbuguankongyun', query: $route.query})"></div>
    <div class="next_btn cur" @click="$router.push({ path:'/backyunwangone', query: $route.query})"></div>
    <div class="home_btn cur" @click="$router.push({ path:'/', query: $route.query})"></div>

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
.next_btn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93.5%;
  left: 92.3%;
  background: url("../../../assets/img/up.png") no-repeat;
  background-size: 100% 100%;
  // border: 1px solid red;
}
.backone_btn {
  width: 3%;
  height: 5%;
  position: absolute;
  top: 93.5%;
  left: 88.5%;
  background: url("../../../assets/img/back.png") no-repeat;
  background-size: 100% 100%;
  // border: 1px solid red;
}
</style>

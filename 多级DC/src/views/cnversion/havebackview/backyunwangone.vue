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
      src="../../../assets/videos/cn/011统一云网编排子页001-中文0616.mp4"
    ></video>
    <video
        v-show="!lang"
        class="img"
        muted
        loop
        autoplay
        src="../../../assets/videos/en/011统一云网编排子页001-英文0616.mp4"
    ></video>
    <!-- 返回按钮 -->
    <div class="backone_btn cur" @click="$router.push({ path:'/zongbuguankongyun', query: $route.query})"></div>
    <div class="next_btn cur" @click="$router.push({ path:'/backyunwangtwo', query: $route.query})"></div>
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
  background: url("../../../assets/img/next.png") no-repeat;
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

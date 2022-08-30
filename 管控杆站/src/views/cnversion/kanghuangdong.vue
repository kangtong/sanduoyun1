
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
      class="home_img"
      src="../../assets/video/cn/04管控杆站-超远覆盖，雷视融合.mp4"
    ></video>
    <video
      v-show="!lang"
      autoplay
      loop
      muted
      class="home_img"
      src="../../assets/video/en/04管控杆站-超远覆盖，雷视融合-转.mp4"
    ></video>
    <!-- 返回首页 -->
    <img
      @click="$router.push({path:'/',query: $route.query})"
      class="home_btn cur rb0-fixed"
      src="../../assets/imgs/home.png"
      alt=""
    />
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>

<style lang='less' scoped>
.home_img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.home_btn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93.3%;
  left: 96.3%;
}
</style>

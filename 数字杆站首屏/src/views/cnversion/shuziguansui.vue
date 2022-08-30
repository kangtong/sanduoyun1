<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
      v-show="lang"
      loop
      autoplay
      muted
      class="home_img"
      src="../../assets/videos/cn/数字管线/数字管遂_1.mp4"
    ></video>
    <video
      v-show="!lang"
      loop
      autoplay
      muted
      class="home_img"
      src="../../assets/videos/en/数字管线/数字管遂_1.mp4"
    ></video>
    <!-- 回到首页 -->
    <img
      @click="$router.push({ path:'/', query: $route.query})"
      class="home_en rb0-fixed"
      src="../../assets/imgs/home.png"
      alt=""
    />
    <div class="close" @click="back"></div>
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
.check_en {
  position: absolute;
  top: 92%;
  left: 90%;
}
.home_en {
  width: 48px;
  height: 48px;
  position: absolute;
  top: 93%;
  left: 96%;
}
</style>

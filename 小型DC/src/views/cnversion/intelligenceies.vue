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
      src="../../assets/videos/cn/智能边缘小站IES.mp4"
    ></video>
    <video
      v-show="!lang"
      class="home_video"
      autoplay
      muted
      loop
      src="../../assets/videos/en/智能边缘小站IES_EN.mp4"
    ></video>
    <!-- saas本地化部署场景 -->
    <div class="saas_btn" @click="$router.push({ path:'saasasis', query: $route.query})"></div>
    <!-- 一站式大数据场景 -->
    <div class="yizhanshi_btn" @click="$router.push({ path:'yizhanshiasis', query: $route.query})"></div>
    <!-- 集团多分级机构场景 -->
    <div
      class="jituanduofenzhi"
      @click="$router.push({ path:'jituanduofenzhiasis', query: $route.query})"
    ></div>
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
.saas_btn {
  width: 18%;
  height: 25%;
  position: absolute;
  top: 18%;
  left: 36%;
  cursor: pointer;
  // border: 1px solid #fff;
}
.yizhanshi_btn {
  width: 18%;
  height: 25%;
  position: absolute;
  top: 18%;
  left: 56%;
  cursor: pointer;
  // border: 1px solid #fff;
}
.jituanduofenzhi {
  width: 18%;
  height: 25%;
  position: absolute;
  top: 18%;
  left: 75%;
  cursor: pointer;
  // border: 1px solid #fff;
}
.home_btn {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93%;
  left: 96%;
  // border: 1px solid red;
}
</style>

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
      src="../assets/videos/cn/01数字管隧首页CN.mp4"
    ></video>
    <video
        v-show="!lang"
        class="home_video"
        autoplay
        muted
        loop
        src="../assets/videos/en/01数字管隧首页EN.mp4"
    ></video>
    <!--  隧道监测站 -->
    <div :class="lang?'sd':'ensd'" @click="$router.push({ path:'suidao', query: $route.query})"></div>
    <!-- 管廊检测站 -->
    <div :class="lang?'gl':'engl'" @click="$router.push({ path:'guanlang', query: $route.query})"></div>
    <!-- 中英文切换 -->
    <div class="rb0-fixed" :class="lang?'check_en':'check_cn'" @click="langSelect"></div>
  </div>
</template>

<script>
import { myMixins } from "../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>
<style lang='less' scoped>
.home_video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.sd {
  width: 17%;
  height: 7%;
  position: absolute;
  top: 24.5%;
  left: 44.5%;
  cursor: pointer;
}

.gl {
  width: 17%;
  height: 7%;
  position: absolute;
  top: 71%;
  left: 57.5%;
  cursor: pointer;
}
.check_en {
  width: 48px;
  height: 48px;
  position: absolute;
  top: 93%;
  left: 96%;
  z-index: 2;
  background: url("../assets/imgs/EN-.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.check_cn {
  width: 48px;
  height: 48px;
  position: absolute;
  top: 93%;
  left: 96%;
  z-index: 2;
  background: url("../assets/imgs/CN-.png") no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
}
.ensd {
  width: 29%;
  height: 7%;
  position: absolute;
  top: 24.5%;
  left: 44.5%;
  cursor: pointer;
}

.engl {
  width: 35%;
  height: 7%;
  position: absolute;
  top: 71%;
  left: 57.5%;
  cursor: pointer;
}
</style>

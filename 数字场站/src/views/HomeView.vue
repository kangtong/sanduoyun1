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
      src="../assets/videos/cn/01数字场站-首页CN.mp4"
    ></video>
    <video
        v-show="!lang"
        class="home_video"
        autoplay
        muted
        loop
        src="../assets/videos/en/01数字场站-首页EN.mp4"
    ></video>
    <!--  智能巡检 -->
    <div :class="lang?'znxj':'enznxj'" @click="$router.push({ path:'zhinengxunjian', query: $route.query})"></div>
    <!-- 全景感知 -->
    <div :class="lang?'qjgz':'enqjgz'" @click="$router.push({ path:'quanjingganzhi', query: $route.query})"></div>
    <!-- 中英文切换 -->
    <div class="check rb0-fixed" :class="lang?'check_en':'check_cn'" @click="langSelect"></div>

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
.znxj {
  width: 17%;
  height: 7%;
  position: absolute;
  top: 19%;
  left: 21.5%;
  cursor: pointer;
}

.qjgz {
  width: 17%;
  height: 7%;
   //border: 1px solid red;
  position: absolute;
  top: 61.7%;
  left: 66%;
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
.enznxj {
  width: 24%;
  height: 7%;
  position: absolute;
  top: 19%;
  left: 21.5%;
  cursor: pointer;
}

.enqjgz {
  width: 21%;
  height: 7%;
  position: absolute;
  top: 61.7%;
  left: 66%;
  cursor: pointer;
}
</style>

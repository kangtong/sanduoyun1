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
      class="home_video"
      src="../assets/videos/cn/首页.mp4"
    ></video>
    <video
      v-show="!lang"
      autoplay
      loop
      muted
      class="home_video"
      src="../assets/videos/en/首页_EN.mp4"
    ></video>
    <!-- fusionmodule800 -->
    <div class="fusionmodule" @click="$router.push({ path:'fusioncube800', query: $route.query})"></div>
    <!-- fusioncube1000h -->
    <div class="fusioncubeh" @click="$router.push({ path:'fusioncube1000h', query: $route.query})"></div>
    <!-- OceanStor2810 -->
    <div class="OceanStor" @click="$router.push({ path:'oceanstor', query: $route.query})"></div>
    <!-- 智能边缘小站IES -->
    <div class="ies" @click="$router.push({ path:'intelligenceies', query: $route.query})"></div>
    <!-- fusioncube1000c -->
    <div class="fusioncube" @click="$router.push({ path:'fusioncube1000c', query: $route.query})"></div>
    <!--  fusioncube500 -->
    <div class="fusioncubefive" @click="$router.push({ path:'fusioncubefive', query: $route.query})"></div>
    <!-- atlas500 -->
    <div class="atlasfive" @click="$router.push({ path:'atals', query: $route.query})"></div>
    <!-- demo_button -->
    <div class="deme_btm" @click="$router.push({ path:'demoview', query: $route.query})"></div>
    <!-- 中英文切换 -->
    <!-- <div class="check_en" @click="$router.push('/enhomeview')"></div> -->
    <div class="check" :class="lang?'en':'cn'" @click="langSelect"></div>

  </div>
</template>

<script>
import { myMixins } from "../assets/js/mixin";
export default {
  mixins: [myMixins],
  created() {
    sessionStorage.setItem("saasasis", true);
    sessionStorage.setItem("saastobe", true);
    sessionStorage.setItem("jituanduofenzhi", true);
  },
};
</script>
<style lang='less' scoped>
.home_video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.fusionmodule {
  width: 8%;
  height: 14%;
  // border: 1px solid red;
  position: absolute;
  top: 24%;
  left: 65%;
  cursor: pointer;
}
.fusioncubeh {
  width: 7%;
  height: 14%;
  // border: 1px solid red;
  position: absolute;
  top: 24%;
  left: 78%;
  cursor: pointer;
}
.OceanStor {
  width: 8%;
  height: 11%;
  // border: 1px solid red;
  position: absolute;
  top: 48%;
  left: 83%;
  cursor: pointer;
}
.ies {
  width: 11%;
  height: 16%;
  // border: 1px solid red;
  position: absolute;
  top: 43%;
  left: 71%;
  cursor: pointer;
}
.fusioncube {
  width: 10%;
  height: 14%;
  // border: 1px solid red;
  position: absolute;
  top: 45%;
  left: 60%;
  cursor: pointer;
}
.fusioncubefive {
  width: 11%;
  height: 14%;
  // border: 1px solid red;
  position: absolute;
  top: 68%;
  left: 61%;
  cursor: pointer;
}
.atlasfive {
  width: 11%;
  height: 15%;
  // border: 1px solid red;
  position: absolute;
  top: 67%;
  left: 76%;
  cursor: pointer;
}
.deme_btm {
  width: 2.8%;
  height: 5%;
  // border: 1px solid red;
  position: absolute;
  top: 93%;
  left: 96%;
}
.check_en {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93%;
  left: 92.6%;
  cursor: pointer;
  background: url("../assets/imgs/en.png") no-repeat;
  background-size: 100% 100%;
}
.check {
  width: 2.8%;
  height: 5%;
  position: absolute;
  top: 93%;
  left: 92.6%;
  cursor: pointer;
}
.en{
  background: url("../assets/imgs/en.png") no-repeat;
  background-size: 100% 100%;
}
.cn{
  background: url("../assets/imgs/cn.png") no-repeat;
  background-size: 100% 100%;
}
</style>

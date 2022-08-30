<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
        v-show="lang"
      class="home_img"
      muted
      loop
      autoplay
      src="../assets/videos/cn/001多级DC新首页  CN.mp4"
    ></video>
    <video
        v-show="!lang"
        class="home_img"
        muted
        loop
        autoplay
        src="../assets/videos/en/001多级DC新首页  EN.mp4"
    ></video>
    <!-- 统一运维管理 -->
    <div class="tongyiyunwei cur" @click="$router.push({ path:'yunweiasis', query: $route.query})"></div>
    <!-- 统一安全管控 -->
    <div class="tongyianquan cur" @click="$router.push({ path:'guankongasis', query: $route.query})"></div>
    <!-- 统一云网编排 -->
    <div class="yunwang cur" @click="$router.push({ path:'yunwangone', query: $route.query})"></div>
    <!-- 总部管控云 -->
    <div class="zongbu cur" @click="$router.push({ path:'zongbuguankongyun', query: $route.query})"></div>
    <!-- 轻量化分支 -->
    <div
      class="qinglianghua cur"
      @click="$router.push({ path:'qinglinaghuafenzhi', query: $route.query})"
    ></div>
    <!-- 至简分支 -->
    <div class="zhijian cur" @click="$router.push({ path:'zhijianfenzhi', query: $route.query})"></div>
    <!-- 云化分支 -->
    <div class="cur" :class="lang?'yunhua':'enyunhua'" @click="$router.push({ path:'yunhuafenzhi', query: $route.query})"></div>
    <!-- 中英文切换按钮 -->
    <div class="check" :class="lang?'en':'cn'" @click="langSelect"></div>

  </div>
</template>

<script>
import { myMixins } from "../assets/js/mixin";
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
.tongyiyunwei {
  width: 7.5%;
  height: 10%;
   //border: 1px solid red;
  position: absolute;
  top: 15.2%;
  left: 34.7%;
}
.tongyianquan {
  width: 8.5%;
  height: 11%;
   //border: 1px solid red;
  position: absolute;
  top: 15%;
  left: 57.4%;
}
.yunwang {
  width: 7.5%;
  height: 10%;
   //border: 1px solid red;
  position: absolute;
  top: 15.2%;
  left: 14.5%;
}
.zongbu {
  width: 10.5%;
  height: 5%;
   //border: 1px solid red;
  position: absolute;
  top: 33.2%;
  left: 44.7%;
}
.zhijian {
  width: 4.5%;
  height: 10.5%;
   //border: 1px solid red;
  position: absolute;
  top: 15%;
  left: 79.5%;
}
.yunhua {
  width: 11.5%;
  height: 3.5%;
   //border: 1px solid red;
  position: absolute;
  top: 56.6%;
  left: 64.5%;
}
.enyunhua {
  width: 11.5%;
  height: 3.5%;
   //border: 1px solid red;
  position: absolute;
  top: 56.6%;
  left: 60%;
}
.qinglianghua {
  width: 11.5%;
  height: 4.2%;
   //border: 1px solid red;
  position: absolute;
  top: 73.5%;
  left: 10.5%;
}
.check {
  width: 48px;
  height: 48px;
  position: absolute;
  top: 93%;
  left: 96%;
  z-index: 2;
  cursor: pointer;
}
.en{
  background: url("../assets/img/EN.png") no-repeat;
  background-size: 100% 100%;
}
.cn{
  background: url("../assets/img/CN.png") no-repeat;
  background-size: 100% 100%;
}
</style>

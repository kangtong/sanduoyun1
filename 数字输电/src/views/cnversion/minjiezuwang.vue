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
      src="../../assets/videos/cn/02敏捷组网循环.mp4"
    ></video>
    <video
        v-show="!lang"
        class="home_video"
        autoplay
        muted
        loop
        src="../../assets/videos/en/02敏捷组网循环.mp4"
    ></video>
    <img
      class="home_btn rb0-fixed"
      src="../../assets/imgs/home.png"
      @click="$router.push({ path:'/', query: $route.query})"
    />
    <!-- 自组网+4G公网回传 -->
    <div :class="lang?'qinglianghua':'enqinglianghua'" @click="$router.push({ path:'qinglianghua', query: $route.query})"></div>
    <!-- 无线短距回传方案 -->
    <div class="opgw" @click="$router.push({ path:'opgw', query: $route.query})"></div>
    <!-- 微波长距回传方案 -->
    <div :class="lang?'weibo':'enweibo'" @click="$router.push({ path:'weibochangju', query: $route.query})"></div>
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default { mixins: [myMixins] };
</script>

<style lang="less" scoped>
.qinglianghua {
  width: 16%;
  height: 7%;
  position: absolute;
  top: 53%;
  left: 60%;
  cursor: pointer;
}
.weibo {
  width: 17%;
  height: 7%;
  position: absolute;
  top: 5%;
  left: 67%;
  cursor: pointer;
}
.enweibo {
  width: 16%;
  height: 7%;
  position: absolute;
  top: 5%;
  left: 62%;
  cursor: pointer;
}
.opgw {
  width: 16%;
  height: 7%;
  position: absolute;
  top: 30%;
  left: 8%;
  cursor: pointer;
}
.enqinglianghua {
  width: 25%;
  height: 7%;
  position: absolute;
  top: 53%;
  left: 60%;
  cursor: pointer;
}
</style>

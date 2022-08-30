
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
      src="../../../assets/videos/cn/TO B 展厅版 中文版.mp4"
    ></video>
    <video
        v-show="!lang"
        class="img"
        muted
        loop
        autoplay
        src="../../../assets/videos/en/TO B 展厅版 英文版.mp4"
    ></video>
    <!-- 返回按钮 -->
    <div class="back_btn cur" @click="$router.push({ path:'/qinglinaghuafenzhi', query: $route.query})"></div>
    <div class="home_btn cur" @click="$router.push({ path:'/', query: $route.query})"></div>
    <div class="asis cur" @click="$router.push({ path:'/gaoxiaoasis', query: $route.query})"></div>
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
.asis {
  width: 9%;
  height: 7%;
  position: absolute;
  top: 1%;
  left: 40%;
  // border: 1px solid red;
}
.back_btn{
  background: url("../../../assets/img/back1.png") no-repeat;
  background-size: 100% 100%;
}
.home_btn{
  background: url("../../../assets/img/home1.png") no-repeat;
  background-size: 100% 100%;
}
</style>

<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
        v-show="lang"
      autoplay
      muted
      loop
      class="img"
      src="../../../assets/videos/cn/009总部管控云-中文0608.mp4"
    />
    <video
        v-show="!lang"
        autoplay
        muted
        loop
        class="img"
        src="../../../assets/videos/en/009总部管控云-英文0607.mp4"
    />
    <!-- 统一运维管理 -->
    <div class="tongyiyunwei cur" @click="$router.push({ path:'/backyunweiasis', query: $route.query})"></div>
    <!-- 统一安全管控 -->
    <div class="tongyianquan cur" @click="$router.push({ path:'/backguankongasis', query: $route.query})"></div>
    <!-- 统一云网编排 -->
    <div class="yunwang cur" @click="$router.push({ path:'/backyunwangone', query: $route.query})"></div>
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
.tongyiyunwei {
  width: 12.5%;
  height: 5%;
  // border: 1px solid red;
  position: absolute;
  top: 70.2%;
  left: 73.7%;
}
.tongyianquan {
  width: 12.5%;
  height: 5%;
  // border: 1px solid red;
  position: absolute;
  top: 20%;
  left: 73.7%;
}
.yunwang {
  width: 12.5%;
  height: 5%;
  // border: 1px solid red;
  position: absolute;
  top: 45.2%;
  left: 73.7%;
}
</style>

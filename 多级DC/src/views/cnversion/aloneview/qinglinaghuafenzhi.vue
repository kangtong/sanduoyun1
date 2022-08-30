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
      class="img"
      src="../../../assets/videos/cn/010轻量化分支-中文0608.mp4"
    />
    <video
        v-show="!lang"
        loop
        autoplay
        muted
        class="img"
        src="../../../assets/videos/en/010轻量化分支-英文0624.mp4"
    />
    <!-- 轻量极简 -->
    <div class="qingliang cur" @click="$router.push({ path:'zhijianfenzhione', query: $route.query})"></div>
    <!-- 高效协同 -->
    <div class="gaoxiao cur" @click="$router.push({ path:'gaoxiaoasis', query: $route.query})"></div>
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
.qingliang {
  width: 12.5%;
  height: 5%;
  position: absolute;
  top: 23%;
  left: 73.8%;
  // border: 1px solid red;
}
.gaoxiao {
  width: 15.6%;
  height: 5%;
  position: absolute;
  top: 62%;
  left: 72.2%;
  // border: 1px solid red;
}
</style>

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
      src="../../assets/videos/cn/数字杆站/数字杆站_1.mp4"
    ></video>
    <video
      v-show="!lang"
      loop
      autoplay
      muted
      class="home_img"
      src="../../assets/videos/en/数字杆站/数字杆站_1.mp4"
    ></video>
    <!-- 检测杆站 -->
    <div class="jianceganzhan" @click="$router.push({ path:'jianceganzhan', query: $route.query})"></div>
    <!-- 智慧杆站 -->
    <div class="zhihuiganzhan" @click="$router.push({ path:'zhihuiganzhan', query: $route.query})"></div>
    <!-- 管控杆站 -->
    <div class="guankongganzhan" @click="$router.push({ path:'guankongganzhan', query: $route.query})"></div>
    <!-- 回到首页 -->
    <img
      @click="$router.push({ path:'/', query: $route.query})"
      class="home_en rb0-fixed"
      src="../../assets/imgs/home.png"
      alt=""
    />
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
  created() {
    sessionStorage.setItem("saasasis", false);
  }
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
  cursor: pointer;
}
.jianceganzhan{
  width: 19.5%;
  height: 28.7%;
  position: absolute;
  top: 51%;
  left: 24%;
  cursor:pointer;
}
.zhihuiganzhan{
  width: 19.5%;
  height: 28.7%;
  position: absolute;
  top: 51%;
  left: 49.7%;
  cursor:pointer;
}
.guankongganzhan{
  width: 19.5%;
  height: 28.7%;
  position: absolute;
  top: 51%;
  left: 75.7%;
  cursor:pointer;
}
</style>

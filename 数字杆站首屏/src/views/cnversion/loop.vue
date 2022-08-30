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
      src=""
    ></video>
    <video
      v-show="!lang"
      loop
      autoplay
      muted
      class="home_img"
      src=""
    ></video>
    <!-- 返回首页 -->
    <div class="home_btn rb0-fixed" @click="$router.push({ path:'/', query: $route.query})"></div>
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
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
.check_en {
  position: absolute;
  top: 92%;
  left: 94%;
}
.tondian {
  width: 3%;
  height: 6%;
  border: 1px solid red;
  position: absolute;
  top: 92%;
  left: 90%;
  background-color: green;
}
.jiejuefangan {
  width: 3%;
  height: 6%;
  border: 1px solid red;
  position: absolute;
  top: 92%;
  left: 85%;
  background-color: green;
}
.home_btn {
  width: 3%;
  height: 5%;
  position: absolute;
  border: 1px solid red;
  top: 93%;
  left: 96%;
}
</style>

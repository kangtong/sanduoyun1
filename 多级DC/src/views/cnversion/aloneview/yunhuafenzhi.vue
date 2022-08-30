<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <img
        v-show="lang"
      class="img"
      src="../../../assets/videos/cn/013云化分支-中文-CN.jpg"
      alt=""
    />
    <img
        v-show="!lang"
        class="img"
        src="../../../assets/videos/en/013云化分支-英文0624-EN.jpg"
        alt=""
    />
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
</style>

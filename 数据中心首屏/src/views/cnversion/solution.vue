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
      class="video"
      src="../../assets/video/cn/4k版本-尾页1.mp4"
    ></video>
    <video
        v-show="!lang"
        autoplay
        loop
        muted
        class="video"
        src="../../assets/video/en/4k版本-尾页1.mp4"
    ></video>
    <!-- 趋势与挑战 -->
    <img
        @click="$router.push({ path: '/challenge', query: $route.query })"
        :src="require(lang?'../../assets/imgs/按钮/01.趋势与调站.png':'../../assets/imgs/英文按钮/01.趋势与调站.png')"
        class="two"
    />
    <!-- 全栈数据中心解决方案 -->
    <img
        :src="require(lang?'../../assets/imgs/按钮/02.全栈数据中心解决方案.png':'../../assets/imgs/英文按钮/02.全栈数据中心解决方案.png')"
        class="three"
        @click="$router.push({ path: '/solution', query: $route.query })"
    />
    <!-- 集中式数据中心 -->
    <img
        :src="require(lang?'../../assets/imgs/按钮/03集中式数据中心.png':'../../assets/imgs/英文按钮/03集中式数据中心.png')"
        @click="$router.push({ path: '/resourcepool', query: $route.query })"
        class="four"
    />
    <!-- 小型数据中心 -->
    <img
        :src="require(lang?'../../assets/imgs/按钮/04.小型数据中心.png':'../../assets/imgs/英文按钮/04.小型数据中心.png')"
        @click="$router.push({ path: '/littledc', query: $route.query })"
        class="five"
    />
    <!-- 多级数据中心 -->
    <img
        :src="require(lang?'../../assets/imgs/按钮/05.多数据中心.png':'../../assets/imgs/英文按钮/05.多数据中心.png')"
        class="six"
        @click="$router.push({ path: '/yunwei', query: $route.query })"
    />
    <!-- 人工智能计算中心 -->
    <img
        :src="require(lang?'../../assets/imgs/按钮/06.人工智能计算中心.png':'../../assets/imgs/英文按钮/06.人工智能计算中心.png')"
        class="seven"
        @click="$router.push({ path: '/aiintelligence', query: $route.query })"
    />
    <!-- 高性能计算中心 -->
    <img
        :src="require(lang?'../../assets/imgs/按钮/07.高性能计算中心.png':'../../assets/imgs/英文按钮/07.高性能计算中心.png')"
        class="eight"
        @click="$router.push({ path: '/hieightmathcenter', query: $route.query })"
    />
    <!-- 国家一体化大数据中心 -->
    <img
        :src="require(lang?'../../assets/imgs/按钮/08.国家一体化大数据中心.png':'../../assets/imgs/英文按钮/08.国家一体化大数据中心.png')"
        class="nine"
        @click="$router.push({ path: '/dongshuxisuan', query: $route.query })"
    />
    <!-- 返回屏保 -->
    <img
        src="../../assets/imgs/按钮/HOME.png"
        class="home_btn"
        @click="$router.push({ path: '/', query: $route.query })"
    />
    <!-- 切换中英文 -->
    <img
        v-if="lang"
        src="../../assets/imgs/按钮/EN.png"
        class="check_en"
        @click="langSelect"
    />
    <img
        v-else
        src="../../assets/imgs/按钮/CN.png"
        class="check_en"
        @click="langSelect"
    />
    <!-- 底框 -->
    <img src="../../assets/imgs/按钮/底框.png" class="dikuang" alt="" />
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
};
</script>
<style lang='less' scoped>
.video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>

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
      src="../assets/video/cn/J1屏保-cn-无界面.mp4"
    ></video>
    <video
        v-show="!lang"
        autoplay
        loop
        muted
        class="video"
        src="../assets/video/en/J1屏保-en-无界面.mp4"
    ></video>
    <!-- 国家一体化大数据中心 -->
    <div class="guojiayitihua cur" @click="$router.push({ path: '/dongshuxisuan', query: $route.query })"></div>
    <!-- 小型数据中心 -->
    <div class="xiaoxingshuju cur" @click="$router.push({ path: '/littledc', query: $route.query })"></div>
    <!-- 集中式数据中心 -->
    <div class="jizhongshishuju cur" @click="$router.push({ path: '/resourcepool', query: $route.query })"></div>
    <!-- 多级数据中心 -->
    <div class="duojishuju cur" @click="$router.push({ path: '/yunwei', query: $route.query })"></div>
    <!-- 人工智能计算中心 -->
    <div class="rengongzhineng cur" @click="$router.push({ path: '/aiintelligence', query: $route.query })"></div>
    <!-- 高性能计算中心 -->
    <div class="gaoxingnengjisuan cur" @click="$router.push({ path: '/hieightmathcenter', query: $route.query })"></div>
    <!-- 趋势与挑战 -->
    <img
      @click="$router.push({ path: '/challenge', query: $route.query })"
      :src="require(lang?'../assets/imgs/按钮/01.趋势与调站.png':'../assets/imgs/英文按钮/01.趋势与调站.png')"
      class="two"
    />
    <!-- 全栈数据中心解决方案 -->
    <img
        :src="require(lang?'../assets/imgs/按钮/02.全栈数据中心解决方案.png':'../assets/imgs/英文按钮/02.全栈数据中心解决方案.png')"
      class="three"
      @click="$router.push({ path: '/solution', query: $route.query })"
    />
    <!-- 集中式数据中心 -->
    <img
        :src="require(lang?'../assets/imgs/按钮/03集中式数据中心.png':'../assets/imgs/英文按钮/03集中式数据中心.png')"
        @click="$router.push({ path: '/resourcepool', query: $route.query })"
      class="four"
    />
    <!-- 小型数据中心 -->
    <img
        :src="require(lang?'../assets/imgs/按钮/04.小型数据中心.png':'../assets/imgs/英文按钮/04.小型数据中心.png')"
        @click="$router.push({ path: '/littledc', query: $route.query })"
      class="five"
    />
    <!-- 多级数据中心 -->
    <img
        :src="require(lang?'../assets/imgs/按钮/05.多数据中心.png':'../assets/imgs/英文按钮/05.多数据中心.png')"
      class="six"
      @click="$router.push({ path: '/yunwei', query: $route.query })"
    />
    <!-- 人工智能计算中心 -->
    <img
        :src="require(lang?'../assets/imgs/按钮/06.人工智能计算中心.png':'../assets/imgs/英文按钮/06.人工智能计算中心.png')"
      class="seven"
      @click="$router.push({ path: '/aiintelligence', query: $route.query })"
    />
    <!-- 高性能计算中心 -->
    <img
        :src="require(lang?'../assets/imgs/按钮/07.高性能计算中心.png':'../assets/imgs/英文按钮/07.高性能计算中心.png')"
      class="eight"
      @click="$router.push({ path: '/hieightmathcenter', query: $route.query })"
    />
    <!-- 国家一体化大数据中心 -->
    <img
        :src="require(lang?'../assets/imgs/按钮/08.国家一体化大数据中心.png':'../assets/imgs/英文按钮/08.国家一体化大数据中心.png')"
      class="nine"
      @click="$router.push({ path: '/dongshuxisuan', query: $route.query })"
    />
    <!-- 返回屏保 -->
    <img
      src="../assets/imgs/按钮/HOME.png"
      class="home_btn"
      @click="$router.push({ path: '/', query: $route.query })"
    />
    <!-- 切换中英文 -->
    <img
        v-if="lang"
      src="../assets/imgs/按钮/EN.png"
      class="check_en"
      @click="langSelect"
    />
    <img
        v-else
        src="../assets/imgs/按钮/CN.png"
        class="check_en"
        @click="langSelect"
    />
    <!-- 底框 -->
    <img src="../assets/imgs/按钮/底框.png" class="dikuang" alt="" />
  </div>
</template>

<script>
import { myMixins } from "../assets/js/mixin";
export default {
  mixins: [myMixins],
  methods: {
  },
};
</script>
<style lang='less' scoped>
.guojiayitihua {
  width: 11.5%;
  height: 4%;
  position: absolute;
  top: 29%;
  left: 18%;
}
.xiaoxingshuju {
  width: 8.5%;
  height: 4%;
  position: absolute;
  top: 37.5%;
  left: 31.8%;
}
.jizhongshishuju {
  width: 8%;
  height: 4%;
  position: absolute;
  top: 53%;
  left: 41.5%;
}
.duojishuju {
  width: 7%;
  height: 4%;
  position: absolute;
  top: 44%;
  left: 66%;
}
.rengongzhineng {
  width: 9.5%;
  height: 4%;
  position: absolute;
  top: 39%;
  left: 72.5%;
}
.gaoxingnengjisuan {
  width: 8.5%;
  height: 4%;
  position: absolute;
  top: 30%;
  left: 68.5%;
}
</style>

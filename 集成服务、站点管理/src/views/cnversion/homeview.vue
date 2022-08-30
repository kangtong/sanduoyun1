<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
        v-show="lang"
        class="video"
      autoplay
      loop
      muted
      src="../../assets/videos/cn/大首页-循环.mp4"
    ></video>
    <video
        v-show="!lang"
        class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/en/大首页-循环.mp4"
    ></video>
    <!-- 站点管理 -->
    <div class="siteadmin"></div>
    <!-- 集成服务 -->
    <div class="integrate"></div>
    <!-- 站点管理遮罩 -->
    <img
        src="../../assets/imgs/站点管理点击.png"
        v-show="lang"
        class="siteadmin_dialog btn"
      @click="$router.push({ path:'huaweiesight', query: $route.query})"
    />
    <img
        src="../../assets/imgs/站点管理英文点击.png"
        v-show="!lang"
        class="siteadmin_dialog btn"
        @click="$router.push({ path:'huaweiesight', query: $route.query})"
    />
    <!-- 集成服务遮罩 -->
    <img
        src="../../assets/imgs/集成服务点击.png"
        v-show="lang"
        class="integrate_dialog btn"
      @click="$router.push({ path:'parkpro', query: $route.query})"
    />
    <!-- 集成服务遮罩 -->
    <img
        src="../../assets/imgs/集成服务英文点击.png"
        v-show="!lang"
        class="integrate_dialog btn"
        @click="$router.push({ path:'parkpro', query: $route.query})"
    />
    <!-- 中英文切换 -->
    <div class="check_en btn rb0-fixed" :class="lang?'en':'cn'" @click="langSelect"></div>
  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
  created() {
    sessionStorage.setItem("parkpro", true);
    sessionStorage.setItem("zhandianguanli", true);
  },
};
</script>
<style lang="less" scoped>
.video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
// 站点管理遮罩
.siteadmin_dialog {
  width: 20%;
  height: 41%;
  position: absolute;
  top: 30.9%;
  left: 19.7%;
  cursor: pointer;
}
.siteadmin_dialog {
  display: none;
}
.siteadmin:hover ~ .siteadmin_dialog {
  display: block;
  cursor: pointer;
}
.siteadmin_dialog:hover {
  display: block;
}
// 集成服务遮罩
.integrate_dialog {
  width: 20%;
  height: 41%;
  position: absolute;
  top: 30.9%;
  left: 60.2%;
  cursor: pointer;
}
.integrate_dialog {
  display: none;
}
.integrate:hover ~ .integrate_dialog {
  display: block;
  cursor: pointer;
}
.integrate_dialog:hover {
  display: block;
}
.siteadmin {
  width: 20%;
  height: 39%;
  position: absolute;
  top: 31%;
  left: 20%;
  // border: 1px solid #fff;
}
.integrate {
  width: 20%;
  height: 39%;
  position: absolute;
  top: 32%;
  left: 60%;
  // border: 1px solid #fff;
}
.check_en {
  width: 48px;
  height: 48px;
  position: absolute;
  top: 93%;
  left: 96%;
  z-index: 2;
}
.en{
  background: url("../../assets/imgs/en.png") no-repeat;
  background-size: 100% 100%;
}
.cn{
  background: url("../../assets/imgs/cn.png") no-repeat;
  background-size: 100% 100%;
}
</style>

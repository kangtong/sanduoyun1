<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <video
        v-show="lang"
      class="video"
      loop
      autoplay
      muted
      src="../assets/videos/cn/建设背景和要求-循环.mp4"
    ></video>
    <video
        v-show="!lang"
        class="video"
        loop
        autoplay
        muted
        src="../assets/videos/en/建设背景和要求-循环.mp4"
    ></video>
    <!-- 绿色数据中心节能示范 -->
    <div
      class="cur" :class="lang?'lvse':'enlvse'"
      @click="$router.push({ path: '/lvse', query: $route.query })"
    ></div>
    <!-- 算力高效调度示范中心 -->
    <div
      class="cur" :class="lang?'suanli':'ensuanli'"
      @click="$router.push({ path: '/suanli', query: $route.query })"
    ></div>
    <!-- 枢纽集群基础设施 -->
    <div
        class="shuniu cur"
        @click="$router.push({ path: '/shuniu', query: $route.query })"
    ></div>
    <!-- 算力调度 -->
    <div
        class="dsxc cur"
        @click="$router.push({ path: '/dsxc', query: $route.query })"
    ></div>

    <!-- 中英文切换 -->
    <div class="check_en cur" :class="lang?'en':'cn'" @click="langSelect"></div>

  </div>
</template>

<script>
import { myMixins } from "../assets/js/mixin";
export default {
  mixins: [myMixins],
  created() {
    localStorage.setItem("dsxc", true);
    localStorage.setItem("dsxx", true);
    localStorage.setItem("shuniu", true);
  },
  methods: {
    init(){
      var flat = localStorage.getItem("guankong");
      flat == "false" ? (flat = false) : (flat = true);
      this.video1show = flat;
      this.video2show = !flat;
    }
  },
};
</script>

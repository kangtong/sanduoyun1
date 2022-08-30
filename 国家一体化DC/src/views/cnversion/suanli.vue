
<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <div class="video1container" v-if="lang && video1show">
      <video
        class="video"
        @ended="video1end"
        autoplay
        muted
        src="../../assets/videos/cn/算力高效调度-入场.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="lang && video2show">
      <video
        class="video"
        autoplay
        loop
        muted
        src="../../assets/videos/cn/算力高效调度-循环.mp4"
      ></video>
    </div>

    <div class="video1container" v-if="!lang && video1show">
      <video
          class="video"
          @ended="video1end"
          autoplay
          muted
          src="../../assets/videos/en/算力高效调度-入场.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="!lang && video2show">
      <video
          class="video"
          autoplay
          loop
          muted
          src="../../assets/videos/en/算力高效调度-循环.mp4"
      ></video>
    </div>

    <!-- 绿色数据中心节能示范 -->
    <div
        class="cur" :class="lang?'lvse':'enlvse'"
        @click="$router.push({ path: '/lvse', query: $route.query })"
    ></div>
    <!-- 算力高效调度示范中心 -->
    <div
        class="cur" :class="lang?'suanli':'ensuanli'"
        @click="$router.push({ path: '/home', query: $route.query })"
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

  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
  data() {
    return {
      video1show: true,
      video2show: false,
    };
  },
  methods: {
    video1end() {
      this.video1show = false;
      this.video2show = true;
    },
    init(){
      this.video1show = true;
      this.video2show = false;
    }
  },
  created() {
    this.init()
  },
};
</script>

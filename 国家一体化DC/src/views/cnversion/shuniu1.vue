
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
          src="../../assets/videos/cn/风液混合型-循环.mp4"
      ></video>
      <video
          v-show="!lang"
          class="video"
          autoplay
          loop
          muted
          src="../../assets/videos/en/风液混合型-循环.mp4"
      ></video>

    <div
        class="zhileng cur"
        @click="$router.push({ path: '/zhileng', query: $route.query })"
    ></div>
    <div
        class="gongdian cur"
        @click="$router.push({ path: '/gongdian', query: $route.query })"
    ></div>
    <div
        class="qita cur"
        @click="$router.push({ path: '/qita', query: $route.query })"
    ></div>


  <div
        class="zhileng2 cur"
        @click="$router.push({ path: '/zhileng', query: $route.query })"
    ></div>
    <div
        class="gongdian2 cur"
        @click="$router.push({ path: '/gongdian', query: $route.query })"
    ></div>
    <div
        class="qita2 cur"
        @click="$router.push({ path: '/qita', query: $route.query })"
    ></div>


    <!--返回-->
    <img
        src="../../assets/imgs/back.png"
        class="check_en cur"
        @click="$router.push({ path:'/home', query: $route.query})"
    />

  </div>
</template>

<script>
import { myMixins } from "../../assets/js/mixin";
export default {
  mixins: [myMixins],
  data() {
    return {
    };
  },
  methods: {
  },
  created() {
  },
};
</script>


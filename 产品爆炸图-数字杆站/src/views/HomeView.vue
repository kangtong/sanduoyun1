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
      src="../assets/videos/cn/数字杆站-首页.mp4"
    ></video>
    <video
      v-show="!lang"
      class="video"
      loop
      autoplay
      muted
      src="../assets/videos/en/数字杆站-首页.mp4"
    ></video>
    <!-- 管控杆站 -->
    <div
      class="cur" :class="lang?'guankong':'enguankong'"
      @click="$router.push({ path: '/guankong', query: $route.query })"
    ></div>
    <!-- 检测杆站 -->
    <div
        class="cur" :class="lang?'jiance':'enjiance'"
      @click="$router.push({ path: '/jiance', query: $route.query })"
    ></div>
    <!-- 智慧杆站 -->
    <div
        class="cur" :class="lang?'zhihui':'enzhihui'"
      @click="$router.push({ path: '/zhihui', query: $route.query })"
    ></div>
    <div class="check_en cur rb0-fixed" :class="lang?'en':'cn'" @click="langSelect"></div>

  </div>
</template>

<script>
import { myMixins } from "../assets/js/mixin";
export default {
  mixins: [myMixins],
  created() {
    localStorage.setItem("zhihui", true);
    localStorage.setItem("jiance", true);
    localStorage.setItem("guankong", true);
  },
  methods: {
    getUrlParamOld() {
      // this.$router.push({ path:'/enhomeview', query: this.$route.query})
      this.$router.push({ path:'/enhomeview', query: {lang:'en-US'}})
    },
  },
};
</script>
<style lang='less' scoped>
.guankong {
  width: 14%;
  height: 6%;
  position: absolute;
  top: 26%;
  left: 50.3%;
}
.jiance {
  width: 14%;
  height: 6%;
  position: absolute;
  top: 48.5%;
  left: 50.3%;
}
.zhihui {
  width: 14%;
  height: 6%;
  position: absolute;
  top: 72%;
  left: 50.3%;
}

.enguankong {
  width: 19%;
  height: 5.5%;
  position: absolute;
  top: 26%;
  left: 45%;
}
.enjiance {
  width: 19%;
  height: 5.5%;
  position: absolute;
  top: 48.5%;
  left: 45%;
}
.enzhihui {
  width: 19%;
  height: 5.5%;
  position: absolute;
  top: 72.2%;
  left: 45%;
}
</style>

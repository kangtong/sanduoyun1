
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
        src="../../assets/videos/cn/东数西存ppt.mp4"
    ></video>
    <video
        v-show="!lang"
        class="video"
        loop
        autoplay
        muted
        src="../../assets/videos/en/东数西存ppt.mp4"
    ></video>
    <!--返回-->
    <img
        src="../../assets/imgs/back.png"
        class="back_btn cur"
        @click="$router.push({ path:'/dsxc', query: $route.query})"
    />
<!--首页-->
    <img
        src="../../assets/imgs/home.png"
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
    localStorage.setItem("dsxc", false);
  },
};
</script>


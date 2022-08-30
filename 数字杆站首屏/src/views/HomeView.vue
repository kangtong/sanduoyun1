<template>
  <div
    class="home"
    :style="'width:' + winWCur + 'px;height:' + winHCur + 'px;'"
  >
    <!-- <video
      v-show="lang"
      loop
      autoplay
      muted
      class="home_img"
      src="../assets/videos/cn/1、首页循环动画30s/首页循环动画30s.mp4"
    ></video>
    <video
      v-show="!lang"
      loop
      autoplay
      muted
      class="home_img"
      src="../assets/videos/en/1、首页循环动画30s-英文/首页循环动画30s.mp4"
    ></video> -->
    <div class="video1container" v-show="video1show">
      <video
        v-show="lang"
        class="home_img"
        autoplay
        @ended="video1end"
        muted
        src="../assets/videos/cn/001_1.mp4"
      ></video>
      <video
        v-show="!lang"
        class="home_img"
        autoplay
        @ended="video1end"
        muted
        src="../assets/videos/en/001_1.mp4"
      ></video>
    </div>
    <div class="video2container" v-show="video2show">
      <video
          ref="video2cn"
          v-show="lang"
        class="home_img"
        autoplay
        loop
        muted
        src="../assets/videos/cn/002_1.mp4"
      ></video>
      <video
          ref="video2en"
          v-show="!lang"
        class="home_img"
        autoplay
        loop
        muted
        src="../assets/videos/en/002_1.mp4"
      ></video>
    </div>
    <!-- 数字杆站 -->
    <div
        v-if="video2show"
      :class="lang ? 'shuziganzhan' : 'enshuziganzhan'"
      @click="$router.push({ path: 'shuziganzhan', query: $route.query })"
    ></div>
    <!-- 数字管线 -->
    <div
        v-if="video2show"
        :class="lang ? 'shuziguanxian' : 'enshuziguanxian'"
      @click="$router.push({ path: 'shuziguanxian', query: $route.query })"
    ></div>
    <!-- 数字场站 -->
    <div
        v-if="video2show"
        :class="lang ? 'shuzichangzhan' : 'enshuzichangzhan'"
      @click="$router.push({ path: 'shuzichangzhan', query: $route.query })"
    ></div>
    <!-- 中英文切换按钮 -->
    <!-- <div @click="$router.push('/enhomeview')" class="check_en"></div> -->
    <!-- <div @click="langSelect" class="check_en"></div> -->
    <img
      v-show="lang"
      src="../assets/imgs/EN.png"
      class="check_en cur rb0-fixed"
      @click="langSelect"
    />
    <img
      v-show="!lang"
      src="../assets/imgs/CN.png"
      class="check_en cur rb0-fixed"
      @click="langSelect"
    />
    <!-- 痛点 -->
    <!-- <div class="tondian" @click="$router.push({ path:'painpoint', query: $route.query})">痛点</div> -->
    <!-- 解决方案 -->
    <!-- <div class="jiejuefangan" @click="$router.push({ path:'solution', query: $route.query})">解决方案</div> -->
    <!-- 智能开放 -->
    <!-- <div class="opening" @click="$router.push({ path:'loop', query: $route.query})">智能开放</div> -->
  </div>
</template>

<script>
import { myMixins } from "../assets/js/mixin";
export default {
  mixins: [myMixins],
  data() {
    return {
      video1show: true,
      video2show: false,
    };
  },
  computed: {
    video() {
      return this.lang ? this.$refs.video2cn : this.$refs.video2en
    }
  },
  methods: {
    video1end() {
      this.video.pause()
      this.video.currentTime = 0
      this.video.play()
      this.$nextTick(() => {
        this.video1show = false;
        this.video2show = true;
      })
      sessionStorage.setItem("saasasis", this.video1show);
    },
  },
  created() {
    var flat = sessionStorage.getItem("saasasis");
    console.log(flat);
    flat == "false" ? (flat = false) : (flat = true);
    this.video1show = flat;
    this.video2show = !flat;
  },
  mounted() {
    if (this.video2show === false) {
      this.video.pause()
      this.video.currentTime = 0
    }
  }
};
</script>
<style lang='less' scoped>
.home_img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
.shuziganzhan {
  width: 20.5%;
  height: 6%;
  position: absolute;
  top: 37%;
  left: 39.5%;
  cursor: pointer;
}
.enshuziganzhan {
  width: 24%;
  height: 7%;
  position: absolute;
  top: 37%;
  left: 38%;
  cursor: pointer;
}
.shuziguanxian {
  width: 20.5%;
  height: 7%;
  position: absolute;
  top: 46.5%;
  left: 39.5%;
  cursor: pointer;
}
.enshuziguanxian {
  width: 24%;
  height: 7%;
  position: absolute;
  top: 46.5%;
  left: 38%;
  cursor: pointer;
}
.shuzichangzhan {
  width: 20.5%;
  height: 6%;
  position: absolute;
  top: 57%;
  left: 39.5%;
  cursor: pointer;
}
.enshuzichangzhan {
  width: 24%;
  height: 7%;
  position: absolute;
  top: 57%;
  left: 38%;
  cursor: pointer;
}
.check_en {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 93%;
  left: 96%;
  cursor: pointer;
  // border: 1px solid red;
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
.opening {
  width: 3%;
  height: 6%;
  border: 1px solid red;
  position: absolute;
  top: 92%;
  left: 80%;
  background-color: green;
}
</style>

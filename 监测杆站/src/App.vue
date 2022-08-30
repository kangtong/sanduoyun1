<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view />
    </transition>
  </div>
</template>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  background-color: #000;
  overflow: hidden;
  .slide-fade-leave-to {
    left: 0;
    top: 0;
    right: 0;
    position: absolute;
    opacity: 1;
  }
  .slide-fade-enter-active {
    background-color: #000;
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s ease;
    background-color: #000;
    z-index: 100;
  }
}
</style>

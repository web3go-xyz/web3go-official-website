<template>
  <el-dialog custom-class="home-video-dialog" v-model="visible" fullscreen>
    <el-button
      @click="visible = false"
      class="close"
      type="primary"
      :icon="CloseBold"
      circle
    />
    <div v-show="!canplay" class="bg" v-loading="!canplay"></div>
    <video
      v-show="canplay"
      ref="video"
      autoplay
      class="video"
      src="@/assets/video.mp4"
      controls="controls"
    >
      your browser does not support the video tag
    </video>
  </el-dialog>
</template>

<script>
import { CloseBold } from "@element-plus/icons-vue";
export default {
  data() {
    return {
      canplay: false,
      CloseBold,
      visible: false,
    };
  },
  mounted() {},
  methods: {
    init() {
      this.visible = true;
      this.$nextTick(() => {
        this.$refs.video.oncanplay = () => {
          this.canplay = true;
        };
      });
    },
  },
};
</script>

<style lang="less">
.home-video-dialog {
  .el-dialog__header {
    display: none;
  }
  .el-dialog__headerbtn {
    display: none;
  }
  .el-dialog__body {
    height: 100%;
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    .close {
      width: 60px;
      height: 60px;
      font-size: 20px;
      box-shadow: none !important;
      position: absolute;
      z-index: 2;
      top: 50px;
      right: 50px;
    }
    .bg {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      .el-loading-mask {
        pointer-events: none;
        background: transparent;
        .circular {
          width: 80px;
          height: 80px;
        }
      }
    }
    .video {
      object-fit: fill;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      max-height: 100%;
      max-width: 100%;
      margin: auto;
    }
  }
}
</style>
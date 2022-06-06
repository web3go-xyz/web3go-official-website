

<template>
  <!-- demo use
    <hover-animate-box>
        <template #default="{ getItemStyle }">
          <div
            style="
              width: 300px;
              height: 300px;
              padding: 100px;
              background: blue;
            "
          >
            <div
              style="width: 50px; height: 50px; background: red"
              :style="getItemStyle(10)"
            ></div>
          </div>
        </template>
      </hover-animate-box> -->
  <div class="box-wrap">
    <div
      ref="box"
      class="box"
      @mousemove="handleMousemove"
      @mouseout="handleMouseout"
      :style="{
        transform:
          'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(' +
          rotateX +
          'deg) rotateY(' +
          rotateY +
          'deg) rotateZ(0deg) skew(0deg, 0deg)',
      }"
    >
      <slot :getItemStyle="getItemStyle"></slot>
    </div>
  </div>
</template>

<script>
import throttle from "lodash.throttle";
export default {
  data() {
    return {
      rotateX: 0,
      rotateY: 0,
      itemTranslateXPercent: 0,
      itemTranslateYPercent: 0,
      boxWidth: 0,
      boxHeight: 0,
    };
  },
  mounted() {
    this.boxWidth = this.boxRef.offsetWidth;
    this.boxHeight = this.boxRef.offsetHeight;
  },
  computed: {
    boxRef() {
      return this.$refs.box;
    },
  },
  methods: {
    getItemStyle(maxTranslate) {
      return (
        "transition: 350ms ease-out;will-change: transform;transform-style: preserve-3d;transform:translate3d(" +
        this.itemTranslateXPercent * maxTranslate +
        "px, " +
        this.itemTranslateYPercent * maxTranslate +
        "px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);"
      );
    },
    handleMousemove: throttle(function (e) {
      if (e.offsetX <= 0) {
        return;
      }
      if (e.offsetY <= 0) {
        return;
      }
      const halfWidth = this.boxWidth / 2;
      const halfHeight = this.boxHeight / 2;

      if (e.offsetX < halfWidth) {
        this.rotateY = (-5 * (halfWidth - e.offsetX)) / halfWidth;
        this.itemTranslateXPercent = -(halfWidth - e.offsetX) / halfWidth;
      } else if (e.offsetX > halfWidth) {
        this.rotateY = (5 * (e.offsetX - halfWidth)) / halfWidth;
        this.itemTranslateXPercent = (e.offsetX - halfWidth) / halfWidth;
      }
      if (e.offsetY < halfHeight) {
        this.rotateX = (5 * (halfHeight - e.offsetY)) / halfHeight;
        this.itemTranslateYPercent = -(halfHeight - e.offsetY) / halfHeight;
      } else if (e.offsetY > halfHeight) {
        this.rotateX = (-5 * (e.offsetY - halfHeight)) / halfHeight;
        this.itemTranslateYPercent = (e.offsetY - halfHeight) / halfHeight;
      }
    }, 100),
    handleMouseout() {
      this.rotateX = 0;
      this.rotateY = 0;
    },
  },
};
</script>

<style lang="less" scoped>
.box-wrap {
  perspective: 1000px;
  transform: perspective(1000px);
  display: inline-block;
  .box {
    transform-style: preserve-3d;
    will-change: transform;
    transition: 350ms ease-out;
  }
}
</style>
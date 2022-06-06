<template>
  <div class="page-wrap">
    <div class="page-header">
      <div class="layout">
        <img class="bg-circle" src="@/assets/images/bg-circle.png" />
        <img class="logo" src="@/assets/images/logo.png" alt="" />
        <div class="right-menu">
          <div class="menu-item" v-for="(v, i) in menus" :key="i">
            <font-flow :text="v"></font-flow>
          </div>

          <el-button class="btn" type="primary">Start Today</el-button>
        </div>
      </div>
    </div>
    <section class="video-section layout">
      <div class="section-main">
        <div class="big-text">
          <div class="line1">Everyone can</div>
          <div class="line2">play with</div>
          <div class="line3">
            <span class="blue">&lt;-</span>blockchain data<span class="blue"
              >&gt;</span
            >
          </div>
        </div>
        <div class="small-text">
          Web3Go is an open data analytics platform where everyone can grasp the
          value behind blockchain data.
        </div>
        <div class="btn-wrap">
          <img class="btn-bg" src="@/assets/images/btn-bg.png" alt="" />
          <el-button class="btn" type="primary">
            <span>Start</span>
            <img class="arrow" src="@/assets/images/arrowRight.png" alt="" />
          </el-button>
        </div>
      </div>
      <div class="img-animate">
        <hover-animate-box>
          <template #default="{ getItemStyle }">
            <img class="big-bg" src="@/assets/images/line-circle.png" alt="" />
            <img class="big-group" src="@/assets/images/big-group.png" alt="" />
            <!-- <img class="video" src="@/assets/images/Group_195.png" alt="" />
            <img class="person" src="@/assets/images/id.png" alt="" />
            <img class="direction" src="@/assets/images/Ethereum.png" alt="" /> -->
          </template>
        </hover-animate-box>
      </div>
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
      </hover-animate-box>
    </section>
  </div>
</template>

<script>
import HoverAnimateBox from "@/components/HoverAnimateBox";
import FontFlow from "@/components/FontFlow";
export default {
  components: {
    FontFlow,
    HoverAnimateBox,
  },
  data() {
    return {
      menus: ["Solutions", "News", "Docs", "Github"],
    };
  },
};
</script>

<style lang="less" scoped>
.page-wrap {
  min-height: 100vh;
  background: #f3f4f6;
  .page-header {
    padding: 28px;
    .layout {
      display: flex;
      justify-content: space-between;
      position: relative;
      .bg-circle {
        pointer-events: none;
        height: 240px;
        width: auto;
        position: absolute;
        top: -28px;
        left: -100px;
      }
      .logo {
        z-index: 1;
        height: 40px;
        width: auto;
      }
      .right-menu {
        display: flex;
        align-items: center;
        .menu-item {
          margin: 0 12px;
          font-size: 20px;
          font-weight: 400;
          color: #121619;
          /deep/ .box {
            padding: 11px 36px;
          }
        }
        .btn {
          height: 44px;
          padding: 0 36px;
          margin-left: 20px;
          box-shadow: 0px 15px 21px -2px rgb(202 198 248);
        }
      }
    }
  }
  .video-section {
    position: relative;
    .section-main {
      .big-text {
        font-weight: 600;
        font-size: 68px;
        color: #121619;
        padding-top: 160px;
        .blue {
          color: #4318ff;
        }
        .line2 {
          margin-left: 142px;
        }
      }
      .small-text {
        margin-top: 30px;
        font-weight: 400;
        font-size: 24px;
        color: #343a3f;
        width: 475px;
      }
      .btn-wrap {
        margin-top: 40px;
        position: relative;
        .btn-bg {
          position: absolute;
          pointer-events: none;
          width: 545px;
          top: -266px;
          left: -220px;
        }
        .btn {
          box-shadow: 0px 15px 21px -2px rgb(202 198 248);
          height: 44px;
          width: 141px;
          .arrow {
            width: 6px;
            margin-left: 10px;
          }
        }
      }
    }
    .img-animate {
      top: 65px;
      right: -10px;
      position: absolute;
      .big-bg {
        width: 668px;
      }
      .big-group {
        right: 0;
        top: 0;
        position: absolute;
        width: 826px;
      }
      .video {
        position: absolute;
        width: 376px;
      }
      .person {
        position: absolute;
        width: 85px;
      }
      .direction {
        position: absolute;
        width: 156px;
      }
    }
  }
}
</style>
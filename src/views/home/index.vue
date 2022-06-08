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
        <!-- video图片元素点击域 -->
        <hover-animate-box>
          <template #default="{ getItemStyle }">
            <div class="img-wrap">
              <img
                class="big-bg"
                src="@/assets/images/line-circle.png"
                alt=""
              />
              <img
                :style="getItemStyle(15)"
                class="big-group"
                src="@/assets/images/big-group.png"
                alt=""
              />
              <div
                :style="getItemStyle(30)"
                id="code-animate"
                class="img-item"
              ></div>
              <img
                :style="getItemStyle(50)"
                class="video"
                src="@/assets/images/Group_195.png"
                alt=""
              />
              <img
                :style="getItemStyle(40)"
                class="person"
                src="@/assets/images/id.png"
                alt=""
              />
              <img
                :style="getItemStyle(50)"
                class="direction"
                src="@/assets/images/Ethereum.png"
                alt=""
              />
            </div>
          </template>
        </hover-animate-box>
      </div>
      <div class="mouse-wrap">
        <div id="mouse-animate"></div>
      </div>
    </section>
    <section class="card-section layout">
      <div class="section-title">
        <div class="circle"></div>
        <span> Web3Go Data Solutions </span>
      </div>
      <img class="circle-bg" src="@/assets/images/line-circle.png" alt="" />
      <div class="card-list">
        <div class="card card1">
          <hover-animate-box
            :rotate="15"
            @mouseenter="animateStart('dashboardAnimateInstance')"
            @mouseleave="animateStop('dashboardAnimateInstance')"
          >
            <div class="card-inner">
              <div class="card-title">Analytical Tool</div>
              <div class="split"></div>
              <div class="text">
                Formatting, visualization and analysis of multichain on-chain
                data.
              </div>
              <div class="btn">
                <span> Explore </span>
                <img
                  class="arrow"
                  src="@/assets/images/bule-arrow.png"
                  alt=""
                />
              </div>
              <div class="animate" id="dashboard-animate"></div>
            </div>
          </hover-animate-box>
        </div>
        <div class="card card2">
          <hover-animate-box :rotate="15">
            <div class="card-inner">
              <div class="card-title">Web3Go ID</div>
              <div class="split"></div>
              <div class="text">Create, show and share your web3 profile.</div>
              <div class="btn">
                <span> Explore </span>
                <img
                  class="arrow"
                  src="@/assets/images/bule-arrow.png"
                  alt=""
                />
              </div>
              <!-- <div class="animate" id="alert-animate"></div> -->
            </div>
          </hover-animate-box>
        </div>
        <div class="card card3">
          <hover-animate-box
            @mouseenter="animateStart('alertAnimateInstance')"
            @mouseleave="animateStop('alertAnimateInstance')"
            :rotate="15"
          >
            <div class="card-inner">
              <div class="card-title">Push</div>
              <div class="split"></div>
              <div class="text">
                Get immediately notified with real-time on-chain acticities.
              </div>
              <div class="btn">
                <span> Explore </span>
                <img
                  class="arrow"
                  src="@/assets/images/bule-arrow.png"
                  alt=""
                />
              </div>
              <div class="animate" id="alert-animate"></div>
            </div>
          </hover-animate-box>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HoverAnimateBox from "@/components/HoverAnimateBox";
import FontFlow from "@/components/FontFlow";
import lottie from "lottie-web";
import codeAnimate from "@/assets/animateJson/code/code.json";
import dashboardAnimate from "@/assets/animateJson/dashboard/dashboard.json";
import alertAnimate from "@/assets/animateJson/alert/alert.json";
import mouseAnimate from "@/assets/animateJson/mouse/mouse.json";
codeAnimate.assets.forEach((item) => {
  item.u = "";
  if (item.w && item.h) {
    item.p = require(`@/assets/animateJson/code/images/${item.p}`);
  }
});
dashboardAnimate.assets.forEach((item) => {
  item.u = "";
  if (item.w && item.h) {
    item.p = require(`@/assets/animateJson/dashboard/images/${item.p}`);
  }
});
alertAnimate.assets.forEach((item) => {
  item.u = "";
  if (item.w && item.h) {
    item.p = require(`@/assets/animateJson/alert/images/${item.p}`);
  }
});
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
  mounted() {
    this.initAnimate();
  },
  methods: {
    animateStart(instance) {
      this[instance].goToAndPlay(0);
    },
    animateStop(instance) {
      this[instance].goToAndStop(4000);
    },
    initAnimate() {
      this.codeAnimateInstance = lottie.loadAnimation({
        container: document.getElementById("code-animate"), // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: codeAnimate, // the path to the animation json
      });
      // 降低动画帧率，不然会卡顿
      this.codeAnimateInstance.setSubframe(false);
      this.mouseAnimateInstance = lottie.loadAnimation({
        container: document.getElementById("mouse-animate"), // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: mouseAnimate, // the path to the animation json
      });
      this.mouseAnimateInstance.setSubframe(false);
      this.dashboardAnimateInstance = lottie.loadAnimation({
        container: document.getElementById("dashboard-animate"), // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        autoplay: false,
        animationData: dashboardAnimate, // the path to the animation json
      });
      this.dashboardAnimateInstance.setSubframe(false);
      this.dashboardAnimateInstance.goToAndStop(4000);
      this.alertAnimateInstance = lottie.loadAnimation({
        container: document.getElementById("alert-animate"), // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        autoplay: false,
        animationData: alertAnimate, // the path to the animation json
      });
      this.alertAnimateInstance.setSubframe(false);
      this.alertAnimateInstance.goToAndStop(4000);
    },
  },
};
</script>

<style lang="less" scoped>
.page-wrap {
  max-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
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
      width: 750px;
      height: 659px;
      position: absolute;

      .img-wrap {
        text-align: right;
      }
      .big-bg {
        width: 668px;
      }
      .big-group {
        right: -126px;
        top: -57px;
        position: absolute;
        width: 826px;
      }
      #code-animate {
        right: 82px;
        top: 333px;
        position: absolute;
        width: 307px;
        height: 187px;
      }
      .video {
        cursor: pointer;
        pointer-events: auto;
        right: 359px;
        top: 389px;
        position: absolute;
        width: 376px;
      }
      .person {
        right: 41px;
        top: 309px;
        position: absolute;
        width: 85px;
      }
      .direction {
        right: 16px;
        top: 459px;
        position: absolute;
        width: 156px;
      }
    }
    .mouse-wrap {
      margin: 130px 0;
      text-align: center;
      #mouse-animate {
        display: inline-block;
        width: 24px;
        height: auto;
      }
    }
  }
  .section-title {
    position: absolute;
    .circle {
      z-index: 1;
      position: absolute;
      display: inline-block;
      width: 89.9px;
      height: 89.9px;
      border-radius: 50%;
      background: linear-gradient(
        171.96deg,
        #ccc9ed 5.35%,
        rgba(238, 240, 254, 0) 91.1%
      );
      transform: rotate(-15deg);
    }
    span {
      letter-spacing: -0.02em;
      position: absolute;
      z-index: 2;
      font-weight: 500;
      font-size: 42px;
      color: #121619;
      width: 470px;
      top: 26px;
      left: 29px;
    }
  }
  .card-section {
    margin-bottom: 161px;
    position: relative;
    .circle-bg {
      position: absolute;
      left: 436px;
      width: 495px;
    }
    .card-list {
      padding-top: 150px;
      padding-left: 30px;
      padding-right: 30px;
      display: flex;
      justify-content: space-between;

      .card {
        width: 377px;
        height: 322px;

        box-sizing: border-box;
        .card-title {
          font-weight: 500;
          font-size: 20px;
          color: #000000;
        }
        .split {
          margin-top: 32px;
          width: 16px;
          height: 3px;
          background: #4318ff;
        }
        .text {
          margin-top: 16px;
          width: 200px;
          height: 60px;
          font-weight: 400;
          font-size: 16px;
          color: #4d5358;
        }
        .btn {
          cursor: pointer;
          margin-top: 53px;
          display: flex;
          align-items: center;
          &:hover {
            opacity: 0.8;
          }
          span {
            font-weight: 700;
            font-size: 14px;
            color: #4318ff;
          }
          .arrow {
            margin-left: 10px;
            width: 6px;
          }
        }
        .animate {
          width: 255px;
          position: absolute;
          bottom: -20px;
          right: -36px;
        }
      }
      .card-inner {
        box-sizing: border-box;
        padding: 32px;
        width: 100%;
        height: 100%;
      }
      .card1 .card-inner {
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 40px 50px -20px rgba(112, 144, 176, 0.19);
        backdrop-filter: blur(10px);
        border-radius: 20px;
      }
      .card2 .card-inner {
        background: rgba(195, 207, 243, 0.2);
        backdrop-filter: blur(10px);
        border-radius: 20px;
      }
      .card3 .card-inner {
        background: rgba(195, 207, 243, 0.2);
        backdrop-filter: blur(10px);
        border-radius: 20px;
      }
    }
  }
}
</style>
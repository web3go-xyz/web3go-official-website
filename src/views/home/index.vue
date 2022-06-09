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
            :rotate="20"
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
          <hover-animate-box :rotate="20">
            <template #default="{ isInBox }">
              <div class="card-inner">
                <div class="card-title">Web3Go ID</div>
                <div class="split"></div>
                <div class="text">
                  Create, show and share your web3 profile.
                </div>
                <div class="btn">
                  <span> Explore </span>
                  <img
                    class="arrow"
                    src="@/assets/images/bule-arrow.png"
                    alt=""
                  />
                </div>
                <div class="animate">
                  <img
                    :src="
                      isInBox
                        ? require('@/assets/images/id.webp')
                        : require('@/assets/images/idStatic.png')
                    "
                    alt=""
                  />
                </div>
              </div>
            </template>
          </hover-animate-box>
        </div>
        <div class="card card3">
          <hover-animate-box
            @mouseenter="animateStart('alertAnimateInstance')"
            @mouseleave="animateStop('alertAnimateInstance')"
            :rotate="20"
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
    <section class="number-section layout">
      <div class="section-title">
        <div class="circle"></div>
        <span> 1000+ Users' intelligent data assistant </span>
      </div>
      <img class="bg" src="@/assets/images/number-section.png" alt="" />
      <div class="item item1">
        <div class="num">68</div>
        <div class="label">Predictions</div>
      </div>
      <div class="item item2">
        <div class="num">100,127</div>
        <div class="label">Alerts</div>
      </div>
      <div class="item item3">
        <div class="num">235</div>
        <div class="label">Dashboards</div>
      </div>
    </section>
    <section class="network-section">
      <img class="bg" src="@/assets/images/Group_190.png" alt="" />
      <span
        >We supported various networks and powered leading Web3 projects
      </span>
    </section>
    <section class="investor-section layout">
      <div class="section-title">
        <div class="circle"></div>
        <span> Investors </span>
      </div>
      <img src="@/assets/images/investor.png" alt="" />
    </section>
    <section class="users-section layout">
      <div class="section-title">
        <div class="circle"></div>
        <span> See who's using Web3Go </span>
      </div>
      <div class="subtitle">
        Prediticive modeling with one click to simulate your rewards and support
        your investing strategy
      </div>
      <div class="section-main">
        <div class="img-wrap">
          <img class="dot" src="@/assets/images/bluedot.png" alt="" />
          <el-carousel
            @change="changeSlider"
            arrow="never"
            :interval="7000"
            trigger="click"
            height="546px"
            class="carousel"
            ref="carousel"
          >
            <el-carousel-item v-for="(item, i) in slideList" :key="i">
              <div class="item">
                <img class="img" :src="item.image" />
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="m-right">
          <div class="icon-wrap">
            <img src="@/assets/images/doticon.png" alt="" />
          </div>
          <div class="words">
            {{ currentSlider.text }}
          </div>
          <div class="m-bottom">
            <div class="mb-left">
              <div class="bold">{{ currentSlider.name }}</div>
              <div class="text">{{ currentSlider.info }}</div>
            </div>
            <div class="btn-wrap">
              <el-button
                :disabled="sliderIndex == 0"
                @click="pre"
                class="btn-left"
                type="primary"
              >
                <img src="@/assets/images/arrowRight.png" alt="" />
              </el-button>
              <el-button
                :disabled="sliderIndex == slideList.length - 1"
                @click="next"
                class="btn-right"
                type="primary"
              >
                <img src="@/assets/images/arrowRight.png" alt="" />
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="news-section layout">
      <div class="section-title">
        <div class="circle"></div>
        <span> Trending News </span>
      </div>
      <div class="more-wrap">
        <div class="more">
          <span>More</span>
          <img src="@/assets/images/right-arrow2.png" alt="" />
        </div>
      </div>
      <div class="news-list">
        <div class="item" v-for="(v, i) in newsList" :key="i">
          <hover-animate-box :rotate="20">
            <div class="item-inner">
              <div class="img-wrap">
                <img :src="v.image" alt="" />
              </div>
              <div class="text">{{ v.text }}</div>
              <div class="btn-wrap">
                <div class="btn">Read article</div>
              </div>
            </div>
          </hover-animate-box>
        </div>
      </div>
    </section>
    <div class="page-footer">
      <div class="layout">
        <div class="search-wrap">
          <div class="search">
            <el-input
              v-model="searchValue"
              placeholder="Enter your email to get latest Web3go News!"
            />
          </div>
          <div class="btn">
            <el-button type="primary">
              <span>Subscribe</span>
              <img src="@/assets/images/arrow3.png" alt="" />
            </el-button>
          </div>
        </div>
      </div>
    </div>
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
      searchValue: "",
      newsList: [
        {
          image: require("@/assets/images/image_30.png"),
          text: "Track and simulate staking schema in Bifost’s Collator Mechanism",
        },
        {
          image: require("@/assets/images/image_30.png"),
          text: "Track and simulate staking schema in Bifost’s Collator Mechanism",
        },
        {
          image: require("@/assets/images/image_30.png"),
          text: "Track and simulate staking schema in Bifost’s Collator Mechanism",
        },
        {
          image: require("@/assets/images/image_30.png"),
          text: "Track and simulate staking schema in Bifost’s Collator Mechanism",
        },
      ],
      sliderIndex: 0,
      menus: ["Solutions", "News", "Docs", "Github"],
      slideList: [
        {
          image: require("@/assets/images/demoPerson.png"),
          text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          name: "Flores, Juanita",
          info: "Manager, Smart Spaces at Telus",
        },
        {
          image: require("@/assets/images/idStatic.png"),
          text: "22Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          name: "Flores, Juanita2",
          info: "Manager, Smart Spaces at Telus2",
        },
        {
          image: require("@/assets/images/line-circle.png"),
          text: "33Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          name: "Flores, Juanita3",
          info: "Manager, Smart Spaces at Telus3",
        },
      ],
    };
  },
  mounted() {
    this.initAnimate();
  },
  computed: {
    currentSlider() {
      return this.slideList[this.sliderIndex];
    },
  },
  methods: {
    pre() {
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    },
    changeSlider(index) {
      this.sliderIndex = index;
    },
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
    left: 0;
    top: 0;
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
          margin-top: 53px;
          display: flex;
          align-items: center;

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
          img {
            width: 100%;
          }
        }
      }
      .card-inner {
        cursor: pointer;
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
  .number-section {
    position: relative;
    padding-left: 87px;
    padding-top: 40px;
    padding-bottom: 150px;
    .bg {
      width: 950px;
    }
    .item {
      position: absolute;
      .num {
        font-weight: 500;
        font-size: 64px;
        color: #343a3f;
      }
      .label {
        margin-top: 4px;
        font-weight: 400;
        font-size: 16px;
        color: #4d5358;
      }
    }
    .item1 {
      left: 260px;
      top: 374px;
    }
    .item2 {
      left: 718px;
      top: 281px;
    }
    .item3 {
      left: 1046px;
      top: 26px;
    }
  }
  .network-section {
    position: relative;
    .bg {
      width: 100%;
    }
    span {
      display: block;
      width: 700px;
      font-weight: 500;
      font-size: 42px;
      color: #121619;
      position: absolute;
      left: 50%;
      top: 10%;
      transform: translateX(-50%);
    }
  }
  .investor-section {
    padding-left: 280px;
    padding-top: 20px;
    margin-top: 200px;
    position: relative;
    img {
      width: 950px;
    }
  }
  .users-section {
    margin-top: 190px;
    padding-top: 92px;
    padding-left: 30px;
    position: relative;
    .subtitle {
      font-weight: 400;
      font-size: 16px;
      color: #4d5358;
      width: 475px;
    }
    .section-main {
      margin-top: 72px;
      display: flex;
      .img-wrap {
        width: 424px;
        padding-top: 10px;
        border-radius: 20px;
        position: relative;
        .dot {
          position: absolute;
          z-index: 1;
          top: 50%;
          transform: translateY(-50%);
          right: -40px;
          width: 70px;
        }
        .carousel {
          .item {
            img {
              width: 100%;
              height: auto;
            }
          }
          ::v-deep(.el-carousel__indicators) {
            bottom: 10px;
            .el-carousel__button {
              border-radius: 24px;
              width: 24px;
              height: 4px;
            }
          }
        }
      }
      .m-right {
        margin-left: 150px;
        .icon-wrap {
          padding-left: 10px;
          img {
            width: 42px;
          }
        }
        .words {
          margin-top: 20px;
          width: 650px;
          font-weight: 400;
          font-size: 34px;
          color: #21272a;
          line-height: 56px;
        }
        .m-bottom {
          margin-top: 150px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          .mb-left {
            .bold {
              font-weight: 500;
              font-size: 34px;
              color: #121619;
            }
            .text {
              margin-top: 4px;
              font-weight: 400;
              font-size: 16px;
              color: #878d96;
            }
          }
          .btn-wrap {
            .btn-left {
              transform: rotateY(180deg);
              width: 56px;
              height: 56px;
              box-sizing: border-box;
              border-radius: 0 30px 30px 0 !important;
              img {
                width: 10px;
              }
            }
            .btn-right {
              margin-left: 0;
              width: 56px;
              height: 56px;
              box-sizing: border-box;
              border-radius: 0 30px 30px 0 !important;
              img {
                width: 10px;
              }
            }
          }
        }
      }
    }
  }
  .news-section {
    position: relative;
    margin-top: 140px;
    .more-wrap {
      padding-top: 40px;
      padding-bottom: 70px;
      text-align: right;
      .more {
        display: inline-block;
        padding: 5px;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
        span {
          font-weight: 400;
          font-size: 16px;
          color: #4318ff;
          vertical-align: middle;
        }
        img {
          margin-left: 18px;
          width: 7px;
          vertical-align: middle;
        }
      }
    }
    .news-list {
      display: flex;
      justify-content: space-between;
      .item {
        width: 303px;
        height: 297px;
        box-sizing: border-box;
        .item-inner {
          cursor: pointer;
          height: 100%;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0px 40px 58px -20px rgba(112, 144, 176, 0.2);
        }
        .img-wrap {
          img {
            width: 303px;
            height: 171px;
          }
        }
        .text {
          padding: 12px 24px;
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;
          color: #000000;
        }
        .btn-wrap {
          padding: 0 24px;
          .btn {
            display: inline-block;
            font-weight: 700;
            font-size: 14px;
            color: #4318ff;
          }
        }
      }
    }
  }
  .page-footer {
    margin-top: 148px;
    height: 425px;
    box-sizing: border-box;
    position: relative;
    background: #e0e5f2;
    .search-wrap {
      position: absolute;
      top: -40px;
      .search {
        ::v-deep(.el-input) {
          .el-input__inner {
            border-radius: 20px;
            padding: 0 35px;
            height: 80px;
            width: 950px;
            font-weight: 500;
            font-size: 24px;
            box-sizing: border-box;
            border: 0;
            box-shadow: none;
            outline: 0;
          }
        }
      }
      .btn {
      }
    }
  }
}
</style>
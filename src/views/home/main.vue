<template>
  <div>
    <section class="video-section layout">
      <div class="section-main">
        <div class="big-text">
          <slide-up class="line1">Everyone can</slide-up>
          <slide-up class="line2" :delay="0.1">play with</slide-up>
          <slide-up class="line3" :delay="0.2">
            <span class="blue">&lt;-</span>blockchain data<span class="blue"
              >&gt;</span
            >
          </slide-up>
        </div>
        <div class="small-text" v-moveUp="0.5">
          Web3Go is an all-in-one open data analytics and service platform where
          everyone can grasp the value behind blockchain data.
        </div>
        <div class="btn-wrap" v-moveUp="0.8">
          <img class="btn-bg" src="@/assets/images/btn-bg.png" alt="" />
          <el-button
            @click="jumpUrl('https://app.web3go.xyz/')"
            class="btn"
            type="primary"
          >
            <span>Start</span>
            <img class="arrow" src="@/assets/images/arrowRight.png" alt="" />
          </el-button>
        </div>
      </div>
      <div v-moveUp="0.5" class="img-animate">
        <!-- video图片元素点击域 -->
        <hover-animate-box :rotate="0">
          <template #default="{ getItemStyle }">
            <div class="img-wrap">
              <img
                ref="bigBg"
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
              <div class="video" @click="openVideo" :style="getItemStyle(50)">
                <img class="circle" src="@/assets/images/Frame_12.png" alt="" />
                <img class="rect" src="@/assets/images/image_26.png" alt="" />
                <img class="rect2" src="@/assets/images/rect2.png" alt="" />
              </div>
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
        <div
          id="mouse-animate"
          :style="{ opacity: showScrollTip ? 1 : 0 }"
        ></div>
      </div>
    </section>
    <section class="card-section layout">
      <div class="section-title">
        <span v-moveBig> Web3Go Data Solutions </span>
      </div>
      <!-- <img class="circle-bg" src="@/assets/images/line-circle.png" alt="" /> -->
      <div class="card-list">
        <div
          class="card card1"
          @click="jumpUrl('https://app.web3go.xyz/')"
          v-moveUp="0.2"
        >
          <hover-animate-box
            :rotate="0"
            @mouseenter="animateStart('dashboardAnimateInstance')"
            @mouseleave="animateStop('dashboardAnimateInstance')"
          >
            <div class="card-inner">
              <div class="card-title">Go Analytics</div>
              <div class="split"></div>
              <div class="text">
                Formatting, visualization, sharing, and analysis of multichain
                on-chain data
              </div>
              <div class="btn">
                <span> View the solution </span>
                <img class="arrow" src="@/assets/images/arrow4.png" alt="" />
              </div>
              <div class="animate" id="dashboard-animate"></div>
              <img
                class="big-bg"
                src="@/assets/images/line-circle.png"
                alt=""
              />
            </div>
          </hover-animate-box>
        </div>
        <div
          class="card card2"
          @click="jumpUrl('https://moonid.web3go.xyz/')"
          v-moveUp="0.5"
        >
          <hover-animate-box
            @mouseenter="animateStart('idAnimateInstance')"
            @mouseleave="animateStop('idAnimateInstance', 0)"
            :rotate="0"
          >
            <template #default="{ isInBox }">
              <div class="card-inner">
                <div class="card-title">Go ID</div>
                <div class="split"></div>
                <div class="text">
                  Identity management and Social-Fi dApp: create, show and share
                  your Web3 profile
                </div>
                <div class="btn">
                  <span> View the solution </span>
                  <img class="arrow" src="@/assets/images/arrow4.png" alt="" />
                </div>
                <img
                  class="big-bg"
                  src="@/assets/images/line-circle.png"
                  alt=""
                />
                <div class="animate">
                  <img
                    class="img"
                    v-show="isInBox"
                    src="@/assets/images/id.webp"
                    alt=""
                  />
                  <img
                    class="img"
                    v-show="!isInBox"
                    src="@/assets/images/first.png"
                    alt=""
                  />
                  <img class="btrect" src="@/assets/images/btrect.png" alt="" />
                </div>
                <!-- <div class="animate" id="id-animate"></div> -->
              </div>
            </template>
          </hover-animate-box>
        </div>
        <div
          class="card card3"
          @click="jumpUrl('https://moonpush.web3go.xyz/')"
          v-moveUp="0.8"
        >
          <hover-animate-box
            @mouseenter="animateStart('alertAnimateInstance')"
            @mouseleave="animateStop('alertAnimateInstance')"
            :rotate="0"
          >
            <div class="card-inner">
              <div class="card-title">Go Push</div>
              <div class="split"></div>
              <div class="text">
                Automatic and immediate notification of real-time on-chain
                activities
              </div>
              <div class="btn">
                <span> View the solution </span>
                <img class="arrow" src="@/assets/images/arrow4.png" alt="" />
              </div>
              <img
                class="big-bg"
                src="@/assets/images/line-circle.png"
                alt=""
              />
              <div class="animate" id="alert-animate"></div>
            </div>
          </hover-animate-box>
        </div>
      </div>
    </section>
    <section class="number-section layout">
      <div class="section-title">
        <div class="circle"></div>
        <span v-moveBig>
          {{ numberConfig.userCount }}+ Users' intelligent data assistant
        </span>
      </div>
      <img class="bg" src="@/assets/images/number-section.png" alt="" />
      <div class="item item1" :key="1">
        <div class="num">
          <number-grow
            ref="numberGrow1"
            :value="numberConfig.PredictionCount"
          />
        </div>
        <div class="label">Predictions</div>
      </div>
      <div class="item item2" :key="2">
        <div class="num">
          <number-grow ref="numberGrow2" :value="numberConfig.AlertCount" />
        </div>
        <div class="label">Alerts</div>
      </div>
      <div class="item item3" :key="3">
        <div class="num">
          <number-grow ref="numberGrow3" :value="numberConfig.DashboardCount" />
        </div>
        <div class="label">Dashboards</div>
      </div>
    </section>
    <section class="network-section">
      <img class="bg" src="@/assets/images/gray-bg.png" alt="" />
      <img class="logo" src="@/assets/images/Group_88.png" alt="" />
      <img class="icon icon1" src="@/assets/images/litmuts.png" alt="" />
      <img class="icon icon2" src="@/assets/images/Acala.png" alt="" />
      <img class="icon icon3" src="@/assets/images/Frame_16.png" alt="" />
      <img class="icon icon4" src="@/assets/images/Mask__group.png" alt="" />
      <img class="icon icon5" src="@/assets/images/Subquery.png" alt="" />
      <img class="icon icon6" src="@/assets/images/kusama.png" alt="" />
      <img class="icon icon7" src="@/assets/images/Mask_group-1.png" alt="" />
      <img class="icon icon8" src="@/assets/images/polkadot.png" alt="" />
      <img class="icon icon9" src="@/assets/images/litentry-icon.png" alt="" />
      <img class="icon icon10" src="@/assets/images/litentry-1.png" alt="" />
      <img class="icon icon11" src="@/assets/images/RMRK.png" alt="" />
      <img class="icon icon12" src="@/assets/images/biforst.png" alt="" />

      <div class="text">
        <slide-up class="inner-text">We support various networks and</slide-up>
        <slide-up :delay="0.2" class="inner-text">
          power leading Web3 projects
        </slide-up>
      </div>
    </section>
    <section class="investor-section layout">
      <div class="section-title">
        <span v-moveBig> Investors </span>
      </div>
      <div v-moveUp="0.4" class="logo-list">
        <div v-for="v in 5" :key="v" class="img-wrap">
          <img :src="require('@/assets/images/iv' + v + '.png')" alt="" />
        </div>
      </div>
    </section>
    <section class="users-section layout">
      <div class="section-title">
        <span v-moveBig> Who's using Web3Go </span>
      </div>
      <div class="subtitle">
        Prediticive modeling with one click to simulate your rewards and support
        your investing strategy
      </div>
      <div class="section-main">
        <hover-animate-box :rotate="5">
          <div class="img-wrap" v-moveUp="0.2">
            <img class="dot" src="@/assets/images/bluedot.png" alt="" />
            <el-carousel
              :autoplay="autoplay"
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
        </hover-animate-box>
        <div class="m-right">
          <div class="icon-wrap">
            <img src="@/assets/images/doticon.png" alt="" />
          </div>
          <slide-up
            ref="slideTextRef1"
            class="words"
            :class="{ small: currentSlider.smallText }"
          >
            {{ currentSlider.text }}
          </slide-up>
          <div class="m-bottom">
            <div class="mb-left">
              <slide-up ref="slideTextRef2" class="bold" :delay="0.2">{{
                currentSlider.name
              }}</slide-up>
              <slide-up ref="slideTextRef3" class="text" :delay="0.4">{{
                currentSlider.info
              }}</slide-up>
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
        <span v-moveBig> Trending News </span>
      </div>
      <div class="more-wrap">
        <div class="more" @click="jumpUrl('https://web3go.medium.com/')">
          <span>More</span>
          <img src="@/assets/images/right-arrow2.png" alt="" />
        </div>
      </div>
      <div class="news-list">
        <div
          class="item"
          v-for="(v, i) in newsList"
          :key="i"
          v-moveUp="0.2 * i"
          @click="jumpUrl(v.link)"
        >
          <hover-animate-box :rotate="0">
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
    <video-modal ref="videoModal"></video-modal>
  </div>
</template>

<script>
import HoverAnimateBox from "@/components/HoverAnimateBox";
import FontFlow from "@/components/FontFlow";
import NumberGrow from "@/components/NumberGrow";
import lottie from "lottie-web";
import codeAnimate from "@/assets/animateJson/code/code.json";
import dashboardAnimate from "@/assets/animateJson/dashboard/dashboard.json";
import idAnimate from "@/assets/animateJson/id/id.json";
import alertAnimate from "@/assets/animateJson/alert/alert.json";
import mouseAnimate from "@/assets/animateJson/mouse/mouse.json";
import SlideUp from "@/components/SlideUp";
import throttle from "lodash.throttle";
import VideoModal from "./VideoModal";
import { webUserList, webNewsList, numberConfig } from "@/api/website";
import { getImgPath } from "@/utils";
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
idAnimate.assets.forEach((item) => {
  item.u = "";
  if (item.w && item.h) {
    item.p = require(`@/assets/animateJson/id/images/${item.p}`);
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
    NumberGrow,
    VideoModal,
    SlideUp,
  },
  data() {
    return {
      numberConfig: {},
      autoplay: true,
      codeAnimateInstance: null,
      mouseAnimateInstance: null,
      dashboardAnimateInstance: null,
      idAnimateInstance: null,
      alertAnimateInstance: null,
      showScrollTip: true,
      searchValue: "",
      newsList: [],
      sliderIndex: 0,
      // @click="jumpUrl('https://doc.web3go.xyz/')
      menus: [
        {
          name: "Solutions",
          link: "",
        },
        {
          name: "News",
          link: "",
        },
        {
          name: "Docs",
          link: "https://doc.web3go.xyz/",
        },
        {
          name: "Github",
          link: "https://github.com/web3go-xyz",
        },
        {
          name: "Media Kit",
          link: "https://drive.google.com/drive/u/2/folders/1lY-d2xA0HMoJXw87Gf5cgjH4S7TSwHpY",
        },
      ],
      slideList: [{}],
    };
  },
  created() {
    this.createKeyFrame();
    this.getData();
  },
  mounted() {
    this.initAnimate();
    this.bindEvent();
  },
  unmounted() {
    window.removeEventListener("scroll", this.windowScrollFunction);
  },
  computed: {
    currentSlider() {
      return this.slideList[this.sliderIndex];
    },
  },
  methods: {
    async getData() {
      const userListRes = await webUserList();
      this.slideList = userListRes.rows.map((v, i) => ({
        image: getImgPath(v.image),
        smallText: v.article.length > 450,
        text: v.article,
        name: v.name,
        info: v.introduction,
      }));
      const newsListRes = await webNewsList();
      this.newsList = newsListRes.rows.map((v) => ({
        image: getImgPath(v.image),
        text: v.name,
        link: v.link,
      }));
      const numberConfigRes = await numberConfig();
      this.numberConfig = numberConfigRes.rows[0];
    },
    createKeyFrame() {
      for (let i = 0; i < 12; i++) {
        const a = Math.random() * (Math.random > 0.5 ? 1 : -1) * 20;
        const b = Math.random() * (Math.random > 0.5 ? 1 : -1) * 20;
        document.styleSheets[0].insertRule(
          "@keyframes homeBreath" +
            (i + 1) +
            "" +
            "{" +
            "0%{transform: translate(" +
            0 +
            "px, " +
            0 +
            "px)}" +
            "100%{transform: translate(" +
            a +
            "px, " +
            b +
            "px)}"
        );
      }
    },
    openVideo() {
      this.$refs.videoModal.init();
    },

    bindEvent() {
      window.addEventListener("scroll", this.windowScrollFunction);
    },
    windowScrollFunction: throttle(function () {
      // 鼠标滑动提示
      if (document.documentElement.scrollTop > 200) {
        this.showScrollTip = false;
      } else {
        this.showScrollTip = true;
      }
      // 数字滚动
      this.$refs.numberGrow1.handleWindowScroll();
      this.$refs.numberGrow2.handleWindowScroll();
      this.$refs.numberGrow3.handleWindowScroll();
      // 毛球背景掉落效果
      const bgEl = this.$refs.bigBg;
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop < 1107) {
        bgEl.style.transform = `translateY(${scrollTop}px) translateX(${
          -scrollTop * 0.6214995483288166
        }px) scale(${1 - 0.00022583559168925022 * scrollTop})`;
        bgEl.style.opacity = 1 - 0.0009033423667570009 * scrollTop;
      } else {
        bgEl.style.opacity = 0;
        bgEl.style.transform = `translateY(${1107}px) translateX(${-688}px) scale(${0.75})`;
      }
    }, 50),
    jumpUrl(url) {
      if (!url) {
        return;
      }
      window.open(url);
    },
    pre() {
      this.$refs.carousel.prev();
      this.autoplay = false;
    },
    next() {
      this.$refs.carousel.next();
      this.autoplay = false;
    },
    changeSlider(index) {
      this.sliderIndex = index;
      this.$refs.slideTextRef1.reMove();
      this.$refs.slideTextRef2.reMove();
      this.$refs.slideTextRef3.reMove();
    },
    animateStart(instance) {
      this[instance].goToAndPlay(0);
    },
    animateStop(instance, time) {
      this[instance].goToAndStop(time !== undefined ? time : 4000);
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
      this.idAnimateInstance = lottie.loadAnimation({
        container: document.getElementById("id-animate"), // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        autoplay: false,
        animationData: idAnimate, // the path to the animation json
      });
      this.idAnimateInstance.setSubframe(false);
      this.idAnimateInstance.goToAndStop(0);
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
      transition: transform 0.2s;
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
      &:hover {
        .circle {
          transform: translate(-50%, -50%) scale(1.2);
        }
        .rect {
          display: none;
        }
        .rect2 {
          display: block;
        }
      }
      .circle {
        z-index: 2;
        width: 83px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.3s;
      }
      .rect {
        width: 346px;
      }
      .rect2 {
        display: none;
        width: 346px;
      }
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
      transition: opacity 0.5s;
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
    width: 174.86px;
    height: 174.86px;
    border-radius: 50%;
    top: -25px;
    left: -10px;
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
      height: 553px;

      box-sizing: border-box;
      .card-title {
        font-weight: 500;
        font-size: 20px;
        color: #000000;
      }
      .split {
        margin-top: 24px;
        width: 16px;
        height: 3px;
        background: #4318ff;
      }
      .text {
        letter-spacing: -0.02em;
        margin-top: 16px;
        width: 288px;
        height: 60px;
        font-weight: 400;
        font-size: 16px;
        color: #4d5358;
      }
      .btn {
        position: absolute;
        bottom: 31px;
        left: 105px;
        width: 165px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #4318ff;
        box-shadow: 0px 40px 58px -20px rgba(112, 144, 176, 0.12);
        border-radius: 70px;
        span {
          font-weight: 400;
          font-size: 14px;
          color: #ffffff;
        }
        .arrow {
          margin-left: 9px;
          width: 16px;
        }
      }

      .animate {
        width: 255px;
        position: absolute;
        bottom: 100px;
        right: 58px;
        .img {
          position: relative;
          z-index: 2;
          width: 100%;
        }
        .btrect {
          width: 226px;
          position: absolute;
          bottom: 13px;
          left: 13px;
        }
      }
    }
    .card-inner {
      overflow: hidden;
      cursor: pointer;
      box-sizing: border-box;
      padding: 32px;
      width: 100%;
      height: 100%;
      background: rgba(195, 207, 243, 0.2);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      transition: all 0.2s;
      &:hover {
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0px 40px 50px -20px rgba(112, 144, 176, 0.19);
        backdrop-filter: blur(10px);
        .btn {
          background-color: #7551ff;
        }
      }
    }
    .card1 {
      .big-bg {
        width: 500px;
        position: absolute;
        left: -20px;
        opacity: 0.4;
      }
    }
    .card2 {
      .big-bg {
        width: 450px;
        position: absolute;
        left: -20px;
        top: -60px;
        opacity: 0.4;
      }
    }
    .card3 {
      .big-bg {
        width: 450px;
        position: absolute;
        left: -50px;
        opacity: 0.4;
      }
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
      padding-left: 5px;
      margin-top: 4px;
      font-weight: 400;
      font-size: 24px;
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
    display: block;
    width: 100%;
  }
  .logo {
    width: 20%;
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
  }
  @keyframes breath {
    from {
      transform: translate(0, 2px);
    }

    to {
      transform: translate(0, -2px);
    }
  }
  .icon {
    width: 4.2%;
    position: absolute;
  }
  .icon1 {
    width: 4.2%;
    position: absolute;
    animation: homeBreath1 1s ease infinite 650ms alternate;
    left: 35.6%;
    top: 24%;
  }
  .icon2 {
    width: 4.2%;
    position: absolute;
    animation: homeBreath2 1s ease-in-out infinite 500ms alternate;
    left: 26.6%;
    top: 35%;
  }
  .icon3 {
    width: 4.2%;
    position: absolute;
    animation: homeBreath3 1s ease-in infinite 100ms alternate;
    left: 22.6%;
    top: 54%;
  }
  .icon4 {
    width: 4.2%;
    position: absolute;
    animation: homeBreath4 1s ease-out infinite 0ms alternate;
    left: 31%;
    top: 50%;
  }
  .icon5 {
    width: 4.2%;
    position: absolute;
    animation: homeBreath5 1s linear infinite 100ms alternate;
    left: 28.6%;
    top: 70%;
  }
  .icon6 {
    width: 4.2%;
    position: absolute;
    animation: homeBreath6 1s ease-out infinite 800ms alternate;
    left: 36.6%;
    top: 80%;
  }
  .icon7 {
    width: 4.2%;
    position: absolute;
    animation: homeBreath7 1s ease infinite 400ms alternate;
    right: 35.6%;
    top: 24%;
  }
  .icon8 {
    width: 4.2%;
    position: absolute;
    animation: homeBreath8 1s linear infinite 1000ms alternate;
    right: 26.6%;
    top: 35%;
  }
  .icon9 {
    width: 4.2%;
    position: absolute;
    animation: homeBreath9 1s ease infinite 200ms alternate;
    right: 22.6%;
    top: 54%;
  }
  .icon10 {
    width: 4.2%;
    position: absolute;
    animation: homeBreath10 1s ease-in infinite 100ms alternate;
    right: 31%;
    top: 50%;
  }
  .icon11 {
    width: 4.2%;
    position: absolute;
    animation: homeBreath11 1s ease-in-out infinite 500ms alternate;
    right: 28.6%;
    top: 70%;
  }
  .icon12 {
    width: 4.2%;
    position: absolute;
    animation: homeBreath12 1s ease-out infinite 600ms alternate;
    right: 36.6%;
    top: 80%;
  }

  .text {
    text-align: center;
    display: block;
    width: 650px;
    font-weight: 500;
    font-size: 42px;
    color: #121619;
    position: absolute;
    letter-spacing: -0.02em;
    left: 50%;
    top: -25px;
    transform: translateX(-50%);
  }
}
.investor-section {
  padding-left: 280px;
  padding-top: 20px;
  margin-top: 200px;
  position: relative;
  .logo-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 328px);
    grid-row-gap: 20px;
    .img-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 327px;
      height: 70px;
      text-align: center;
      border-right: 1px solid rgb(218, 221, 228);
      &:nth-of-type(1) {
        img {
          height: 40px;
        }
      }
      &:nth-of-type(2) {
        img {
          height: 90px;
        }
      }
      &:nth-of-type(3) {
        img {
          height: 71px;
        }
      }
      &:nth-of-type(4) {
        img {
          height: 57px;
        }
      }
      &:nth-of-type(5) {
        img {
          height: 61px;
        }
      }
    }
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
      margin-left: 130px;
      .icon-wrap {
        padding-left: 10px;
        img {
          width: 42px;
        }
      }
      .words {
        font-size: 19px;
        margin-top: 20px;
        width: 650px;
        height: 400px;
        font-weight: 400;
        font-size: 34px;
        color: #21272a;
        line-height: 56px;
        &.small {
          ::v-deep(.inner) {
            font-size: 20px;
          }
        }
      }
      .m-bottom {
        margin-top: 40px;
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
          box-shadow: 0px 15px 21px -2px rgb(202 198 248);
          border-radius: 30px;
          .btn-left {
            box-shadow: none !important;
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
            box-shadow: none !important;
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
      &:hover {
        .item-inner {
          box-shadow: 0px 40px 58px -20px rgba(112, 144, 176, 0.2);
        }
      }
      .item-inner {
        cursor: pointer;
        height: 100%;
        background: #ffffff;
        border-radius: 20px;
      }
      .img-wrap {
        border-radius: 20px 20px 0 0;
        overflow: hidden;
        img {
          width: 303px;
          height: 171px;
        }
      }
      .text {
        padding: 12px 24px;
        padding-bottom: 0;
        margin-bottom: 10px;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #000000;
        position: relative;
        height: 70px;
        box-sizing: border-box;
        overflow: hidden;
        &::before {
          position: absolute;
          right: 5px;
          bottom: 5px;
          content: "...";
        }
        &:after {
          position: absolute;
          right: 5px;
          width: 1em;
          height: 2em;
          content: "";
          background-color: #fff;
        }
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
</style>
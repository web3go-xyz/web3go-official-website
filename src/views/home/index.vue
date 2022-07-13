<template>
  <div class="page-wrap">
    <div class="page-header" v-moveBottom>
      <div class="layout">
        <img class="bg-circle" src="@/assets/images/bg-circle.png" />
        <img class="logo" src="@/assets/images/logo.png" alt="" />
        <div class="right-menu">
          <div
            class="menu-item"
            v-for="(v, i) in menus"
            :key="i"
            @click="clickMenu(v)"
          >
            {{ v.name }}
            <!-- <font-flow :text="v.name"></font-flow> -->
          </div>
          <el-button class="btn" type="primary">Start Today</el-button>
        </div>
      </div>
    </div>
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
          <el-button class="btn" type="primary">
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
        <div class="card card1" v-moveUp="0.2">
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
        <div class="card card2" v-moveUp="0.5">
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
        <div class="card card3" v-moveUp="0.8">
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
        <span v-moveBig> 1000+ Users' intelligent data assistant </span>
      </div>
      <img class="bg" src="@/assets/images/number-section.png" alt="" />
      <div class="item item1" :key="1">
        <div class="num">
          <number-grow ref="numberGrow1" :value="65644" />
        </div>
        <div class="label">Predictions</div>
      </div>
      <div class="item item2" :key="2">
        <div class="num">
          <number-grow ref="numberGrow2" :value="56456" />
        </div>
        <div class="label">Alerts</div>
      </div>
      <div class="item item3" :key="3">
        <div class="num">
          <number-grow ref="numberGrow3" :value="8978" />
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
          <slide-up ref="slideTextRef1" class="words">
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
    <div class="page-footer">
      <div class="layout">
        <div class="search-wrap">
          <div class="search">
            <el-input
              v-model="searchValue"
              placeholder="Enter your email to get latest Web3go News!"
            />
            <svg class="rect" width="50" height="80">
              <polygon
                class="triangle"
                stroke-linejoin="round"
                points="10,10 40,10 10,70"
              />
            </svg>
          </div>
          <div class="btn">
            <svg class="rect" width="340" height="80">
              <polygon
                class="triangle"
                stroke-linejoin="round"
                points="40,10 330,10 330,70 10,70"
              />
            </svg>
            <div class="shadow"></div>
            <div class="inner">
              <span class="text">Subscribe</span>
              <img src="@/assets/images/arrow3.png" alt="" />
            </div>
          </div>
        </div>
        <div class="website-info">
          <div class="i-left">
            <div class="logo">
              <img src="@/assets/images/logo(3).png" alt="" />
            </div>
            <div class="icons">
              <img
                title="Github"
                @click="jumpUrl('https://github.com/web3go-xyz')"
                src="@/assets/images/Vector(10).png"
                alt=""
              />
              <img
                title="Discord"
                @click="jumpUrl('https://discord.gg/NTrHSqyuRg')"
                src="@/assets/images/Vector(11).png"
                alt=""
              />
              <img
                title="Twitter"
                @click="jumpUrl('https://twitter.com/Web3Go')"
                src="@/assets/images/Vector(12).png"
                alt=""
              />
              <img
                title="Telegram"
                @click="jumpUrl('https://t.me/web3go')"
                src="@/assets/images/Vector(13).png"
                alt=""
              />
            </div>
            <div
              class="foundation"
              @click="
                jumpUrl(
                  'https://github.com/w3f/Grants-Program/blob/master/applications/Web3Go.md'
                )
              "
            >
              <img src="@/assets/images/Frame23.png" alt="" />
            </div>
            <div class="gray">©2021-2022 WEB3GO TECHNOLOGY PTE.LTD.</div>
          </div>
          <div class="i-right">
            <div class="col-item">
              <div class="title">About</div>
              <div class="link">Roadmap</div>
              <div class="link">Privacy Policy</div>
              <div class="link">Terms and Conditions</div>
            </div>
            <div class="col-item">
              <div class="title">Media</div>
              <div class="link" @click="jumpUrl('https://twitter.com/Web3Go')">
                Twitter
              </div>
              <div
                class="link"
                @click="jumpUrl('https://discord.gg/NTrHSqyuRg')"
              >
                Discord
              </div>
              <div class="link" @click="jumpUrl('https://t.me/web3go')">
                Telegram
              </div>
              <div class="link" @click="jumpUrl('https://web3go.medium.com/')">
                Medium
              </div>
            </div>
            <div class="col-item">
              <div class="title">Resources</div>
              <div class="link" @click="jumpUrl('https://doc.web3go.xyz/')">
                Docs
              </div>
              <div
                class="link"
                @click="jumpUrl('https://github.com/web3go-xyz')"
              >
                Github
              </div>
              <div
                class="link"
                @click="
                  jumpUrl(
                    'https://www.youtube.com/channel/UCjsd_RBe4pyxtq_UEkxsDYQ'
                  )
                "
              >
                Youtube
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      codeAnimateInstance: null,
      mouseAnimateInstance: null,
      dashboardAnimateInstance: null,
      idAnimateInstance: null,
      alertAnimateInstance: null,
      showScrollTip: true,
      searchValue: "",
      newsList: [
        {
          image: require("@/assets/images/n1.png"),
          text: "Web3Go Delivered Milestone 1 for Our Web3 Foundation Grant",
          link: "https://web3go.medium.com/web3go-delivered-milestone-1-for-our-web3-foundation-grant-ed3321353a83",
        },
        {
          image: require("@/assets/images/n2.png"),
          text: "Web3Go x Bifrost: track and simulate staking schema in Bifrost’s Collator Mechanism",
          link: "https://web3go.medium.com/web3go-x-bifrost-track-and-simulate-staking-schema-in-bifrosts-collator-mechanism-8a911f5dc8c7",
        },
        {
          image: require("@/assets/images/n3.png"),
          text: "Web3Go x OAK Network: Crowdloan related data services",
          link: "https://web3go.medium.com/web3go-x-oak-network-crowdloan-related-data-services-ad5fe7f44377",
        },
        {
          image: require("@/assets/images/n4.jpeg"),
          text: "Moonbeam & Moonriver Staking Dashboards — Tracking and Simulation",
          link: "https://web3go.medium.com/moonbeam-moonriver-staking-dashboards-tracking-and-simulation-14fcc6f7024e",
        },
      ],
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
      ],
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
  created() {
    this.createKeyFrame();
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
    clickMenu(v) {
      if (v.name == "Solutions") {
        setTimeout(() => {
          window.scrollTo({
            top: 1000,
            behavior: "smooth",
          });
        }, 100);
      } else if (v.name == "News") {
        setTimeout(() => {
          window.scrollTo({
            top: 4420,
            behavior: "smooth",
          });
        }, 100);
      }
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
    },
    next() {
      this.$refs.carousel.next();
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
          padding: 11px 36px;
          cursor: pointer;
          position: relative;
          &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: 10px;
            width: 0;
            height: 2px;
            background: #4318ff;
            transition: all 0.4s;
          }
          &:hover {
            &:after {
              width: calc(100% - 72px);
            }
          }
        }
        .btn {
          height: 44px;
          padding: 0 36px;
          margin-left: 20px;
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
  .page-footer {
    padding-top: 136px;
    margin-top: 148px;
    height: 425px;
    box-sizing: border-box;
    position: relative;
    background: #e0e5f2;
    .search-wrap {
      position: absolute;
      top: -40px;
      display: flex;
      .search {
        position: relative;
        box-shadow: 0px 28px 30px rgb(112 144 176 / 10%);
        border-radius: 20px;

        ::v-deep(.el-input) {
          .el-input__inner {
            border-radius: 20px;
            padding: 0 35px;
            height: 80px;
            width: 917px;
            font-weight: 500;
            font-size: 24px;
            box-sizing: border-box;
            border: 0;
            box-shadow: none;
            outline: 0;
          }
        }
        .rect {
          position: absolute;
          pointer-events: none;
          right: -28px;
          .triangle {
            fill: white;
            stroke: white;
            stroke-width: 20;
          }
        }
      }
      .btn {
        position: relative;
        margin-left: 20px;
        cursor: pointer;

        &:hover,
        &:focus {
          .triangle {
            fill: #7551ff !important;
            stroke: #7551ff !important;
          }
        }
        .rect {
          display: block;
          pointer-events: none;
          left: -28px;
          .triangle {
            fill: #4318ff;
            stroke: #4318ff;
            stroke-width: 20;
          }
        }
        .shadow {
          position: absolute;
          bottom: 0;
          height: 1px;
          left: 11px;
          right: 25px;
          box-shadow: 7px 16px 31px 10px rgb(202 198 248);
        }

        .inner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          .text {
            font-weight: 500;
            font-size: 24px;
            color: #ffffff;
          }
          img {
            width: 13px;
            margin-left: 18px;
          }
        }
      }
    }
    .website-info {
      display: flex;
      .i-left {
        .logo {
          img {
            width: 151px;
          }
        }
        .icons {
          padding-left: 31px;
          padding-top: 15px;
          display: flex;
          align-items: center;
          img {
            cursor: pointer;
            margin-left: 17px;
            height: 14px;
            &:hover {
              opacity: 0.8;
            }
            &:nth-child(1) {
              height: 15px;
            }
            &:nth-child(2) {
              height: 17px;
            }
          }
        }
        .foundation {
          cursor: pointer;
          margin-top: 39px;
          &:hover {
            opacity: 0.8;
          }
          img {
            width: 240px;
          }
        }
        .gray {
          margin-top: 16px;
          font-weight: 400;
          font-size: 12px;
          color: #a3aed0;
        }
      }
      .i-right {
        display: flex;
        margin-left: 110px;
        .col-item {
          margin-left: 147px;
          .title {
            font-weight: 700;
            font-size: 16px;
            color: #21272a;
            margin-bottom: 16px;
          }
          .link {
            cursor: pointer;
            font-weight: 400;
            font-size: 16px;
            color: #4d5358;
            margin-bottom: 16px;
            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
    }
  }
}
</style>
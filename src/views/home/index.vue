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

          <a-button class="btn" type="primary">Start Today</a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FontFlow from "@/components/FontFlow";
export default {
  components: {
    FontFlow,
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
        height: 213px;
        width: auto;
        position: absolute;
        top: -28px;
        left: -84px;
      }
      .logo {
        z-index: 2;
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
          box-shadow: 0px 40px 58px -20px rgba(112, 144, 176, 0.12);
        }
      }
    }
  }
}
</style>
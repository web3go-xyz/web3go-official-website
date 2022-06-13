import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ECharts from 'vue-echarts'
import "echarts";
import '@/assets/font/font.css';
import '@/assets/css/theme.scss'
import '@/assets/css/index.less';
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import moment from 'moment';
import * as utils from '@/utils'
import moveUp from '@/directive/moveUp';
import moveLeft from '@/directive/moveLeft';

// 获取保存的用户信息
const savedUserDataStr = localStorage.getItem('userData');
if (savedUserDataStr) {
    const savedUserData = JSON.parse(savedUserDataStr);
    store.commit('changeUserData', savedUserData);
}

const app = createApp(App);

app.config.globalProperties.$utils = utils;
app.config.globalProperties.$moment = moment;

app.component('v-chart', ECharts)
app.directive('moveUp', moveUp);
app.directive('moveLeft', moveLeft);


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(store).use(router).use(ElementPlus).mount('#app')
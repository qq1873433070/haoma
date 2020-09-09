import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/FyCss.css';
import 'vant/lib/index.css';
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
import axios from "axios"; //直接引用就行
Vue.prototype.axios = axios
import qs from "qs"; //直接引用就行
Vue.prototype.qs = qs
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

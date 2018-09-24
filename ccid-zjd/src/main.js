import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import store from "./vuex/store"
import "element-ui/lib/theme-chalk/index.css";
import "babel-polyfill";
import jQuery from 'jquery';
// 无缝滚动
// import scroll from 'vue-seamless-scroll';
// 重制样式
import './../static/css/common/reset.css';
import "./../static/css/common/common.css";

// 查找样式
import './../static/css/common/searchbox.css';

// 查找样式-时间选择
import './../static/css/common/datepicker.css';

// 苏东染个人公共样式
import './../static/css/common/sdr_common.css';

//引用 bootstrap
// window.jQuery = jQuery;
// import './../static/js/bootstrap/css/bootstrap.min.css';
// import './../static/js//bootstrap/js/jquery.min.js'
// import './../static/js/bootstrap/js/bootstrap.min.js';


// 公共样式
import './../static/css/public.css'
// 引用全局过滤器
import "./common/filters";
import './common/directives'

// 引用饿了mentUi
Vue.use(ElementUI);
// Vue.use(scroll)
Vue.prototype.$axios = axios;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
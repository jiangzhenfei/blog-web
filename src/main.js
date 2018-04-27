// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'iview/dist/styles/iview.css';    // 使用 CSS
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from './service/axios'    // ajax请求封装引入
import iView from 'iview'; 

Vue.config.productionTip = false

Vue.use(iView)

/* eslint-disable no-new */
new Vue({
    el: '#app',
  	router,
  	axios,
  	components: { App },
  	template: '<App/>'
})

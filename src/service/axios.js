import axios from 'axios'
import Vue from 'vue'
import iView from 'iview';


// axios 配置
axios.defaults.timeout = 15000;
axios.defaults.baseURL = '/blog';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error.response)
    }
);

axios.install = (Vue) => {
    Vue.prototype.axios = axios
}
    
export default axios;

import axios from 'axios';

//设置默认的请求格式
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
const service = axios.create({
    timeout: 9000,
    baseURL: process.env.VUE_APP_BASE_URL // 引入请求的url
  });
  // 请求的拦截器
service.interceptors.request.use(
    function(config) {
      // 在发送请求之前做些什么
      config.headers['token'] = '121';
      return config;
    },
    function(error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );
  // 对请求错误做些什么
  
  // 响应的拦截器
  service.interceptors.response.use(
    function(response) {
      // 对响应数据做点什么
      return response;
    },
    function(error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    }
  );
  
  export default service;
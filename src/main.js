import Vue from 'vue'
import App from './App.vue'
import router from './router'
//第三方vant插件库

import 'vant/lib/index.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

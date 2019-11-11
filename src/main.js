import Vue from 'vue'
import App from './App.vue'
import router from './router'
//第三方vant插件库
import store from './store'

import 'vant/lib/index.css';
import { ImagePreview } from 'vant';
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: require('./assets/images/timg.gif')
})
Vue.use(ImagePreview);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

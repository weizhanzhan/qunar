// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './routes/routes'
import axios from 'axios'
import fastClick from 'fastclick'
import store from './store'


//引入vue-awesome-swiper  轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'


Vue.config.productionTip = false
Vue.use(VueRouter)

axios.defaults.baseURL="./static/mock/"
Vue.prototype.$http=axios

const router = new VueRouter({
  routes:Routes,
//  mode:'history' 
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})

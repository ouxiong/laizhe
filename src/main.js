import Vue from 'vue'
// APP.vue 是程序的入口大组件
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource);
Vue.use(VueLazyload, {
  preLoad:0.8,
  attempt: 1
})


new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
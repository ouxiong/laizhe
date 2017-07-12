import Vue from 'vue'
import VueExtend from './extend'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import store from './store'
FastClick.attach(document.body);

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource);
Vue.use(VueLazyload, {
  preLoad:1,
  attempt: 1
})
new Vue({
	beforeCreate: function() {
		var city = '北京';
		try {
			city = window.localStorage.city;
		} catch(e) {}
		this.$store.commit("changeCity", city);
	},
  	el: '#app',
  	router,
  	store,
  	template: '<App/>',
  	components: { App }
})

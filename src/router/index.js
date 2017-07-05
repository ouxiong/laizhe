import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'

Vue.use(Router)

export default new Router({
	//router里面定义了一个路由routers
  routes: [
    {
      //hello这个组件会显示APP.vue大入口组件<router-view>内
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})

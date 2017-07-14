import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import List from '@/pages/list/index'
import Weekend from '@/pages/weekend/index'
import OneDayTourDetail from '@/pages/onedaydetail/index'
import Sales from '@/pages/sales/index'
import Comment from '@/pages/comment/index'
import Promote from '@/pages/promote/index'
import City from '@/pages/city/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
        alias: '/index',
      component: Index
    }, {
      path: "/list",
      name: "list",
      component: List
    }, {
      path: '/comment',
      name: 'comment',
      component: Comment
    }, {
        path: "/weekend/:id/:title",
        name: "weekend",
        component: Weekend
    },{
        path: "/city",
        name: "city",
        component: City
    }, {
      path: '/promote',
      name: 'promote',
      component: Promote
    }, {
        path: "/sales",
        name: "sales",
        component: Sales
    }, {
        path: "/oneday/detail/:pid",
        name: "one-day-detail",
        component: OneDayTourDetail
    }
    ]
})

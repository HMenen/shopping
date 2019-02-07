import Vue from 'vue'
import Router from 'vue-router'
import List from '../view/List.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'list',
      component: (resolve) => require(['../view/List.vue'], resolve),
      mode: 'history',
      meta: {
        title: '商品列表'
      },
    },
    {
      path: '*',
      redirect: '/list'
    }
  ]
})

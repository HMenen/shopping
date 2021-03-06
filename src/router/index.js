import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo2',
      component: (resolve) => require(['../components/demos/Demo2.vue'], resolve),
    },
    {
      path: '/demo1',
      component: (resolve) => require(['../components/demos/Demo1.vue'], resolve),
    },
    {
      path: '/cart',
      component: (resolve) => require(['../view/Cart.vue'], resolve),
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/product/:id',
      component: (resolve) => require(['../view/ProductDetail.vue'], resolve),
      mode: 'history',
      meta: {
        title: '商品详情'
      }
    },
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
    },
  ]
})

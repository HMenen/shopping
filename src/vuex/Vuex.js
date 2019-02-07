import Vuex from 'vuex'
import Vue from 'vue'

import product_data from '../data/product'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //商品列表
    productList: [],
    //购物车数据
    carList: []
  },
  getters: {
    
  },
  mutations: {
    //添加商品列表
    setProductList (state, data) {
      state.productList = data;
    }
  },
  actions: {
    //请求商品列表数据
     getProductList (context) {
       setTimeout(() => {
         context.commit('setProductList', product_data);
       }, 500);
     } 
  }
});


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
    brands: state => {
      const brands = state.productList.map(item => item.brand);
      return getFilterArray(brands);
    },
    colors: state => {
      const colors = state.productList.map(item => item.color);
      return getFilterArray(colors);
    }
  },
  mutations: {
    //添加商品列表
    setProductList (state, data) {
      state.productList = data;
    },
    //添加购物车
    addCar (state, id) {
      const isAdd = state.carList.find(item => item.id === id);
      if (isAdd) {
        isAdd.count ++;
      } else {
        state.carList.push({
          id: id,
          count: 1
        })
      }
    },
    //添加、减少购物车商品数量
    editCart (state, payload){
      let item = state.carList.find(item => item.id === payload.id);
      item.count += payload.count;
    },
    delCart (state, id) {
      let index = state.carList.find(item => item.id === id);
      state.carList.splice(index, 1);
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

//数组去重重排
function getFilterArray (array) {
  let res = [];
  let json = []
  for(let i = 0; i < array.length; i ++) {
    let _self = array[i];
    if (!json[_self]) {
      res.push(_self);
      json[_self] = 1;
    }
  }
  return res;
}
<template>
  <div class="cart">
    <div class="cart-header-title">购物清单</div>
    <div class="cart-header-main">
      <div class="cart-info">商品信息</div>
      <div class="cart-price">单价</div>
      <div class="cart-count">数量</div>
      <div class="cart-cost">小计</div>
      <div class="cart-delete">删除</div>
    </div>
    <div class="cart-content">
      <div 
        class="cart-content-main"
        v-for="(item, index) in carList" 
        :key="item.id">
        <div class="cart-info">
          <img :src="productDicList[item.id].image">
          <span>{{ productDicList[item.id].name }}</span>
        </div>
        <div class="cart-price">{{ productDicList[item.id].cost }}</div>
        <div class="cart-count">
            <span class="cart-count-add" @click="handleCart(index, -1)">-</span>
            <span>{{item.count }}</span>
            <span class="cart-count-del" @click="handleCart(index, 1)">+</span>
        </div>
        <div class="cart-cost">{{ productDicList[item.id].cost * item.count }}</div>
        <div class="cart-delete" @click="handleDel(productDicList[item.id].id)">删除</div>
      </div>
    </div>
    <div class="empty" v-if="!carList.length">购物车为空</div>
    <div class="cart-promotion" v-show="carList.length">
        <span>使用优惠码：</span>
        <!-- <div> -->
        <span><input type="text"/></span>
        <span class="cart-promotion-confirm">验证</span>
        <!-- </div> -->
    </div>
    <div class="cart-footer" v-show="carList.length">
      <div class="cart-footer-desc">
        共计<span>{{ totalCount }}</span>件商品
      </div>
      <div  class="cart-footer-total-count">
        应付总额 ¥<span>{{ costAll }}</span>
        <br>
        <template>
           (优惠¥<span>111</span> )
        </template>
      </div>
      <div class="submmit">现在结算</div>
    </div>
  </div>
</template>

<script>
import product_data from '../data/product.js'
export default {
  name: 'cart',
  data () {
    return {
      productList: product_data
    }
  },
  methods: {
    handleCart (index, count) {
      if (count < 0 && this.carList[index].count === 1) return
      this.$store.commit('editCart', {
        id: this.carList[index].id,
        count: count
      })
    },
    handleDel (id) {
      this.$store.commit('delCart', id);
    }
  },
  computed: {
    carList () {
      return this.$store.state.carList;
    },
    //构造商品字典，便于查询   
    productDicList () {
      const dic = {};
      this.productList.forEach(item => {
        dic[item.id] = item;
      });
      return dic;
    },
    totalCount () {
      let totalCount = 0;
      this.carList.forEach(item => {
        totalCount += item.count;
      });
      return totalCount;
    },
    costAll () {
      let cost = 0;
      this.carList.forEach(item => {
        cost += this.productDicList[item.id].cost * item.count;
      });
      return cost;
    }
  },
}
</script>

<style lang="stylus" scoped>
.cart{
  border: 1px  solid #dddee1;
  margin: 25px;
  border-radius: 6px;
  .cart-header-title{
    line-height: 40px;
    border-bottom: 1px solid #dddee1;
    padding: 0 20px;
  }
  .cart-header-main{
    display: flex;
    align-content: space-between;
    padding: 6px 20px;
    border-bottom: 1px solid #dddee1;
    font-size: 14px;
    align-items: center;
    .cart-info{
    }
  }
  .cart-content{
    border-bottom: 1px solid #dddee1;
    font-size: 14px;
    .cart-content-main{
      display: flex;
      align-content: space-between;
      align-items: center;
      padding: 6px 20px;
      border-bottom: 1px solid #dddee1;
    }
  }
  .cart-promotion{
    font-size: 14px;
    margin: 20px;
    .cart-promotion-confirm{
      background: #f2352e;
      color: #fff;
      border-radius: 3px;
      padding: 0 3px;
    }
  }
  .cart-footer{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 13px;
    .cart-footer-desc{
      margin: 20px 13px;
    }
    .cart-footer-total-count{
      margin: 20px 13px;
      text-align: center;
    }
    .submmit{
      margin: 20px 25px;
      background: #f2352e;
      border-radius: 3px;
      color: #fff;
      padding: 2px 10px;
    }
  } 
}

.cart-info{
  flex: 6;
  display: flex;
  align-items: center;
  img{
    width: 10%;
  }
  span{
     font-size: 14px;
  }
}
.cart-price{
  flex: 1;
  display: inline-block;
  text-align: center;
}  
.cart-count{
  flex: 1;
  display: inline-block;
  text-align: center;
  .cart-count-add, .cart-count-del{
    border: 1px solid #dddee1;
    border-radius: 50%;
    padding: 0 5px;
    background: #dddee1;
    text-align: center;
    cursor: pointer;
  }
}
.cart-cost{
  flex: 1;
  display: inline-block;
  text-align: center;
}
.cart-delete{
  flex: 1;
  display: inline-block;
  text-align: center;
}
</style>

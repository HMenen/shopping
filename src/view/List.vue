<template>
  <div v-show="list.length" class="product-list">
    <div class="list-control">
      <div class="list-control-filter"> 
        <span>品牌：</span>
        <span
          class="list-control-filter-item"
          :class="{on: item === filterBrand}"
          v-for="(item, index) in brands" :key="index"
          @click="handleFilterBrand(item)">{{ item }}</span>
      </div>
      <div class="list-control-filter">
         <span>颜色：</span> 
         <span
           class="list-control-filter-item"
           :class="{on: item === filterColor}"
           v-for="(item, index) in colors" :key="index"
           @click="handleFilterColor(item)">{{ item }}</span>
      </div>
      <div class="list-control-order">
        <span>排序：</span>
        <span 
          class="list-control-order-item"
          :class="{on: order === ''}"
          @click="handleOrderDefault">默认</span>
        <span
          class="list-control-order-item"
          :class="{on: order === 'sales'}"
          @click="handleOrderSales">销量
          <template v-if="order === 'sales'">⬇️</template>
        </span>
        <span
          class="list-control-order-item"
          :class="{on: order.indexOf('cost') > -1}"
          @click="handleOrderCost">
          价格
          <template v-if="order === 'cost-asc'">⬆️</template>
          <template v-if="order === 'cost-desc'">⬇️</template>
        </span>
      </div>
    </div>

    <product v-for="item in filteredAndOrderList" :info="item" :key="item.id"></product>
    <div
      class="product-not-found"
      v-show="!filteredAndOrderList.length">暂无相关商品</div>
  </div>
</template>

<script>
import Product from '../components/Product.vue'

export default {
  name: 'list',
  components:{
    Product
  },
  data () {
    return {
      order: '',
      filterBrand: '',
      filterColor: ''
    }
  },
  computed: {
    list () {
      return this.$store.state.productList;
    },
    filteredAndOrderList () {
      let list = [...this.list];
      if (this.order != '') {
        if (this.order === 'sales') {
          list = list.sort((a, b) => b.sales - a.sales);
        } else if (this.order === 'cost-desc') {
          list = list.sort((a, b) => b.cost - a.cost);
        }else if (this.order === 'cost-asc') {
          list = list.sort((a, b) => a.cost - b.cost);
        }
      }
      if ( this.filterBrand != '' ) {
        list = list.filter(item => item.brand === this.filterBrand);
      }
      if ( this.filterColor != '' ) {
        list = list.filter(item => item.color === this.filterColor);
      }
      return list;
    },
    brands () {
      return this.$store.getters.brands;
    },
    colors () {
      return this.$store.getters.colors;
    }
  },
  mounted () {
    this.$store.dispatch('getProductList');
  },
  methods: {
    handleOrderDefault () {
      this.order = '';
    },
    handleOrderSales () {
      this.order = 'sales';
    },
    handleOrderCost () {
      if (this.order === 'cost-desc') {
        this.order = 'cost-asc';
      }else {
        this.order = 'cost-desc';
      }
    },
    handleFilterBrand (brand) {
      if (this.filterBrand != brand) {
        this.filterBrand = brand;
      }else {
        this.filterBrand = '';
      }
    },
    handleFilterColor (color) {
      if (this.filterColor != color) {
        this.filterColor = color;
      }else{
        this.filterColor = '';
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.product-list{
  display: flex;
  flex-wrap: wrap;
  margin: 16px;
  padding: 16px;
  .product-not-found{
    padding: 32px;
  }
  .list-control{
    width: 100%;
    background: #fff;
    border-radius: 6px;
    padding: 16px;
    margin: 16px;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    .list-control-order{
      font-size: 15px;
      .list-control-order-item{
        cursor: pointer;
        border: 1px solid #e9eaec;
        border-radius: 4px;
        margin-right: 6px;
        padding: 2px 4px;
      }
      .list-control-order-item.on{
        // background: #f2352e;
        // border: 1px solid #f2352e;
        color: #f2352e;
      }
    }
    .list-control-filter{
      font-size: 15px;
      padding-bottom: 15px;
      .list-control-filter-item{
        cursor: pointer;
        border: 1px solid #e9eaec;
        border-radius: 4px;
        margin-right: 6px;
        padding: 2px 4px;

      }
      .list-control-filter-item.on{
        color: #f2352e;
      }
    }
  }
}
</style>

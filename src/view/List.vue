<template>
  <div v-show="list.length" class="product-list">
    <div class="list-control">
      <div class="list-control-order">
        <span>排序：</span>
        <span 
          class="list-control-order-item"
          :class="{on: order === ''}"
          @click="handleOrderDefault">默认</span>
        <span
          class="list-control-order-item"
          :class="{on: order === 'sales'}"
          @click="handleOrderSales">销量</span>
        <span
          class="list-control-order-item"
          :class="{on: order.indexOf('cost') > -1}"
          @click="handleOrderCost"></span>
      </div>
    </div>

    <product v-for="item in filteredAndOrderList" :info="item" :key="item.id"></product>
    <div
      class="product-not-found"
      v-show="!filteredAndOrderLis.length">暂无相关商品</div>
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
      order: ''
    }
  },
  computed: {
    list () {
      return this.$store.state.productList;
    },
    filteredAndOrderList () {
      let list = [...this.list];
      if (this.order != ''){
        if (this.order === 'sales') {
          list = list.sort((a, b) => b.sales - a.sales);
        } else if (this.order === 'cost-desc') {
          list = list.sort((a, b) => b.cost - a.cost);
        }else if (this.order === 'cost-asc') {
          list = list.sort((a, b) => a.cost - b.cost);
        }
      }
      return list;
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
    }
  }
}
</script>

<style lang="stylus" scoped>
.product-list{
  display: flex;
  flex-wrap: wrap;
  margin: 16px;
}
</style>

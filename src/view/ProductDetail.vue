<template>
  <div v-if="product">
    <div class="product">
      <div class="product-img">
        <img :src="product.image">
      </div>
      <div class="product-info">
        <h1 class="product-name">{{ product.name }}</h1> 
        <div class="product-cost">¥{{ product.cost }}</div>
        <div 
          class="product-add-cart"
          @click="addCart">加入购物车</div>
      </div>
    </div>
    <div class="product-desc">
      <h2>产品介绍</h2>
      <img v-for="n in 2" :key="n"
        :src="'https://img14.360buyimg.com/cms/jfs/t1/6613/4/7333/61736/5be2a65eE983f4e10/280e924d8319ee15.jpg'">
    </div>
  </div>
</template>

<script>
import product_data from '../data/product.js'

export default {
  name: 'detail',
  data () {
    return{
      product: null,
      id: parseInt(this.$route.params.id)
    }
  },
  methods: {
    getProduct () {
      setTimeout( () => {
          console.log(product_data);
          console.log(this.id);
        this.product = product_data.find(item => item.id === this.id)
      }, 500);
    },
    addCart () {
      this.$store.commit('addCar', this.id);
    }
  },
  mounted () {
    this.getProduct();
    
  }
}
</script>

<style lang="stylus" scoped>
.product{
  display: flex;
  justify-content: center;
  margin: 40px ;
  background: #fff;
  border: 1px solid #dddee1;
  border-radius: 10px;
  overflow: hidden;
//   width: 80%;
  .product-img{
    width: 30%;
    text-align: center;
    img{
      height: 90%;
      margin-top: 30px;
    }
  }
  .product-info{
    margin-left: 100px;
    width: 30%;
    padding: 150px 0 250px;
    text-align: center;
    .product-cost{
      color: #f2352e;
      margin: 8px 0;
      font-size: 20px;
    }
    .product-add-cart{
      padding: 8px 64px;
      margin: 8px 0;
      color: #fff;
      background: #2d8cf0;
      border-radius: 5px;
      cursor: pointer;
      display: inline-block;
    }
  }
}
.product-desc{
  background: #fff;
  margin: 40px;
  padding: 40px;
  border: 1px solid #dddee1;
  border-radius: 10px;
  text-align: center;
  img{
    display: block;
    width: 50%;
    margin: 32px auto;
    padding: 32px;
    border-bottom: 1px solid #dddee1;
  }
}
</style>

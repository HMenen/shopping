<template>
  <div id="app">
    <div class="header">
      <router-link
        to="/list" 
        class="header-title">电商网站示例</router-link>
      <dir class="header-menu">
        <router-link to="/cart" class="header-menu-cart">
          购物车
          <span v-if="carList.length">{{ carList.length }}</span>
        </router-link>
      </dir>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import ProductList from './view/List.vue'
export default {
  name: 'App',
  components: {
    
  },
  computed: {
    carList () {
      return this.$store.state.carList;
    },
  }
}
</script>

<style lang="stylus" scoped>
a{
  text-decoration: none;
}
html, body{
  background: #f8f8f9;
  margin: 0;
  padding: 0;
}
.header{
  display: flex;
  background: rgba(0,0,0,.8);
  justify-content: space-between;
  align-items: center;
  height: 48px;
  color: #fff;
  font-size: 13px;
  .header-title{
    margin-left: 32px;
    color: #fff;
  }
  .header-menu{
    margin-right: 32px;
    .header-menu-cart{
      color: #fff;
      span{
        // border-radius: 50%;
        // background: #ff5500;
        color: #fff;

      }
    }
  }
}

</style>


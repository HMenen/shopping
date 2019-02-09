<template>
  <div>
      <input type="text" v-model="firstName">
      <input type="text" v-model="watchName">
    {{ fullName }} --- {{ fullName2 }}
     <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return{
      firstName: 'han',
      lastName: 'mei',
      fullName2: '',
      watchName: ''
    }
  },
  computed: {
    fullName () {
      return this.firstName +' '+ this.lastName;
    }
  },
  watch: {
    watchName: function (val) {
      this.fullName2 = val + this.lastName;
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>

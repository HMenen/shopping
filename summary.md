# 总结

1. computed 与 watch之间差异

   都是在数据发生改变时会执行，用于观察数据发生改变。
   但是computed是计算属性，在computed中的都是属性，其地位与 data的一样，并且当数据没有发生改变时会直接从缓存中去取
   computed多适用地场景：一个变量依赖于多个变量，其他多个变量的值发生改变会影响某个变量值
   watch多适用地场景：   多个变量依赖于某个变量，某个变量的值发生改变会影响其他多个变量的值发生
   例子如：Demo1.vue中所示

2. vue生命周期
   * beforecreated：el 和 data 并未初始化 
   * created:完成了 data 数据的初始化，el没有
   * beforeMount：完成了 el 和 data 初始化 
   * mounted ：完成挂载

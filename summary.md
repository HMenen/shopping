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
* beforeMount：完成了 el 和 data 初始化 ，但是el中是没有内容地，只是占了一个坑
* mounted ：完成挂载
* destroy相关：销毁完成后，我们再重新改变message的值，vue不再对此动作进行响应了。但是原先生成的dom元素还存在，可以这么理解，执行了destroy操作，后续就不再受vue控制了。

##### 生命周期总结
* beforecreate : 举个栗子：可以在这加个loading事件 
* created ：在这结束loading，还做一些初始化，实现函数自执行 
* mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
* beforeDestroy： 你确认删除XX吗？ destroyed ：当前组件已被删除，清空相关内容

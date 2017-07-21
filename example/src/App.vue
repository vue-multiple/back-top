<template>
  <div id="app">
    <back-top-demo></back-top-demo>
  </div>
</template>

<script type="es6">
import BackTopDemo from './BackTopDemo.vue'
    export default {
        components: {
            BackTopDemo
        },
        beforeCreate() {
            console.log("%c Powered by https://github.com/Uzty","background-image:-webkit-gradient( linear, left top,right top, color-stop(0, #00a419),color-stop(0.15, #f44336), color-stop(0.29, #ff4300),color-stop(0.3, #AA00FF),color-stop(0.4, #8BC34A), color-stop(0.45, #607D8B),color-stop(0.6, #4096EE), color-stop(0.75, #D50000),color-stop(0.9, #4096EE), color-stop(1, #FF1A00));color:transparent;-webkit-background-clip:text;font-size:13px;");
        },
    }
</script>

<style>
  #app {
    width: 1000px;
    margin: 60px auto;
    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>

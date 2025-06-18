<script setup>
</script>

<template>
  <div id="app">
    <router-view></router-view>
    <img id="logos" src="./assets/logos.png">
  </div>
</template>

<style scoped>
#app{
  position: fixed;
  width: 100%;
  height: 93%;
  top:0;
  right:0;
  background-image: url("./assets/bg.jpg");
  background-size: 100% 100%;
}

#logos{
  position: fixed;
  bottom: 0%;
  left:-1%;
}
</style>

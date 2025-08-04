<script>
  export default{
    
  }
</script>

<template>
  <div id="app">
    <router-view></router-view>
    <img id="logos" src="./assets/logos.png">
    <img id="pikud" src="./assets/pikud.png">
  </div>
</template>

<style scoped>
#app{
  position: fixed;
  width: 100%;
  height: 100%;
  top:0;
  right:0;
  background-image: url("./assets/bg.jpg");
  background-size: 100% 100%;
  direction: rtl;
}

#logos{
  position: fixed;
  bottom: 0%;
  left:0%;
  height: 7%;
  width:37.5%;
  margin:1%;
  z-index: 13;
  }

#pikud{
  height:8%;
  width:17%;
  position: absolute;
  left:4%;
  top:1%;
  z-index: 900;
}
</style>

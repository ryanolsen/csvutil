<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  font-family: 'Overpass', sans-serif;
  background-color: #646770;
  background-image: linear-gradient(0deg, #7B7E8A 0%, #646770 98%);
  margin-bottom: 165px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


h1, h2, p, a {
  color: #E6E6E6;
  font-weight: normal;
  text-decoration: none;
  text-shadow: 0 1px 2px rgba(0,0,0,0.20);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

textarea {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  min-height: 200px;
  width: 100%;
}
</style>

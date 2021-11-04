<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <div style="width: 80%; margin: 0 10%"><searchs /></div> -->
    <router-view></router-view>
    <main-bar />
  </div>
</template>

<script>
 
import searchs from "./components/searchs/searchs.vue";
import MainBar from "@/components/TabBars/MainBar.vue";

export default {
  name: "App",
  components: {
    searchs,
    // HelloWorld,
    MainBar,
  },
};
</script>

<style>
@import "./assets/css/base.css";
</style>

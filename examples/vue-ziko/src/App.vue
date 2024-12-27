<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import {h1} from "ziko"
import { ZikoWrapper } from "ziko-wrapper/vue"
const Header=(color)=>h1("Hello from zikojs").style({color})
</script>

<template>
  <!-- <ZikoWrapper :ui="Header()"/> -->
  <ZikoWrapper :ui="[Header('red'), Header('green')]"/>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

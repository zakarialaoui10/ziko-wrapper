<script setup>
import {h1} from "ziko"
import { ZikoWrapper, DomWrapper } from "ziko-wrapper/vue"
const Header2=({color})=>h1("Hello from zikojs").style({color})

const Dom=({color = "red"}={})=>{
  const element = document.createElement("h2")
  element.innerText = "Hi "
  element.style.color = color;
  return element
}
</script>

<template>
  <ZikoWrapper>
    <Header2 color="blue"/>
  </ZikoWrapper>

  <DomWrapper wrapper="dom">
    <Dom color="green"/>
  </DomWrapper>

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

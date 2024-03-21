<script setup>
import ZikoUI from "ziko-wrapper/vue";
import NotZikoUI from "./NotZikoUI.vue";
import {text} from "ziko";
import {ref} from "vue"
  const ui = text("hello").style({
    color:"green"
  }).onClick(()=>txt.value = " From Zikojs");
  let txt=ref(" World");
</script>

<template>
  <ZikoUI :ui="ui"/>
  <NotZikoUI :text="txt"/>
</template>

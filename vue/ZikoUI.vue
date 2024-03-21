<template>
    <ziko-ui ref="containerRef" data-engine="ziko"></ziko-ui>
  </template>
  <script>
  import {ZikoUIElement} from "ziko";
  __ZikoConfig__.setDefault({render:false})
  export default {
    props: {
      ui: Object
    },
    mounted() {
      if (this.$refs.containerRef && this.ui instanceof ZikoUIElement) {
        this.$refs.containerRef.innerHTML = "";
        this.$refs.containerRef.appendChild(this.ui.element);
      }
    }
  };
  </script>
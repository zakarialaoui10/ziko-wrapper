<template>
  <div 
    ref="containerRef" 
    data-wrapper="ziko-wrapper"
    data-engine="ziko.js"
    style="display: contents;"
  ></div>
</template>
<script>
import {ZikoUIElement} from "ziko"
export default {
  props: {
    // ui: Object
    ui : Function
  },
  mounted() {
    __Ziko__.__Config__.setDefault({render:false})
    if (this.$refs.containerRef && this.ui instanceof ZikoUIElement) {
      this.$refs.containerRef.innerHTML = "";
      // this.$refs.containerRef.appendChild(this.ui.clone().element);
      this.$refs.containerRef.appendChild(this.ui().element);
    }
  }
};
</script>

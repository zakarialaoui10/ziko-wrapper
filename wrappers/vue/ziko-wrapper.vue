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
    const Wrapper = this.$refs.containerRef
    if (Wrapper && this.ui instanceof ZikoUIElement) {
      Wrapper.innerHTML = "";
      if(this.ui instanceof ZikoUIElement) Wrapper.appendChild(this.ui.element);
      // else if(this.ui instanceof f) Wrapper.appendChild(this.ui().element);
    }
  }
};
</script>

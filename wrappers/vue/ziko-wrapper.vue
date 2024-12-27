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
    ui: {
      type: [Function, Array],
      required: true,         
      default: null          
    }
    // ui : Function | [Function]
  },
  mounted() {
    __Ziko__.__Config__.setDefault({render:false})
    const Wrapper = this.$refs.containerRef
    if (Wrapper) {
      Wrapper.innerHTML = "";
      if(this.ui instanceof ZikoUIElement) Wrapper.appendChild(this.ui.element);
      else if(this.ui instanceof Array) this.ui.forEach(item=> Wrapper.appendChild(item.element))
    }
  }
};
</script>

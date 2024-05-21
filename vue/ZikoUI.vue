<template>
  <section ref="containerRef" data-engine="ziko"></section>
</template>
<script>
import {ZikoUIElement} from "ziko"
export default {
  props: {
    ui: Object
  },
  mounted() {
    __Ziko__.__Config__.setDefault({render:false})
    if (this.$refs.containerRef && this.ui instanceof ZikoUIElement) {
      this.$refs.containerRef.innerHTML = "";
      this.$refs.containerRef.appendChild(this.ui.clone().element);
    }
  }
};
</script>

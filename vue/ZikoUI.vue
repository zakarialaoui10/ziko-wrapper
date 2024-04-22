<template>
  <ziko-ui ref="containerRef" data-engine="ziko"></ziko-ui>
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
<style scoped>
  ziko-ui{
    display:block;
  }
</style>

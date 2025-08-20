<template>
    <div 
      ref="containerRef" 
      data-wrapper="ziko-wrapper"
      data-engine="ziko.js"
      style="display: contents;"
    >
      <!-- Use a conditional rendering to prevent direct rendering -->
      <template v-if="false">
        <slot></slot>
      </template>
    </div>
  </template>
  
  <script>
  import { UIElement"ziko";
  
  export default {
    mounted() {
      const Wrapper = this.$refs.containerRef;
      if (Wrapper) {
        __Ziko__.__Config__.setDefault({ render: false });
        Wrapper.innerHTML = "";
  
        const children = this.$slots.default?.();
        if (children) {
          children.forEach(child => {
            const { type, props } = child;
            const ZikoUI = type(props);
            if (ZikoUI instanceof UIElementr.append(ZikoUI.element); 
            else throw Error("Invalid child: Expected a UIElement
          });
        }
      }
    }
  };
  </script>
  
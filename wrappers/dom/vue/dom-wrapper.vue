<template>
    <div 
      ref="containerRef" 
      :data-wrapper="wrapper"
      :data-engine="engine"
      style="display: contents;"
    >
      <!-- Use a conditional rendering to prevent direct rendering -->
      <template v-if="false">
        <slot></slot>
      </template>
    </div>
  </template>
  
  <script>  
  export default {
    props: {
      wrapper: {
        type: String,
        required: true,
        default: 'ziko-wrapper'
      },
      engine: {
        type: String,
        required: true,
        default: 'ziko.js'
      }
    },
    mounted() {
      const Wrapper = this.$refs.containerRef;
      if (Wrapper) {
        __Ziko__.__Config__.setDefault({ render: false });
        Wrapper.innerHTML = "";
  
        const children = this.$slots.default?.();
        if (children) {
          children.forEach(child => {
            const { type, props } = child;
            const UI = type(props);
            if (UI instanceof HTMLElement) Wrapper.append(UI); 
            else throw Error("Invalid child: Expected a HTMLElement.");
          });
        }
      }
    }
  };
  </script>
  
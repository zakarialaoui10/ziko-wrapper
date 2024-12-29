<template>
  <div 
    ref="containerRef" 
    v-bind="{ 'data-wrapper': wrapper, 'data-engine': engine }"
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
      required: false,
    },
    engine: {
      type: String,
      required: false,
    }
  },
  mounted() {
    const Wrapper = this.$refs.containerRef;
    if (Wrapper) {
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

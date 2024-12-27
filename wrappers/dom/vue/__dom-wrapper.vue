<template>
    <div 
      ref="containerRef" 
      :data-wrapper="wrapper"
      :data-engine="engine"
      style="display: contents;"
    >
    </div>
</template>
<script>
  export default {
    props: {
      ui: {
        type: [Function, Array],
        required: true,         
        default: null          
      },
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
    const Wrapper = this.$refs.containerRef
    if (Wrapper) {
      Wrapper.innerHTML = "";
      if(this.ui instanceof HTMLElement) Wrapper.appendChild(this.ui);
      else if(this.ui instanceof Array) this.ui.forEach(item=> Wrapper.appendChild(item))
    }
  }
  };
</script>
<template>
    <div 
      ref="containerRef" 
      data-wrapper="ziko-wrapper"
      style="display: contents;"
    ></div>
</template>
<script>
  export default {
    props: {
      ui: Function
    },
    mounted() {
      if (this.$refs.containerRef && this.ui) {
        this.$refs.containerRef.innerHTML = "";
        this.$refs.containerRef.appendChild(this.ui());
      }
    }
  };
</script>
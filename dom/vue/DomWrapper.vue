<template>
    <section ref="containerRef" data-wrapper="ziko-wrapper"></section>
</template>
<script>
  export default {
    props: {
      ui: Object
    },
    mounted() {
      if (this.$refs.containerRef && this.ui) {
        this.$refs.containerRef.innerHTML = "";
        this.$refs.containerRef.appendChild(this.ui());
      }
    }
  };
</script>
  
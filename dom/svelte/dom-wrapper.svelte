<div 
  bind:this={containerRef} 
  data-wrapper="ziko-wrapper"
  style="display: contents;"
></div>

<script>
  import { onMount } from 'svelte';
  export let ui; 
  
  let containerRef;
  onMount(() => {
    if (containerRef && ui instanceof HTMLElement) {
      containerRef.innerHTML = "";  
      containerRef.appendChild(ui); 
    } else {
      console.warn("UI element is not an instance of HTMLElement.");
    }
  });
</script>

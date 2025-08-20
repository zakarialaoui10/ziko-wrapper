<script>
  import { onMount } from 'svelte';
  import { UIElement } from 'ziko';

  let containerRef;
  export let ui;
  
  __Ziko__.__Config__.setDefault({ render: false });

  onMount(() => {
    if (containerRef && ui) {
      containerRef.innerHTML = "";
      if (ui instanceof UIElement) containerRef.appendChild(ui.element);
      else if (Array.isArray(ui)) ui.forEach(item => containerRef.appendChild(item.element));
      else console.warn("UI element is not an instance of UIElement.");
    }
  });
</script>

<div 
  bind:this={containerRef} 
  data-wrapper= "ziko-wrapper" 
  data-engine= "ziko.js"
  style="display: contents;"
></div>

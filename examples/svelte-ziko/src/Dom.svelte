<script>
  import { onMount } from 'svelte';
  import { ZikoUIElement } from 'ziko';
  
  let containerRef;
  export let ui;
  export let wrapper = 'ziko-wrapper';
  export let engine = 'ziko.js';
  
  __Ziko__.__Config__.setDefault({ render: false });

  onMount(() => {
    if (containerRef && ui) {
      containerRef.innerHTML = "";
      if (ui instanceof ZikoUIElement) {
        containerRef.appendChild(ui.element);
      } else if (Array.isArray(ui)) {
        ui.forEach(item => containerRef.appendChild(item.element));
      }
    }
  });
</script>

<div 
  bind:this={containerRef} 
  data-wrapper={wrapper} 
  data-engine={engine}
  style="display: contents;"
></div>

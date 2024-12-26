<script>
  import { onMount } from 'svelte';
  export let ui; 
  export let wrapper = "ziko-wrapper";
  export let engine = "ziko.js"
  
  let containerRef;
  onMount(() => {
    if(containerRef){
      containerRef.innerHTML = "";  
      if(ui instanceof HTMLElement){
        containerRef.appendChild(ui); 
      }
      else if(ui instanceof Array){
        ui.forEach(item => containerRef.appendChild(item));
      }
      console.warn("UI element is not an instance of HTMLElement.");
    }
  });
</script>

<div 
  bind:this={containerRef} 
  data-wrapper={wrapper}
  data-engine={engine}
  style="display: contents;"
></div>


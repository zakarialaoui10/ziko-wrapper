<div bind:this={containerRef} data-engine="ziko" data-wrapper="ziko-wrapper"></div>

<script>
  import { onMount } from 'svelte';
  import {ZikoUIElement} from "ziko";
  let containerRef;
  __Ziko__.__Config__.setDefault({render:false})
  onMount(() => {
    if (containerRef && ui instanceof ZikoUIElement) {
      containerRef.innerHTML = "";
      containerRef.appendChild(ui.element);
    }
  });
  export let ui;
</script>
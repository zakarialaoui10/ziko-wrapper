<div bind:this={containerRef} data-engine="ziko"></div>

<script>
  let containerRef;

  import { onMount } from 'svelte';

  onMount(() => {
    if (containerRef && ui instanceof ZikoUIElement) {
      containerRef.innerHTML = "";
      containerRef.appendChild(ui.element);
    }
  });
  export let ui;
</script>

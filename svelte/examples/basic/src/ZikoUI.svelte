<script>
    import { onMount } from "svelte";
    import { ZikoUIElement } from "ziko";
    let containerRef;
  
    onMount(() => {
      //globalThis.__ZikoConfig__.setDefault({ render: false });
      if (containerRef && ui instanceof ZikoUIElement) {
        containerRef.innerHTML = "";
        containerRef.appendChild(ui.element);
      }
    });
    export let ui;
    // export let x;
  </script>
  
  <div bind:this={containerRef} data-engine="ziko" />
  
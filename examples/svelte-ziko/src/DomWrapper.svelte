<!-- DomWrapper.svelte -->
<script>
  import { onMount } from "svelte";
  let containerRef;

    export let engine;
    export let wrapper;
    export let children;
    onMount(()=>{
      console.log(children)
    })
</script>
  
<div
    bind:this={containerRef} 
    style="display: contents"
    {...(engine && { 'data-engine': engine })}
    {...(wrapper && { 'data-wrapper': wrapper })}
  >
    {#each Array.isArray(children) ? children : [children] as child}
      <svelte:component this={child.type} {...child.props} />
    {/each}
</div>
  
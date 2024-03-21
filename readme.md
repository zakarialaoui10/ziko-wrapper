## React
 ### Syntaxe 
 ```jsx
  import {text} from "ziko";
   function test(){
    const ui = text("hello").style({
      color:"green"
     }).render(false).onClick(()=>txt.value = " From Zikojs"); 
     return (
      <>
      <ZikoUI ui={ZikoUIElement} />
      </>
     )
  }
  ```
## Vue 
 ```html
 <script setup>
   import {text} from "ziko";
   const ui = text("hello").style({
      color:"green"
    }).render(false).onClick(()=>txt.value = " From Zikojs");
</script>
<template>
  <ZikoUI :ui="ui"/>
</template>

  ```
## Angular 
## Svelte
## Lit 
## Solid 
## Preact 

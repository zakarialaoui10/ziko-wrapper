## React
 ### Syntaxe 
  ```jsx
  import {text} from "ziko";
  import ZikoUI from "ziko-wrapper/react"
   const ui = text("hello world").style({
    color:"green"
    })
  export default function App() {
  return (
    <main>
      <ZikoUI ui={ui} style={style}/>
    </main>
  );
}

  ```
## Vue 
 ```html
   <script setup>
   import {text} from "ziko";
   import ZikoUI from "ziko-wrapper/vue"
   const ui = text("hello world").style({
    color:"green"
    })
</script>
<template>
  <ZikoUI :ui="ui"/>
</template>

  ```
## Angular 
## Svelte
```html
<script>
  import ZikoUI from "ziko-wrapper/svelte";
  import {text} from "ziko";
  const ui = text("hello world").style({
    color:"green"
    })
</script>
<main>
 <ZikoUI ui={ui}/>
</main>


```
## Lit 
## Solid 
## Preact 
# Overview   
This outil aims to embed zikojs elements within various frameworks 
# Install
```shell
 npm install ziko-wrapper
```
# Usage
## React / Next
  ```jsx
  import {text} from "ziko";
  import ZikoUI from "ziko-wrapper/react"
   const ui = text("hello world").style({
    color:"green"
    })
  export default function App() {
  return (
    <main>
      <ZikoUI ui={ui} />
    </main>
  )}
  ```
## Vue / Nuxt
 ```html
<script setup>
import { text } from "ziko";
import ZikoUI from "ziko-wrapper/vue";
const ui = text("hello world").style({
  color: "green",
});
</script>
<template>
  <ZikoUI :ui="ui" />
</template>
  ```
## Angular 
## Svelte
```html
<script>
import ZikoUI from "ziko-wrapper/svelte/ZikoUI.svelte";
import { text } from "ziko";
const ui = text("hello world").style({
  color: "green",
});
</script>
<main>
 <ZikoUI ui={ui}/>
</main>

```
## Lit 
## Solid 
## Preact 

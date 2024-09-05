# Overview

 [**Ziko.js**](https://github.com/zakarialaoui10/ziko.js) is a lightweight UI library designed for dynamic client-side rendering. To make Ziko.js more versatile, I have implemented a wrapper that integrates it with various popular frontend frameworks, including React, Svelte, Preact, Vue, and Astro. This allows developers to leverage Ziko.js’s dynamic elements while maintaining the conventions and features of their chosen framework.

# Install
```shell
 npm install ziko-wrapper
```

# Integration Approaches 
There are two primary ways to integrate Ziko.js with these frameworks:

## SPA Based Frameworks: 
For single-page application (SPA) frameworks like React, Svelte, Vue, and Preact, there is a specific wrapper components that allow you to integrate Ziko.js elements directly within your components. These wrappers manage the initialization and lifecycle of Ziko.js elements, ensuring that they work seamlessly with the framework’s rendering engine. This integration allows Ziko.js elements to respond to framework-specific state changes and interactions, while also enabling framework components to react to events and updates from Ziko.js elements.

## SSR/SSG Frameworks: 
For frameworks like Astro, Next, Nuxt.. which utilize server-side rendering (SSR) and static site generation (SSG), we employ a different approach. Here, we use the useZiko helper to initialize and manage Ziko.js components. This approach leverages client-side hydration to dynamically render Ziko.js elements after the static HTML has been generated.

In this guide, we'll demonstrate how to use Ziko.js with:

|Framework|Approach|
|-|-|
|`React`|Using the ***`ZikoUI`*** component|
|`Svelte`|Using the ***`ZikoUI`*** component|
|`Vue`|Using the ***`ZikoUI`*** component|
|`Preact`|Using the ***`ZikoUI`*** component|
|`Astro`|Using the ***`useZiko`*** helper for client-side hydration|
|`Angular`|Not Supported Yet|
|`Solid`|Not Supported Yet|
|`Lit`|Not Supported Yet|
|`Stencil`|Not Supported Yet|
|`Qwik`|Not Supported Yet|

# Communication Between Ziko.js Elements and Frameworks
Integration with these frameworks allows for seamless, bidirectional communication :
 - Ziko.js to Framework: Ziko.js elements can receive data and configuration from the framework components, allowing them to adapt based on properties or attributes set by the framework.

 - Framework to Ziko.js: Framework Components can be influenced by Ziko.js elemnts through event handlers or state updates, ensuring that interactions and changes in the framework’s components are reflected in the Ziko.js elements.

# Usage
## React Integration

**React** uses a virtual DOM and client-side rendering. The Ziko.js wrapper for React integrates Ziko.js elements by utilizing React's component lifecycle.

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
## Vue Integration :

**Vue** uses a reactive data model and a virtual DOM for client-side rendering. The Ziko.js wrapper for Vue allows you to integrate Ziko.js elemnts into your Vue application efficiently.
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
 Not Implemented yet
## Svelte
**Svelte** compiles components into highly optimized JavaScript, which ensures efficient client-side performance. The Ziko.js wrapper for Svelte leverages Svelte’s lifecycle functions to initialize and render Ziko.js components effectively.

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
## Preact Integration

## Astro Integration

**Astro** combines static site generation (SSG) with client-side functionality. By default, Astro generates static HTML files and uses hydration directives like `client:load` for dynamic rendering.

- **Step 1 :** Declare a Ziko.js Element using the `useZiko` helper :
```js
// ZikoComponent.js
import { useZiko } from "ziko-wrapper/astro";
import { text } from "ziko"
export default function UI({text1 = "Hello from zikojs"}){
    useZiko(
        text(text1),
    )
}
```
- **Step 2 :** Wrap the Ziko.js element into an Astro component using the `client:load` directive to hydrate it on the client side.
```jsx
---
// ZikoComponent.astro
import ZikoComponent from "./ZikoComponent.js"
---
<div data-engine="ziko.js"></div>
<ZikoComponent client:load text2={" Hello World !"}/>
```

## Lit 
## Solid 


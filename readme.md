# Overview

[**Ziko.js**](https://github.com/zakarialaoui10/ziko.js) is a lightweight UI library designed for dynamic client-side rendering. To make Ziko.js more versatile, I have implemented a wrapper that integrates it with various popular frontend frameworks, including React, Svelte, Preact, Vue, and Astro. This allows developers to leverage Ziko.js’s dynamic elements while maintaining the conventions and features of their chosen framework.

# Install
```shell
 npm install ziko-wrapper
```

<!-- # Content 
 - [Integration](#integration)
   - [React](#react-integration)
   - [Next](#next-integration)
   - [Vue](#vue-integration)
   - [Nuxt](#nuxt-integration)
   - [Svelte](#svelte-integration)
   - [Preact](#preact-integration)
   - [Astro](#astro-integration)
   - [Angluar](#angular-integration)
   - [Qwik](#qwik-integration)
   - [Quasar](#quasar-integration)
   - [Lit](#lit-integration)
   - [Solid](#solid-integration)
   - [Stencil](#stencil-integration)
   - [Ember](#ember-integration) -->

# Integration Approaches 
There are two primary ways to integrate Ziko.js with these frameworks:

## SPA Based Frameworks: 
For single-page application (SPA) frameworks like React, Svelte, Vue, and Preact, there is a specific wrapper components that allow you to integrate Ziko.js elements directly within your components. These wrappers manage the initialization and lifecycle of Ziko.js elements, ensuring that they work seamlessly with the framework’s rendering engine. This integration allows Ziko.js elements to respond to framework-specific state changes and interactions, while also enabling framework components to react to events and updates from Ziko.js elements.

## SSR/SSG Frameworks: 
For frameworks like Astro which utilize server-side rendering (SSR) and static site generation (SSG), There is a different approach. You have to use the useZiko helper to initialize and manage Ziko.js components. This approach leverages client-side hydration to dynamically render Ziko.js elements after the static HTML has been generated.

In this guide, we'll demonstrate how to use Ziko.js with:

|Framework|Approach|Remark|
|-|-|-|
|[React](#react-integration)|Using the ***`ZikoUI`*** component|---------------------------------------|
|[Next](#next-integration)|Using the ***`ZikoUI`*** component|Requires the `use client` directive|
|[Svelte](#svelte-integration)|Using the ***`ZikoUI`*** component|---------------------------------------|
|[Vue](#vue-integration)|Using the ***`ZikoUI`*** component|---------------------------------------|
|[Preact](#preact-integration)|Using the ***`ZikoUI`*** component|---------------------------------------|
|[Astro](#astro-integration)|Using the ***`useZiko`*** helper for client-side hydration|Requires the `client:load` directive|
|[Angular](#angular-integration)|Not Supported Yet|
|[Solid](#solid-integration)|Not Supported Yet|
|[Lit](#lit-integration)|Not Supported Yet|
|[Stencil](#stencil-integration)|Not Supported Yet|
|[Qwik](#qwik-integration)|Not Supported Yet|
|[Quasar](#quasar-integration)|Not Supported Yet|
|[Meteor](#meteor-integration)|Not Supported Yet|
|[Ember](#ember-integration)|Not Supported Yet|
|[Polymer](#polymer-integration)|Not Supported Yet|
|[Backbone](#backbone-integration)|Not Supported Yet|
|[Whatsup](#whatsup-integration)|Not Supported Yet|
|[Seule](#seule-integration)|Not Supported Yet|
|[Inferno](#inferno-integration)|Not Supported Yet|

# Communication Between Ziko.js Elements and Frameworks
Integration with these frameworks allows for seamless, bidirectional communication :
 - Ziko.js to Framework: Ziko.js elements can receive data and configuration from the framework components, allowing them to adapt based on properties or attributes set by the framework.

 - Framework to Ziko.js: Framework Components can be influenced by Ziko.js elemnts through event handlers or state updates, ensuring that interactions and changes in the framework’s components are reflected in the Ziko.js elements.

# Integration
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
## Next Integration : 
**Next.js**, by default, uses server-side rendering (SSR), which can be problematic for libraries like zikojs that depend on browser APIs. To ensure proper integration of zikojs with Next.js, you must use the "use client" directive. This directive forces Next.js to render the component only on the client side, bypassing SSR where it would otherwise fail.

Here's how you can integrate zikojs with Next.js:

Client-Side Rendering with "use client": Next.js pages are rendered server-side by default, so it's necessary to mark the components that use browser-specific libraries, like zikojs, to render only on the client.

**Example :**
```js
"use client"; 
import { text } from "ziko";
import ZikoUI from "ziko-wrapper/react";
const ui = text("hello world").style({
  color: "green",
});
export default function ZikoClientComponent() {
  return (
      <ZikoUI ui={ui} />
  );
}

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
To integrate zikojs with **Preact**, you can use the ziko-wrapper package to seamlessly wrap ziko elements inside Preact components. Below is an example of how to create a simple component with zikojs, where a text element is styled and rendered using the Preact wrapper.

The ZikoUI component takes the ziko element as a prop, allowing you to manage it in a Preact-friendly way.

Here's how you can set up the integration :

```jsx
import { text } from 'ziko';
import ZikoUI from 'ziko-wrapper/preact';
const ui = text('hello world').style({
  color: 'green',
});
export default function App() {
  return <ZikoUI ui={ui} />;
}
```
To wrap a zikojs element inside a Preact component and then use this component within an Astro component, you need to enable compatibility mode by setting `compat` to `true` in your Astro configuration:
```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact'
/* Other Imports */
export default defineConfig({
  /* ... Config */
  integrations: [
    preact({
      compat : true // Enable Preact compatibility mode
    })
    /* Other Integrations */
    ],
})
```

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
## Solid 
```jsx
import ZikoUI from 'ziko-wrapper/solid';
import Ziko, { text } from 'ziko';
let ui = text('Hello Solid from Zikojs').style({ 
  color: 'red'
   });
export default function App() {
  return <ZikoUI ui={ui} />;
}
```
## Lit 



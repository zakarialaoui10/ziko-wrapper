# Overview

[**Ziko.js**](https://github.com/zakarialaoui10/ziko.js) is a lightweight UI library focused on dynamic client-side rendering. 
To extend its compatibility, **Ziko-wrapper** enables seamless integration of Ziko.js with popular frontend frameworks such as React, Svelte, Preact, Vue, and Astro. This allows developers to utilize Ziko.js's dynamic components while preserving the structure and functionality of their preferred framework.k.

# Install
```shell
 npm install ziko-wrapper
```

# Integration Approaches 
## SPA Frameworks/Libraries
### JSX-Based

 For JSX-based libraries such as React, Preact and Solid, Ziko-wrapper provides a seamless way to integrate Ziko.js components directly into your JSX code. This allows you to define Ziko.js components within your React app and render them dynamically using familiar JSX syntax.

 #### Example : 

 ```jsx
 import ZikoWrapper from 'ziko-wrapper/react'; // For React
//  import ZikoWrapper from 'ziko-wrapper/preact'; // For Preact
//  import ZikoWrapper from 'ziko-wrapper/solid'; // For Solid
 import { Collapsible } from 'ziko';

 let FAQ = ({ qst, res }) => Collapsible(qst, res);
 export default function App() {
  return (
    <ZikoWrapper>
      <FAQ qst="What is zikojs?" res="Zikojs is a javascript library with a focus on making coding effortless." />
    </ZikoWrapper>
  );
}

 ```
 ### Template-Based Framework/libraries

 For template-based frameworks like Svelte, Vue, and Astro, Ziko-wrapper makes it easy to integrate Ziko.js's dynamic UI components within your framework’s declarative syntax. You can create Ziko.js UI elements and bind them to your template for seamless integration.

 #### Example

 ##### Svelte 
 ```html
 <script>
  import ZikoWrapper from "ziko-wrapper/svelte/ZikoWrapper.svelte";
  import { text } from "ziko";
  
  const ui = () => text("hello world").style({
    color: "green",
  });
</script>

<ZikoWrapper ui={ui()} />
 ```
 ##### Vue
 ```html
 <script setup>
 import { text } from "ziko";
 import ZikoUI from "ziko-wrapper/vue";
 const ui=()=>text("hello world").style({
    color: "green",
    });
 </script>
<template>
 <ZikoUI :ui="ui()" />
</template>
 ```

## SSR Frameworks 
### Next 

### Astro 
In Astro, you can enable client-side hydration for Ziko.js components using the React, Preact, or Solid wrappers. This allows for optimized loading and interactive features in your Astro applications.

#### Example using preact : 
- Declaration : 
```jsx
// Component.jsx
import { text } from 'ziko';
import ZikoWrapper from 'ziko-wrapper/preact';
const Text=(txt = 'hello world')=> text(txt).style({
  color: 'green',
});
export default function App() {
  return (
    <ZikoWrapper>
      <Text />
      <Text />
    </ZikoWrapper>
  );
}
```
- Integration : 
```jsx
---
import Component from "./Component/jsx"
---
<Component client:load/>
```
## Minimal Frameworks 
<!-- Alpine -->

## Mobile Framworks 

### React Native


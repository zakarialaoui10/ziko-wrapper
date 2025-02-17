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
import { h1 } from 'ziko';
let Component = ({msg , color}) => h1(msg).style({color})
export default function App() {
  return (
    <ZikoWrapper>
      <Component 
        msg = "Hello from zikojs "
        color = "coral"
      />
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
  import { ZikoWrapper } from "ziko-wrapper/svelte";
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
 import { ZikoWrapper } from "ziko-wrapper/vue";
 const ui=()=>text("hello world").style({
    color: "green",
    });
 </script>
<template>
 <ZikoWrapper :ui="ui()" />
</template>
 ```

## SSR Frameworks 
### Next 

### Astro 

#### Plugin setup 
```js
import { defineConfig } from 'astro/config';
import ziko from "ziko-wrapper/astro"
export default defineConfig({
    integrations : [
        ziko()
    ],
});
```

#### Component Declaration 
```js
// Component.js
import {h1} from "ziko"
export default ({msg, color})=>{
  return h1(msg).style({color})
}
```
#### Component Integration : 

```jsx
---
 import Component from "./component.js"
---
<Component 
  msg = "hello world from zikojs"
  color = "coral"
  client:only="ziko" 
/>
```


## Minimal Frameworks 
<!-- Alpine -->

## Mobile Framworks 

### React Native


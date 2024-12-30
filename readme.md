> [!NOTE]  
> This project is part of the [ZikoJS](https://github.com/zakarialaoui10/ziko.js) ecosystem.

# Ziko-wrapper 
Ziko-Wrapper is a tool that facilitates the rendering of ZikoJS elements within other frameworks and the embedding of framework-specific components into ZikoJS, enabling seamless integration and interoperability between different ecosystems.

## Current Support Table for Ziko-Wrapper

|Framework/Library|Integrate ZikoJS|Get Integrated in ZikoJS|Remark|
|-|-|-|-|
|React|✅ Supported|✅ Supported|
|Svelte|✅ Supported|✅ Supported|
|Solid|✅ Supported|✅ Supported|
|Vue|✅ Supported|✅ Supported|
|Preact|✅ Supported|✅ Supported|
|Astro|✅ Supported|❌ Not Supported|
|Next|✅ Supported|❌ Not Supported|
|Remix|✅ Supported|❌ Not Supported|
|SvelteKit|✅ Supported|❌ Not Supported|
|React Native|✅ Supported|❌ Not Supported|


## Integrate Zikojs inside Other Environment

### UI Decalaration
```js
// HelloFromZiko.js
import {h1} from "ziko"
export default HelloFromZiko=({color})=>{
    return h1(`Hello World, this is a Zikojs component.`).style({
        color
    })
}
```

### Use 
#### JSX Based

```jsx
import ZikoWrapper from "ziko-wrapper/react"
// import ZikoWrapper from "ziko-wrapper/solid"
// import ZikoWrapper from "ziko-wrapper/preact"
import HelloFromZiko from "./HelloFromZiko.js"
export default function App(){
    return (
        <ZikoWrapper>
           <HelloFromZiko 
              color="blue"  
            />
        </ZikoWrapper>
    )
 }
```

#### Vue
```xml
<script>
import ZikoWrapper from "ziko-wrapper/vue"
import HelloFromZiko from "./HelloFromZiko.js"
</script>
<template>
    <ZikoWrapper>
           <HelloFromZiko 
              color="green"  
            />
    </ZikoWrapper>
</template>
``` 
#### Svelte 
```jsx
---
import ZikoWrapper from "ziko-wrapper/svelte";
import HelloFromZiko from "./HelloFromZiko.js"
---
<ZikoWrapper ui={HelloFromZiko({color:"orange"})}/>
```
#### Astro 
```jsx
---
 import HelloFromZiko from "./HelloFromZiko.js"
---
<HelloFromZiko 
  color="orange"
  client:only="ziko" 
/>
```
## Integrate Other Framewrok components inside Zikojs  

### React 
### Solid 
### Svelte 
### Vue 
### Preact 

# Supports

# Licence
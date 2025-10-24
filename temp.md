## Wrap zikojs element inside {X} framework 

## Wrap {X} framework component inside Zikojs 

### React 
```jsx
 // Hello.jsx
 export function Hello({name}){
    return <p> Hello {} , Now you can wrap </p>
 }
```
```js 
 import {ReactWrapper} from "ziko-wrapper/react"
 import {Hello} from "./Hello.jsx" 
 ReactWrapper(Hello, {msg : "Hello From React Wrapper , Now You "})
```
### Svelte 


astro hoc 
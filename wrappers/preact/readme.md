# Ziko-Wrapper 

Ziko-Wrapper is a tool that facilitates the rendering of ZikoJS elements within other frameworks and the embedding of framework-specific components into ZikoJS, enabling seamless integration and interoperability between different ecosystems.

## Features 

## Demos 

- Ziko In Preact : [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/fork/github/zakarialaoui10/ziko-wrapper/tree/main/demos/ziko-in-preact)


## Use Zikojs Inside Preact 
### Declaration : 
```js
import {Flex, h2, p} from "ziko"
export default function Comp({color = "darkblue"}){
    return Flex(
        h2("Wrap Zikojs Element Inside Preact App"),
        p("This is a Zikojs Element Wrapped inside Preact Wrapper using Ziko-wrapper")
        .style({
            color
        })
        .onClick(()=>console.log("Click ..."))
    )
}
```

### Rendering :
```jsx
import Comp from "./Comp.js"
export default function App(){
    return(
        <div>
            <ZikoWrapper>
                <Comp color = "darkblue" />
            </ZikoWrapper>
        </div>
    )
}
``` 

## Use Preact Component inside Zikojs App
You can also embed Preact components inside a ZikoJS-based UI using the `zikofy` utility.

```jsx
// MyPreactComp.jsx
export default function MyPreactComp({ msg }) {
    return <button onClick={() => alert(msg)}>{msg}</button>;
}
```

```js
import { Flex, h1 } from "ziko";
import { zikofy } from "ziko-wrapper/preact";
import MyPreactComp from "./MyPreactComp.jsx";

const WrappedPreact = zikofy(MyPreactComp);

export const App = () => Flex(
    h1("ZikoJS App with Preact Component"),
    WrappedPreact({ msg: "Hello from Preact!" })
);

```



# Licence 
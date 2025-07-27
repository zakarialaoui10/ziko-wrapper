import {p, Flex} from "ziko"
import { ZikoWrapper } from "ziko-wrapper/preact";
import {Canvas3D, box} from "p5.wrapper/ziko"

const Sketch = () => Canvas3D(
    box(10, 0, 0, 100, 100, 100)
    )
    .useOrbitControls()
    .style({
      outline : "3px darkblue solid",
      cursor : "grab"
    })
const Consigne = ({msg}) => p(msg);

const Container = ({color}, ...children) => {
  return Flex(
    ...children
  ).vertical(-1, "space-around").size("80%").style({
    padding : "2em"
  })
}

export const App = () =>{
  return(
    <>
      <h1>Embed Zikojs Inside Preact App</h1>
      <p>The sketch below is a P5 canvas embedded via ZikoJS inside a Preact component.</p>
      <ZikoWrapper>
        <Consigne msg="Try orbit controls with your Pointer/Mouse"/>
        <Container>
         <Sketch />
        </Container>
      </ZikoWrapper>
      <p>
        Like the demo? Show support by starring the libraries behind it.<br/>
        <a href="https://github.com/preactjs/preact">Preact</a><br/>
        <a href="https://github.com/zakarialaoui10/zikojs">Zikojs</a><br/>
        <a href="https://github.com/zakarialaoui10/ziko-wrapper">Ziko-Wrapper</a><br/>
        <a href="https://github.com/zakarialaoui10/p5.wrapper">P5.wrapper</a><br/>
        <a href="https://github.com/vitejs/vite">Vite</a><br/>
      </p>
    </>
  )
}
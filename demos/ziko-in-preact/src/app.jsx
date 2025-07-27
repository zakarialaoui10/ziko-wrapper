import {p, Flex} from "ziko"
import { ZikoWrapper } from "ziko-wrapper/preact";
import {Canvas3D, box} from "p5.wrapper/ziko"

const Sketch = () => Canvas3D(
    box(10, 0, 0, 100, 100, 100)
    )
    .useOrbitControls()
    .style({
      outline : "3px darkblue solid"
    })
const Consigne = ({msg}) => p(msg);

const Container = ({color}, ...children) => {
  return Flex(
    ...children
  ).vertical(0, "space-around").size("80%").style({
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
    </>
  )
}
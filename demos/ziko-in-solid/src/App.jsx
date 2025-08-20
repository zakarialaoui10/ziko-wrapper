import { tags } from "ziko"
import { ZikoWrapper } from "ziko-wrapper/solid"

const {p, h1, section} = tags

// const Container = ({children}) => p({}, ...children.map(n=>n()))
const Heading = ({msg , color}={}) => h1(msg).style({color })
const Ex = ({color, children}) => {
  return section(...children.map(n=>n())).style({color})
}
const App = () =>{
  return(
    <ZikoWrapper engine="ll">
      {/* <Container> */}
      <Ex color="red">
        <Heading msg="hello " color = 'cyan'/>
        <Heading msg="hello world"/>
      </Ex>
      {/* </Container> */}
    </ZikoWrapper>
  )
}

export default App
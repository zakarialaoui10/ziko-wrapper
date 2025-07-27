import {h1, p} from "ziko"
import { ZikoWrapper } from "ziko-wrapper/react"

const Heading = ({msg}) => h1(msg)

const Ex = ({color}, ...children) => {
  return p(children[0]).style({color})
}

const App = () =>{
  return(
    <ZikoWrapper>
      <Ex color="red">
          <Heading msg="hello world"/>
          <Heading msg="hello world"/>
      </Ex>
    </ZikoWrapper>
  )
}

export default App
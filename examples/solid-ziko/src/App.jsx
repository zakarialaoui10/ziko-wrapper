import {h1, p} from "ziko"
import { ZikoWrapper } from "ziko-wrapper/solid"

const Heading = ({msg, color = "black"}={}) => h1(msg).style({color})
const Ex = ({color}, ...children) => {
  return p(...children).style({color})
  // return p(children[0], children[1].style({background : "gold"})).style({color})
}
const App = () =>{
  return(
    <ZikoWrapper engine="ll">
      {/* <Ex color="red"> */}
        <Heading msg="hello world" color="red"/>
        <Heading msg="hello world"/>
      {/* </Ex> */}
    </ZikoWrapper>
  )
}

export default App
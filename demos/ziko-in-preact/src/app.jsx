import {h1, p} from "ziko"
import { ZikoWrapper } from "ziko-wrapper/preact"

const Heading = ({msg}) => h1(msg)

const Ex = ({color}, ...children) => {
  return p(children[0], children[1].style({background : "gold"})).style({color})
}

export const App = () =>{
  return(
    <ZikoWrapper>
      <Ex>
        <Heading msg="hello world"/>
        <Heading msg="hello world"/>
      </Ex>
    </ZikoWrapper>
  )
}
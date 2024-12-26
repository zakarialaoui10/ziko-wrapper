import {h1} from "ziko"
import { ZikoWrapper } from "ziko-wrapper/preact"

const Heading = ({msg}) => h1(msg)

export const App = () =>{
  return(
    <ZikoWrapper>
      <Heading msg="hello world"/>
      <Heading msg="hello world"/>
    </ZikoWrapper>
  )
}
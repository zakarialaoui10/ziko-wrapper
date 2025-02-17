import {h1} from "ziko"
import { ZikoWrapper } from "ziko-wrapper/react"

const Heading = ({msg}) => h1(msg)

const App = () =>{
  return(
    <ZikoWrapper>
      <Heading msg="hello world"/>
    </ZikoWrapper>
  )
}

export default App
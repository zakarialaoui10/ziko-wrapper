import {h1} from "ziko"
import { ZikoWrapper } from "ziko-wrapper/solid"

const Heading = ({msg}) => h1(msg)

const App = () =>{
  return(
    <ZikoWrapper engine="ll">
      <Heading msg="hello world"/>
    </ZikoWrapper>
  )
}

export default App
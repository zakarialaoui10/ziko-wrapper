import { useState } from "react";
import ZikoUI from "ziko-wrapper/react";
import { Flex,input,text } from "ziko";
export default function App() {
    // const [txt,setTxt] = useState("text");
    // const handleText=newTxt=>{
    //   setTxt(newTxt);
    //   e.target.parent.focus();
    // };
    const ui=Flex(
      //input().onInput(e=>handleText(e.value))
      text(1)
    )
    return (
      <main>
       <ZikoUI ui={ui}/>
       <div>ll</div>
      </main>
    );
  }
  
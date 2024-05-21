import ZikoUI from "ziko-wrapper/react";
import { Flex, p, h2, input } from "ziko";
import { useState } from "react";

export default function App() {
  const [txt, setTxt] = useState("start");

  const handleTxtChange = (newValue) => {
    setTxt(newValue);
  };

  const ui = Flex(
    input().onInput((e) => {
      handleTxtChange(e.value);
      e.target.parent.focus();
    }),
    h2("Hello world").onClick((e) =>
      e.target.parent.append(
        p("Dabrto 3liha wahd chahrin dyal ichhar \n ghi desactiviw fb").style({
          color: "red",
          fontSize: "1.3rem",
        }),
      ),
    ),
  )
    .vertical(0, "space-around")
    .size("80%", "auto")
    .style({
      color: "darkblue",
      padding: "10px",
      margin: "auto",
      border: "1px darkblue solid",
    });

  return (
    <main>
      <div>{txt}</div>
      <ZikoUI ui={ui}/>
    </main>
  );
}

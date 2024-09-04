import { useEffect } from "react";
import { Flex, p, h2  } from "ziko";
import ZikoUI from "ziko-wrapper/react"
const style={
  background:"red"
}
const ui = Flex(
  h2("Hello world").onClick((e) => 
    e.target.parent.append(
      p("Dabrto 3liha wahd chahrin dyal ichhar \n ghi desactiviw ").style({
        color: "cyan",
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

export default function App() {
  return (
    <main>
      <div>jj</div>
      <ZikoUI ui={ui} style={style}/>
      <div></div>
    </main>
  );
}

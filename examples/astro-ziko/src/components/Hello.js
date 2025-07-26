import { h1 } from "ziko"

export default function Hello({msg = "Hello From Zikojs", color = "red"}={}){
    console.log({color})
    return h1(msg).style({color}).onClick(()=>console.log("Hello From Client"))
}
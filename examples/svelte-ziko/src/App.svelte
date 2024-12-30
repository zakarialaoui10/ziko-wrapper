<script>
  import {h1} from "ziko"
  import { ZikoWrapper } from "ziko-wrapper/svelte"
  // import DomWrapper from "./DomWrapper.svelte";
  const Heading = ({msg}) => h1(msg)
  // const DomComp = () => {
  //   const ele = document.createElement("h3")
  //   ele.innerText = "Hello from dom "
  //   return ele
  // }
</script>

<ZikoWrapper ui={[
  Heading({msg : "Hello from zikojs"}),
  Heading({msg : "Bye "})
  ]} 
/>

<ZikoWrapper ui={Heading({msg : "Other"})}/>

<!-- <DomWrapper engine="dom">
  <DomComp />
  <DomComp />
</DomWrapper> -->


<script>
  import {h1} from "ziko"
  import { ZikoWrapper } from "ziko-wrapper/svelte"
  const Heading = ({msg}) => h1(msg)
</script>

<ZikoWrapper ui={[
  Heading({msg : "Hello from zikojs"}),
  Heading({msg : "Bye "})
  ]} 
/>

<ZikoWrapper ui={Heading({msg : "Other"})}/>



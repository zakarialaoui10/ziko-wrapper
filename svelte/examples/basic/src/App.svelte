<script>
  import ZikoUI from "./ZikoUI.svelte";
  import { text } from "ziko";
  let ui = text("zikojs");
</script>

<main>
 <ZikoUI {ui}/>
</main>


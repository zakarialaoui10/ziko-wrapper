import { getPathMask } from "./helpers.js"
const layout = (curentFileName,ui) => `
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
  />
  <style></style>
  <div id="wrapper"></div>
  <script src="${getPathMask(curentFileName)}node_modules/ziko/dist/ziko.js"">
  </script>
  <script>
  (function() {
    document.addEventListener("DOMContentLoaded", function () {
      __Ziko__.ExtractAll();
      function fromZikoToRn(message) {
        window.ReactNativeWebView.postMessage(message);
      }
      function fromRnToZiko(message) {
        document.body.innerText = "Expired"
      }
      ${eval(ui)()}
      setTimeout(()=>fromZikoToRn("hi"),2000);
    });
  })();
  </script>
`
export{
    layout
}
import { WebView} from 'react-native-webview';
// import { useEffect, useRef} from "React"
const defaultUI = `
    Flex(
      text("Hello World")
    ).style({
      background:"gold",
      color:"darkblue",
    }).vertical(0,0)
`;

const html = (ui) => `
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
  />
  <style></style>
  <div id="wrapper"></div>
  <script src="https://cdn.jsdelivr.net/npm/ziko@latest/dist/ziko.js" data-name="bundled">
  </script>
  <script>
  (function() {
    document.addEventListener("DOMContentLoaded", function () {
      Ziko.ExtractAll();
      function fromZikoToRn(message) {
        window.ReactNativeWebView.postMessage(message);
      }
      function fromRnToZiko(message) {
        document.body.innerText = "Expired"
      }
      ${ui}
      setTimeout(()=>fromZikoToRn("hi"),2000);
    });
  })();
  </script>
`;

export default function ZikoWrapper({ 
  ui = defaultUI, 
  style , 
  onMessage = event => console.log(event) 
  }){
    // const webviewRef = useRef(null);
  // const handleMessage = (event) => {
  //   Alert.alert('Message from WebView', event.nativeEvent.data);
  // };
  // const sendMessageToWebView = (message) => {
  //   if (webviewRef.current) {
  //     webviewRef.current.injectJavaScript(`
  //       fromRnToZiko('${message}');
  //     `);
  //   }
  // };
  // useEffect(() => {
  //   sendMessageToWebView('Hello from React Native');
  // }, []);
  return (
    <WebView
      style={style} 
      originWhitelist={['*']}
      source={{ html: html(ui) }} 
      javaScriptEnabled={true}
      onError={(syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        console.warn('WebView error: ', nativeEvent);
      }}
      onMessage={onMessage}
      // onMessage={(event) => console.log(event.nativeEvent.data)}
    />
  );
}

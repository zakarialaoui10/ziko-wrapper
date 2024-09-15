import { WebView} from 'react-native-webview';
import { layout } from './layout.js';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const defaultUI = `
    Flex(
      text("Hello World")
    ).style({
      background:"gold",
      color:"darkblue",
    }).vertical(0,0)
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
      // source={{ html: html(ui) }} 
      source={{html : layout(__filename, ui)}}
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

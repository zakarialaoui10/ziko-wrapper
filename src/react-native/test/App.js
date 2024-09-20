import Constants from 'expo-constants';
import { StyleSheet,Text } from 'react-native';
import ZikoWrapper from './ZikoWrapper';
import { p } from "ziko"
let ui = p("Hiiiiii").style({
  fontSize:"50px",
  width:"200px",
  height:"200px",
  background:"red"
})

let func = () => p


export default function App() {
  return (
    <>
    <Text>Hi</Text>
    <ZikoWrapper ui={func.toString()}/>
    <ZikoWrapper />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
});

// "react-native-webview": "13.8.6"
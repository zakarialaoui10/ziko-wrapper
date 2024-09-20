import ZikoWrapper from "./ziko-wrapper/index.js";
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Platform, // To detect platform
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ZikoWrapper style={styles.wrapper} />
        <ZikoWrapper style={styles.wrapper} />
        <ZikoWrapper style={styles.wrapper} />
        <ZikoWrapper style={styles.wrapper} />
        <ZikoWrapper style={styles.wrapper} />
        <ZikoWrapper style={styles.wrapper} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,  // Fallback for iOS
  },
  scrollView: {
    marginHorizontal: 20,
  },
  wrapper: {
    height: 300, 
    marginBottom: 20,
  },
});

export default App;

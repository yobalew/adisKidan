import { StyleSheet, Text, View } from 'react-native';
import  HomeScreen from './home'

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
      <Text>Text from App.js file</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

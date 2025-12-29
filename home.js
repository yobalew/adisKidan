import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>I have changed the home screen text</Text>
      <Text>I have changed the home screen text</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f9e34ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

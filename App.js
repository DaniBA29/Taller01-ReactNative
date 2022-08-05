import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.welcome, {flex: 4}, {backgroundColor: 'pink'}]}>Hello, World! xD</Text>
      <Text style={[styles.welcome, {flex: 1}, {backgroundColor: 'red'}]}>Hello, World! xD</Text>
      <Text style={[styles.welcome, {flex: 2}, {backgroundColor: 'green'}]}>Hello, World! xD</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'space-around',
   alignItems: 'center',
   backgroundColor: 'orange',
  },
  welcome: {
   fontSize: 20,
   //textAlign: 'center',
   margin: 10,
  },
  });

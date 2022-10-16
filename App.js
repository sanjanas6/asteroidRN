import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AsteroidData from './screens/AsteroidData';

const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: "#C0C0C0",
            },
            headerTintColor: '#0E2038',
            contentStyle: {}}}>
      <stack.Screen name="Home" component={HomeScreen} options={{
            title: "Asteroid App",
            contentStyle: {backgroundColor: "#DAD5CF"}
          }} />
      <stack.Screen name="Detail" component={AsteroidData} options={{
            title: "Asteroid Information",
            contentStyle: {backgroundColor: "#DAD5CF"}
          }} />
    </stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

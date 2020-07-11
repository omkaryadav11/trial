
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image } from 'react-native';
import login from './components/login';
import signup from './components/signup';
import home from './components/home';
export default class App extends React.Component {

 
  render() {
    const stack = createStackNavigator();
 
    return (

      <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>

      
        
        <stack.Screen name="login" component={login} />
        <stack.Screen name="signup" component={signup} />
        <stack.Screen name="home" component={home} />
      
        
      
      </stack.Navigator>
    </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
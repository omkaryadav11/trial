
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import firebase from '../config/firebase';

import { StyleSheet, Text, View,Image, Button,TextInput,TouchableOpacity, ActivityIndicator, Alert  } from 'react-native';

export default class login extends React.Component {

  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }
  render(){
    if(this.state.isLoading) {
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
    <View style={styles.container}>
     
      <View style={styles.view1}>
        <Image style={{width:300,height:300}} source={require("../assets/logo.png")} />

        <View style={{flexDirection:"row"}}>
          <TouchableOpacity style={{position:"absolute",bottom:-60,right:70}} onPress={()=>{this.props.navigation.navigate("login")}}>
            <Text style={{color:"yellow",fontWeight:"700",fontSize:20,} } >LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{position:"absolute",bottom:-60,left:65}}>
            <Text style={{color:"yellow",fontWeight:"700",fontSize:20}} >SIGN UP</Text>
          </TouchableOpacity>
        </View>

      </View>


      <View style={styles.view2}>
        <TextInput placeholder="Full name" style={[styles.username,{marginBottom:30}]}
          value={this.state.displayName} 
          onChangeText={(val)=> this.updateInputVal(val, 'displayName')} />
       
        <TextInput placeholder="Email" style={[styles.username,{marginBottom:30}]}
          onChangeText={(val) =>this.updateInputVal(val, 'email')}
            value={this.state.email} />
       
        <TextInput placeholder="Password" style={[styles.username,{marginBottom:30}]}
          onChangeText={(val)=> this.updateInputVal(val,'password')}
            value={this.state.password} 
              maxLength={8}
              secureTextEntry
            />
        <Button title="Sign up" color="black" onPress={()=>this.registerUser()}/>
      </View>


      <StatusBar style="light" />
    </View>
  );
    
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  view1:{
    flex:3,
    backgroundColor:"#000000",
    alignItems:"center",
    justifyContent:"center"
    
  },
  view2:{
    flex:2,
    backgroundColor:"#ffffff",
    alignItems:"center",
    justifyContent:"center"
  },
  username:{
    width:"80%",
    borderWidth:1,
    height:45,
    borderRadius:23,
    padding:5,
    textAlign:"center"
  }
});
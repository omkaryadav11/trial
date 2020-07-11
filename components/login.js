import React, { Component } from 'react'
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1}>
          <Image
            style={{ width: 250, height: 250 }}
            source={require("../assets/logo.png")}
          />

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{ position: "absolute", bottom: -60, right: 70 }}
            >
              <Text
                style={{ color: "yellow", fontWeight: "700", fontSize: 20 }}
              >
                LOGIN
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ position: "absolute", bottom: -60, left: 65 }}
              onPress={() => {
                this.props.navigation.navigate("signup");
              }}
            >
              <Text
                style={{ color: "yellow", fontWeight: "700", fontSize: 20 }}
              >
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.view2}>
          <TextInput
            placeholder="Username"
            style={[styles.username, { marginBottom: 30 }]}
          />
          <TextInput
            placeholder="Password"
            style={[styles.username, { marginBottom: 30 }]}
          />
          <Button
            title="Login in"
            color="black"
            onPress={() => this.props.navigation.navigate("home")}
          />
        </View>

        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  view1: {
    flex: 3,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    flex: 2,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  username: {
    width: "80%",
    borderWidth: 1,
    height: 45,
    borderRadius: 23,
    padding: 5,
    textAlign: "center",
  },
});
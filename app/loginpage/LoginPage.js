import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function LoginPage(props) {
  return (
    <View style={styles.container}>
      <Icon name="map" style={styles.icon}></Icon>
      <View style={styles.teamUserNameRow}>
        <TextInput
          placeholder="Team UserName"
          placeholderTextColor="grey"
          selectionColor="grey"
          style={styles.teamUserName}
        ></TextInput>
      </View>
      <TextInput
        placeholder="Team Password"
        placeholderTextColor="grey"
        secureTextEntry={true}
        selectionColor="rgba(0,0,255,1)"
        style={styles.teamPassword}
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.letsHunt}>Let&#39;s Hunt</Text>
      </TouchableOpacity>
      <Text style={styles.thambV0}>THAMB.V0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    fontSize: 50,
    color: "rgba(128,128,128,1)",
    padding: 50,
    marginBottom: 0,
    marginTop: -10,
    borderColor: "white"
  },
  teamUserName: {
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 70,
    paddingRight: 70,
    margin: 50,
    textAlign: "center",
    borderColor: "white",
    color: "white"
  },
  teamPassword: {
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 70,
    paddingRight: 70,
    margin: 50,
    textAlign: "center",
    borderColor: "white",
    color: "white"
  },
  button: {
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 70,
    paddingRight: 70,
    margin: 10,
    backgroundColor: "grey"
  },
  thambV0: {
    color: "white"
  }
});

export default LoginPage;

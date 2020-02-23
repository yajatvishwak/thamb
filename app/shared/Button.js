import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Button(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.caption}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5,
    alignSelf: "stretch",
    padding: 17,
    marginBottom: 50
  },
  caption: {
    color: "#fff",
    fontSize: 14
  }
});

export default Button;

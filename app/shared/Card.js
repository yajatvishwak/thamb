import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "./Button";

function Card(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>{props.title}</Text>
        <Text style={styles.subtitleStyle}>{props.subtitle}</Text>
      </View>
      <View style={styles.body2}>
        <Text style={styles.bodyText}>{props.body}</Text>
      </View>
      {props.hidden && null}
      {!props.hidden && <Button title="Lodge Answer" onPress={props.onPress} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(17,17,17,1)",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden"
  },
  bodyContent: {
    justifyContent: "center",
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    color: "rgba(255,255,255,1)",
    paddingBottom: 12,
    fontSize: 24
  },
  subtitleStyle: {
    color: "rgba(255,255,255,1)",
    opacity: 0.5,
    fontSize: 14,

    lineHeight: 16
  },
  body2: {
    padding: 16,
    paddingTop: 8
  },
  bodyText: {
    color: "rgba(255,255,255,1)",
    flexWrap: "wrap",
    fontSize: 14,
    lineHeight: 20
  }
});

export default Card;

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function Card(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>Title goes here</Text>
        <Text style={styles.subtitleStyle}>Subtitle here</Text>
      </View>
      <View style={styles.body2}>
        <Text style={styles.bodyText}>
          BuilderX is a screen design tool which codes React Native for you
          which design without boundaries, the code is generated simultaneously.
          Save your designed components as symbol and then simply add it to your
          design next time.Live preview works on real device. Shout out to the
          Expo team to make it happen.
        </Text>
      </View>
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

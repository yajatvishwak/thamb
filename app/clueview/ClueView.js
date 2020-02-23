import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text
} from "react-native";
import Card from "../shared/Card";
import { useRoute } from "@react-navigation/native";

function ClueView(props) {
  const route = useRoute();
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.container}>
        <Card
          hidden
          title={route.params.data.title}
          subtitle={route.params.data.subtitle}
          body={route.params.data.body}
        />
        <TextInput
          placeholder="Start Typing here..."
          maxLength={1500}
          multiline
          numberOfLines={50}
          style={styles.textInput}
        ></TextInput>
        <TouchableOpacity style={styles.button} placeholder="Submit">
          <Text style={styles.submitAnswer}>Submit Answer</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,1)",
    justifyContent: "center",
    alignContent: "center",
    padding: 20
  },

  textInput: {
    borderWidth: 1,
    height: 100,
    marginTop: 150,

    textAlign: "center",
    borderColor: "white",
    color: "white",
    alignSelf: "auto"
  },
  button: {
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 70,
    paddingRight: 70,
    margin: 10,
    backgroundColor: "grey",
    alignSelf: "auto"
  },
  submitAnswer: {
    alignSelf: "center"
  }
});

export default ClueView;

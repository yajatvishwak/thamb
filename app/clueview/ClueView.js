import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text
} from "react-native";
import Card from "../shared/Card";

function ClueView(props) {
  const [enteredText, setenteredText] = useState(null);

  const handlePress = () => {
    props.submitAnswer({
      clueCode: props.subtitle,
      response: enteredText
    });
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.container}>
        <Card
          hidden
          title={props.title}
          subtitle={props.subtitle}
          body={props.body}
        />
        <TextInput
          placeholder="Your Guessed Character here..."
          maxLength={1}
          style={styles.textInput}
          onChangeText={text => setenteredText(text)}
        ></TextInput>
        <TouchableOpacity
          style={styles.button}
          placeholder="Submit"
          onPress={handlePress}
        >
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

import React, { Component, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Card from "../shared/Card";
import QrButton from "../shared/QrButton";

let initialClues = [
  {
    key: 1,
    title: "Random Title",
    subtitle: "#Clue1",
    body:
      "Some random puzzle srthosgnskgishgkomgogknedrgjkodnofgdklrgdgfkndogkdfbsldfgsdfldfbxdfkdfgdfnhsdhgkdfih"
  },
  {
    key: 2,
    title: "Random Title",
    subtitle: "#Clue1",
    body:
      "Some random puzzle srthosgnskgishgkomgogknedrgjkodnofgdklrgdgfkndogkdfbsldfgsdfldfbxdfkdfgdfnhsdhgkdfih"
  }
];

function HomePage(props) {
  const [clues, setClues] = useState(initialClues);

  const onScan = data => {
    setClues(JSON.parse(data));
  };

  const foundClues = clues.map(ele => (
    <Card title={ele.title} subtitle={ele.subtitle} body={ele.body} />
  ));
  //console.log(foundClues);
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <QrButton style={styles.QrButton} />
        <ScrollView style={styles.card}>{foundClues}</ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black",
    flex: 1
  },
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "rgba(17,17,17,1)"
  },
  card: {
    margin: 10
  }
});

export default HomePage;

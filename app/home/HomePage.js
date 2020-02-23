import React, { Component, useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Card from "../shared/Card";
import QrButton from "../shared/QrButton";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

let initialClues = [
  {
    title: "Random Title",
    subtitle: "#Clue1",
    body:
      "Some random puzzle srthosgnskgishgkomgogknedrgjkodnofgdklrgdgfkndogkdfbsldfgsdfldfbxdfkdfgdfnhsdhgkdfih"
  },
  {
    title: "Random Title",
    subtitle: "#Clue1",
    body:
      "Some random puzzle srthosgnskgishgkomgogknedrgjkodnofgdklrgdgfkndogkdfbsldfgsdfldfbxdfkdfgdfnhsdhgkdfih"
  }
];

function HomePage(props) {
  const [clues, setClues] = useState(initialClues);
  const route = useRoute();
  const navigation = useNavigation();
  const data = route.params; // scanned data from user, should add to clues
  console.log(data);
  console.log(clues);
  const onPressHandler = data => {
    navigation.navigate("SubmitAnswer", { data });
  };

  const foundClues = clues.map(ele => (
    <Card
      title={ele.title}
      subtitle={ele.subtitle}
      body={ele.body}
      onPress={() => onPressHandler(ele)}
    />
  ));

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

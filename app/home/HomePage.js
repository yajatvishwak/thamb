import React, { Component, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Card from "../shared/Card";
import QrButton from "../shared/QrButton";
function HomePage(props) {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <QrButton style={styles.QrButton} />
        <ScrollView style={styles.card}>
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
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
  QrButton: {
    alignSelf: "stretch",
    padding: 50,
    marginBottom: 50
  },
  card: {
    margin: 10
  }
});

export default HomePage;

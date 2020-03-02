import React, { useState } from "react";
import { TextInput, Text, View, TouchableOpacity, Modal } from "react-native";
import QrScanner from "./QrScanner";

const Settings = props => {
  const [urlString, seturlString] = useState("");
  const [qrmodal, setqrmodal] = useState(false);
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Modal
        animationType="fade"
        visible={qrmodal}
        onRequestClose={() => {
          setqrmodal(false);
        }}
      >
        <QrScanner
          onScan={link => {
            seturlString(link);
            setqrmodal(false);
          }}
        />
      </Modal>
      <TextInput
        placeholder="Enter wifi String"
        value={urlString}
        placeholderTextColor="grey"
        style={{
          borderWidth: 1,
          alignSelf: "stretch",
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 70,
          paddingRight: 70,
          margin: 20,
          textAlign: "center",
          borderColor: "white",
          color: "white"
        }}
        onChangeText={e => seturlString(e)}
      ></TextInput>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 70,
          paddingRight: 70,
          margin: 10,
          backgroundColor: "grey"
        }}
        onPress={() => {
          props.onSave(urlString);
        }}
      >
        <Text>Save Link</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderWidth: 1,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 70,
          paddingRight: 70,
          margin: 10,
          backgroundColor: "grey"
        }}
        onPress={() => {
          setqrmodal(true);
        }}
      >
        <Text>Show QR </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

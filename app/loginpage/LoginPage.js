import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  ActivityIndicator
} from "react-native";
import Settings from "../shared/Settings";
import Icon from "react-native-vector-icons/Entypo";

function LoginPage({ navigation }) {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [urlString, seturlString] = useState("");
  const [visible, setvisible] = useState(false);
  const [loader, setloader] = useState(false);

  function auth() {
    var tuserName = userName;
    var tpassword = password;
    setloader(true);

    return fetch(urlString + "/auth", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: tuserName.trim(),
        password: tpassword.trim()
      })
    })
      .then(response => {
        var responseJson = response.json();
        //console.log(responseJson);
        return responseJson;
      })
      .catch(error => {
        return;
      });
  }

  const handleLogin = async c => {
    //console.log(userName);
    //console.log(password);
    const check = await auth();
    //console.log(check);
    if (check) {
      //storeToken({teamID: userName});

      console.log("Logged in");
      navigation.replace("HomePage", { username: userName });
    } else {
      //setloader(false);
      return Alert.alert(
        "Wrong Credentials or Wrong Url String",
        "Contact a BSH member",
        [
          {
            text: "okay whatevs, imma try again",
            onPress: () => {
              setloader(false);
            }
          }
        ]
      );
      //console.log("try again");
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="map" style={styles.icon}></Icon>
      <View style={styles.teamUserNameRow}>
        <TextInput
          placeholder="Team UserName"
          placeholderTextColor="grey"
          selectionColor="grey"
          style={styles.teamUserName}
          onChangeText={e => setuserName(e)}
        ></TextInput>
      </View>
      <TextInput
        placeholder="Team Password"
        placeholderTextColor="grey"
        secureTextEntry={true}
        selectionColor="rgba(0,0,255,1)"
        style={styles.teamPassword}
        onChangeText={e => setpassword(e)}
      ></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={cred => handleLogin(cred)}
      >
        <Text style={styles.letsHunt}>Let&#39;s Hunt</Text>
      </TouchableOpacity>
      <Text style={styles.thambV0}>THAMB.V0</Text>
      <Modal animationType="fade" visible={loader}>
        <ActivityIndicator
          style={{ flex: 1, alignSelf: "center" }}
          size="large"
          color="#0000ff"
          onRequestClose={() => {
            setloader(false);
          }}
        />
        <Text
          style={{
            color: "black",
            alignSelf: "center",
            flex: 1,
            margin: 10,
            textAlign: "center"
          }}
        >
          Loading...See man, we lack resources....so our servers are very slow,
          if you are here for a while, wanna have a conversation? what's up, how
          is life?lol no, maybe your wifi String, team username or password is
          wrong, close app, clear from task and try again.
        </Text>
      </Modal>
      <Modal
        animationType="fade"
        visible={visible}
        onRequestClose={() => {
          setvisible(false);
        }}
      >
        <Settings
          onSave={link => {
            console.log(link);
            seturlString(link);
            console.log(urlString);
            setvisible(false);
          }}
        />
      </Modal>
      <TouchableOpacity
        style={styles.sbutton}
        onPress={() => {
          setvisible(true);
        }}
      >
        <Text>Set Wifi</Text>
      </TouchableOpacity>
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
  sbutton: {
    borderWidth: 1,
    alignSelf: "center",
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

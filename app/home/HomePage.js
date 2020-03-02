//module imports
import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  AsyncStorage,
  Alert
} from "react-native";

// User Import
import Card from "../shared/Card";
import QrScanner from "../shared/QrScanner";
import ClueView from "../clueview/ClueView";
import Settings from "../shared/Settings";
import settingIcon from "react-native-vector-icons/Ionicons";

//Testing data initialisation

// Homepage - button ,  and clues
function HomePage({ route, navigation }) {
  const [clues, setClues] = useState([]);
  const [modalVisible, setmodalVisible] = useState(false);
  const [modalSubmitVisible, setmodalSubmitVisible] = useState(false);
  const [clickedsubmit, setclickedsubmit] = useState(null);
  const [submittedAnswer, setsubmittedAnswer] = useState([]);
  const [settingsModal, setsettingsModal] = useState(false);
  const [settingString, setsettingString] = useState("");
  //console.log(route.params.username);

  //converts the array data to cards
  var foundClues;
  if (clues === null) {
    foundClues = [];
  } else {
    foundClues = clues.map(ele => (
      <Card
        title={ele.title}
        subtitle={ele.subtitle}
        body={ele.body}
        onPress={() => onPressHandler(ele)}
      />
    ));
  }
  //stores the corresponding element value when Clicked
  const clickedSubmit = clickedsubmit;

  //passing function to child so that can execute when called as props.<propsName>
  //handles scanned data and saves it in the state
  const handleQRData = data => {
    try {
      const clueCode = JSON.parse(data).subtitle;
      var newEle = true;
      if (data === null) {
      } else {
        if (clues === null) {
        } else {
          for (var i = 0; i < clues.length; i++) {
            if (clues[i].subtitle === clueCode) {
              newEle = false;
              break;
            }
          }
        }
      }
      if (newEle) {
        if (clues === null) {
          setClues(JSON.parse(data));
        } else {
          setClues([...clues, JSON.parse(data)]);
        }
      }
    } catch (error) {
      return Alert.alert(
        "Wrong QR code Scanned",
        "Venturing out is required, but you've ventured too far. Scan only Thamb tagged QR code "
      );
    }

    setmodalVisible(false);
  };
  //sets the clicked element and passes value to the ClueView
  const onPressHandler = currele => {
    setclickedsubmit(
      <ClueView
        title={currele.title}
        subtitle={currele.subtitle}
        body={currele.body}
        submitAnswer={handleSubmittedAnswer}
      />
    );

    setmodalSubmitVisible(!modalSubmitVisible);
  };
  //handles submissions -implemented update existing logic
  const handleSubmittedAnswer = answer => {
    const clueCode = answer.clueCode;
    const res = answer.response;
    var newEle = true;
    if (answer === null) {
    } else {
      for (var i = 0; i < submittedAnswer.length; i++) {
        if (submittedAnswer[i].clueCode === clueCode) {
          const t = submittedAnswer;
          t[i].response = res;
          //console.log(t);
          setsubmittedAnswer(t);
          newEle = false;
          break;
        }
      }
    }
    if (newEle) {
      setsubmittedAnswer([...submittedAnswer, answer]);
    }

    setmodalSubmitVisible(false);
  };
  const pushToServer = async () => {
    const connectionCheck = await checkConnection();
    console.log(connectionCheck);
    if (connectionCheck) {
      if (clues === []) {
        return;
      }
      var a = clues.map(ele => {
        const clueCode = ele.subtitle;

        for (var i = 0; i < submittedAnswer.length; i++) {
          if (submittedAnswer[i].clueCode === clueCode) {
            ele.response = submittedAnswer[i].response;
            return ele;
          }
        }
      });
      //console.log(a);
      a = a.filter(i => {
        return i;
      });
      const finalArray = {
        teamID: route.params.username.trim(),
        data: a
      };
      //data is preprocessed, only sending to route
      console.log(finalArray);

      const chk = push(finalArray);
      if (chk) {
        return Alert.alert(
          "Successfully submitted to server",
          "Your answers have been recorded, wait for results. Thank you for playing.",
          [
            {
              text: "see ya!",
              onPress: () => {
                navigation.replace("Login");
              }
            }
          ]
        );
      } else {
        return Alert.alert(
          "Server is Busy Please Wait...or there could be some error, Reach the nearest BSH member"
        );
      }
    } else {
      return Alert.alert("Connect to Thamb WiFi to Push data");
    }
  };
  //pushing to server => mongo -- Pending
  const push = a => {
    return fetch(settingString, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(a)
    })
      .then(responseJson => {
        //console.log(responseJson);
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  };

  //checking if client is connected to correct server
  const checkConnection = () => {
    return fetch(settingString + "/connect", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(responseJson => {
        //console.log(responseJson);
        return true;
      })
      .catch(error => {
        return false;
      });
  };
  const saveLink = link => {
    if (!checkConnection()) {
      return Alert.alert(
        "Not a Thamb wifi, make sure you have entered the link correctly"
      );
    } else {
      console.log(link);
      setsettingString(link);
    }
    setsettingsModal(false);
  };

  //console.log("----------------------------------------");
  //console.log(submittedAnswer);

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Modal
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => {
            setmodalVisible(false);
          }}
        >
          <QrScanner onScan={handleQRData} />
        </Modal>

        <Modal
          animationType="fade"
          visible={modalSubmitVisible}
          onRequestClose={() => {
            setmodalSubmitVisible(false);
          }}
        >
          {clickedSubmit}
        </Modal>

        <Modal
          animationType="fade"
          visible={settingsModal}
          onRequestClose={() => {
            setsettingsModal(false);
          }}
        >
          <Settings onSave={saveLink} />
        </Modal>
        <TouchableOpacity
          style={styles.sButton}
          onPress={() => {
            //console.log(settingsModal);
            setsettingsModal(!settingsModal);
          }}
        >
          <Text style={styles.caption}>Settings ⚙️</Text>
        </TouchableOpacity>
        <Text style={styles.title}> Found Clues </Text>

        <ScrollView style={styles.card}>{foundClues}</ScrollView>

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.rButton}
            onPress={() => {
              setmodalVisible(!modalVisible);
            }}
          >
            <Text style={styles.caption}>QR CODE SCANNER 📷</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.rButton}
            onPress={() => {
              pushToServer();
            }}
          >
            <Text style={styles.caption}>Push To Server 📌</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

//Styles ----------------------------------
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
  },

  title: {
    color: "white",
    fontSize: 40,
    alignSelf: "stretch",
    padding: 30,
    borderBottomColor: "white",
    borderWidth: 1,
    textAlign: "center"
  },
  rButton: {
    backgroundColor: "#212121",
    flexDirection: "row",
    flex: 1,
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
    padding: 25,
    margin: 3,
    width: 180
  },
  sButton: {
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
    alignSelf: "stretch",
    padding: 25,
    margin: 3
  },
  caption: {
    color: "#fff",
    fontSize: 14
  },
  buttonView: {
    flexDirection: "row"
  }
});

export default HomePage;

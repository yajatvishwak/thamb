import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

import LoginPage from "./app/loginpage/LoginPage";
import HomePage from "./app/home/HomePage";
import QrScanner from "./app/shared/QrScanner";
import ClueView from "./app/clueview/ClueView";

//navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
//initialRouteName="SubmitAnswer"
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Scanner" component={QrScanner} />
        <Stack.Screen name="SubmitAnswer" component={ClueView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

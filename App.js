import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import LittleLemonHeader from "./components/LittleLemonHeader";
import Footer from "./components/Footer";
import LoginScreen from "./components/LoginScreen";
import MenuItems from "./components/MenuItems";
import WelcomeScreen from "./components/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerStyle: { backgroundColor: "#F2CA17" } }}
        >
          <Stack.Screen
            options={{ title: "Home" }}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  footerContainer: { backgroundColor: "#FFFFFF" },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 32,
  },
  footerContainer: { backgroundColor: "#333333" },
});

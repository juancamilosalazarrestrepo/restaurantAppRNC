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
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SubscribeScreen from "./components/SubscribeNewsletter";

const Stack = createNativeStackNavigator();

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="WelcomeLogin"
          screenOptions={{
            headerStyle: { backgroundColor: "#fff" },
            headerTintColor: "#000",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen
            options={{
              title: "Home",
              headerTitleAlign: "center",
              headerTitle: (props) => (
                <Text style={styles.titleText}>Welcome</Text>
              ),
            }}
            name="Login"
            component={WelcomeScreen}
          />
          <Stack.Screen
            options={{
              title: "Subscribe",
              headerTitleAlign: "center",
              headerTitle: (props) => (
                <Text style={styles.titleText}>Subscribe</Text>
              ),
            }}
            name="Subscribe"
            component={SubscribeScreen}
          />
        </Stack.Navigator>
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
  titleText: {
    color: "#000",
    textAlign: "center",
    fontSize: 22,
  },
  footerContainer: { backgroundColor: "#333333" },
});

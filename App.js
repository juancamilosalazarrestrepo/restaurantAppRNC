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

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

function LogoTitle() {
  return (
    <Image
      source={require("./img/littlelemologo.png")}
      style={{
        height: 40,
        width: 300,
        resizeMode: "contain",
        alignSelf: "center",
      }}
    />
  );
}

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <NavigationContainer>
      {/*  <View style={styles.container}>
      
        <Stack.Navigator
          initialRouteName="WelcomeLogin"
          screenOptions={{
            headerStyle: { backgroundColor: "#F2CA17" },
            headerTintColor: "#ffffff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen
            options={{
              title: "Home",
              headerTitle: (props) => <LogoTitle {...props} />,
            }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Menu" component={MenuItems} />
        </Stack.Navigator> 

        
      </View> */}

      <>
        <NavigationContainer>
          <View style={styles.container}>
            <LittleLemonHeader />
            <Drawer.Navigator useLegacyImplementation initialRouteName="Login">
              <Drawer.Screen name="Welcome" component={WelcomeScreen} />
              <Drawer.Screen name="Login" component={LoginScreen} />
            </Drawer.Navigator>
          </View>
          <View style={styles.footerContainer}>
            <LittleLemonFooter />
          </View>
        </NavigationContainer>
      </>

      {/*Navegacion Por cajones*/}

      {/*  <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Welcome") {
              iconName = "home";
            } else if (route.name === "Menu") {
              iconName = "menu";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Menu" component={MenuItems} />
      </Tab.Navigator> */}
      {/* <View style={styles.footerContainer}>
        <Footer />
      </View> */}
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

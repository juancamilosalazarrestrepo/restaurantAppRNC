import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [firstName, onChangeFirstName] = useState("");
  const [password, onChangePassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../img/littlelemologo.png")}
        resizeMode="contain"
        accessible={true}
        accesibilityLabel="Little Lemon Logo"
      />
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {!logged && (
        <>
          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
            style={[
              styles.input,
              focusedInput === "firstName" && styles.inputFocused,
            ]}
            value={firstName}
            onChangeText={onChangeFirstName}
            placeholder={"email"}
            keyboardType={"email-address"}
            onFocus={() => setFocusedInput("firstName")}
            onBlur={() => setFocusedInput(null)}
          />

          <TextInput
            style={[
              styles.input,
              focusedInput === "password" && styles.inputFocused,
            ]}
            value={password}
            onChangeText={onChangePassword}
            placeholder={"Password"}
            keyboardType={"default"}
            secureTextEntry={true}
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput(null)}
          />

          <Pressable
            style={styles.button}
            onPress={() => {
              setLogged(!logged);
              navigation.navigate("Welcome");
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </>
      )}
      {logged && <Text style={styles.headerText}>You Are logged in!</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },
  headerText: {
    padding: 50,
    fontSize: 30,
    fontWeight: "bold",
    color: "#4E8E41",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#000",
    textAlign: "center",
  },
  input: {
    marginBottom: 20,
    paddingLeft: 20,
    height: 50,
    backgroundColor: "#F3F3F3",
    borderColor: "#cdcdcd", // Color del borde
    borderWidth: 1, // Ancho del borde
    marginHorizontal: 12,
    borderRadius: 12,
    padding: 10,
    width: 300,
    alignSelf: "center",
  },
  inputFocused: {
    borderColor: "#4E8E41",
    borderWidth: 1.2, // Color del borde cuando el input está enfocado
  },
  button: {
    fontSize: 14,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    height: 50,
    width: 300,
    alignSelf: "center",
    backgroundColor: "#4E8E41",
    borderColor: "#4E8E41",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#F3F3F3",
    backgroundColor: "#4E8E41",
    textAlign: "center",
    fontSize: 20,
  },
  logo: {
    marginTop: 15,
    padding: 40,
    paddingBottom: 0,
    height: 100,
    width: 300,
    alignSelf: "center",
    resizeMode: "contain",
  },
});

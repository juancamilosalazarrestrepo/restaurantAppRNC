import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  useColorScheme,
  useWindowDimensions,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";

export default function SubscribeScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const colorScheme = useColorScheme();

  const onChangeEmail = (text) => {
    setEmail(text);
    // Validar el email usando una expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(text));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={[
          styles.scroll,
          colorScheme === "light"
            ? { backgroundColor: "#fff" }
            : { backgroundColor: "#333333" },
        ]}
        indicatorStyle={"white"}
      >
        <View style={styles.centeredContainer}>
          <Image
            style={styles.image}
            source={require("../assets/little-lemon-logo-grey.png")}
            resizeMode="contain"
            accessible={true}
            accesibilityLabel="Food Picture 1"
          />

          <Text style={styles.text}>
            Subscribe to our newsletter for our latest delicious recipes!
          </Text>
          <TextInput
            style={[
              styles.input,
              focusedInput === "email" && styles.inputFocused,
            ]}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={"Type your email"}
            keyboardType={"email-address"}
            onFocus={() => setFocusedInput("email")}
            onBlur={() => setFocusedInput(null)}
          />
          <Pressable
            onPress={() => {
              if (isEmailValid) {
                Alert.alert("Success", "thanks for subscribing,stay tuned!");
              }
            }}
            disabled={!isEmailValid}
            style={[styles.buttonInactive, isEmailValid && styles.button]}
          >
            <Text style={styles.buttonText}>Subscribe</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", paddingTop: 0 },
  title: {
    padding: 10,
    fontSize: 30,
    marginTop: 15,
    color: "#212427",
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    color: "#212427",
    marginTop: 35,
    paddingTop: 0,
    padding: 5,
    textAlign: "center",
  },
  inputFocused: {
    borderColor: "#4E8E41",
    borderWidth: 1.2,
    // Color del borde cuando el input está enfocado
  },

  input: {
    margin: 20,
    paddingLeft: 20,
    height: 50,
    backgroundColor: "#F3F3F3",
    borderColor: "#cdcdcd", // Color del borde
    borderWidth: 1, // Ancho del borde
    marginHorizontal: 12,
    borderRadius: 12,
    padding: 10,
    width: "85%",
    alignSelf: "center",
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 0,
    margin: 0,
  },
  scroll: {
    paddingTop: 20,
    padding: "auto",
  },
  centeredContainer: {
    flex: 1,
    alignItems: "center",
  },
  regular: {},
  button: {
    backgroundColor: "#40524C",
    borderColor: "#40524C",
  },
  buttonInactive: {
    fontSize: 12,
    marginVertical: 8,
    margin: 40,
    padding: 10,
    borderWidth: 2,
    borderRadius: 12,
    width: "85%",
    backgroundColor: "#cdcdcd",
    borderColor: "#cdcdcd",
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  },
});

import { useState } from "react";
import { StatusBar } from "expo-status-bar";
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
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  const [firstName, onChangeFirstName] = useState("");
  const colorScheme = useColorScheme();
  const window = useWindowDimensions();
  return (
    <View style={welcomeStyles.container}>
      <ScrollView
        style={[
          welcomeStyles.scroll,
          colorScheme === "light"
            ? { backgroundColor: "#fff" }
            : { backgroundColor: "#333333" },
        ]}
        indicatorStyle={"white"}
      >
        <View style={welcomeStyles.centeredContainer}>
          <Image
            style={welcomeStyles.image}
            source={require("../img/food1.webp")}
            resizeMode="cover"
            accessible={true}
            accesibilityLabel="Food Picture 1"
          />
          <Image
            style={welcomeStyles.image}
            source={require("../img/food2.jpeg")}
            resizeMode="cover"
            accessible={true}
            accesibilityLabel="Food Picture 2"
          />

          <Text style={welcomeStyles.title}>Bienvenido a Little Lemon</Text>
          <Text style={welcomeStyles.text}>
            Little Lemon es un encantador bistró de barrio que sirve comida
            sencilla y cócteles clásicos en un ambiente animado pero informal.
            ¡Nos encantaría saber más sobre su experiencia con nosotros!
          </Text>
          {/*    <Text style={welcomeStyles.regular}>Window Dimensions</Text>
          <Text style={welcomeStyles.regular}>Height: {window.height}</Text>
          <Text style={welcomeStyles.regular}>Width: {window.width}</Text>
          <Text style={welcomeStyles.regular}>
            Font scale: {window.fontScale}
          </Text> */}
          <Pressable onPress={()=>navigation.navigate('Menu')}>
            <Text style={welcomeStyles.buttonText}>View Menu</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const welcomeStyles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", paddingTop: 0 },
  title: {
    padding: 10,
    fontSize: 30,
    marginTop: 15,
    color: "#212427",
    textAlign: "center",
  },
  text: { fontSize: 20, color: "#212427", paddingTop: 0, padding: 5 },
  input: { backgroundColor: "#EDEFEE" },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    margin: 10,
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
  buttonText:{
    fontSize:25,
    marginBottom:50
  }
});

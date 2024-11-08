
import {
  StyleSheet,
  Text,
  View,
  Image,
  useColorScheme,
  ScrollView,
  Pressable,
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  const colorScheme = useColorScheme();

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
            source={require("../assets/little-lemon-logo.png")}
            resizeMode="contain"
            accessible={true}
            accesibilityLabel="Food Picture 1"
          />

          <Text style={welcomeStyles.text}>
            Little Lemon, your local Mediterranean Bistro
          </Text>

          <Pressable
            onPress={() => navigation.navigate("Subscribe")}
            style={welcomeStyles.button}
          >
            <Text style={welcomeStyles.buttonText}>Newsletter</Text>
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
  text: {
    fontSize: 20,
    color: "#212427",
    marginTop: 35,
    marginBottom:20,
    paddingTop: 0,
    padding: 5,
    textAlign: "center",
  },
  input: { backgroundColor: "#EDEFEE" },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 0,
    marginTop: 30,
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
    fontSize: 12,
    marginVertical: 8,
    margin: 40,
    padding: 10,
    backgroundColor: "#40524C",
    borderColor: "#40524C",
    borderWidth: 2,
    borderRadius: 12,
    width: "90%",
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  },
});

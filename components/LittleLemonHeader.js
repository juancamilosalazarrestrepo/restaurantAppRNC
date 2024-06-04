import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Image } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
        <Image
            style={headerStyles.logo}
            source={require("../img/littlelemologo.png")}
            resizeMode="contain"
            accessible={true}
            accesibilityLabel="Little Lemon Logo"
          />
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: { flex: 0.25, backgroundColor: '#042940',top:0 , justifyContent: "center",alignItems:"center"},
  logo: {
    marginTop:15,
    padding:40,
    paddingBottom:0,
    height: 100,
    width: 300,
    resizeMode: "contain",
  },
});

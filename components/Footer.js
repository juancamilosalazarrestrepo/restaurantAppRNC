import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={footerStyles.container}>
      <Text style={footerStyles.footerText}>Todos los derechos reservados por Little Lemon, 2022</Text>
    </View>
  );
}

const footerStyles = StyleSheet.create({
  container: { display:"flex",justifyContent:"center",alignItems:"center", backgroundColor: '#4E8E41' },
  footerText:{ padding: 15, fontSize: 10, color: '#fff'}
});

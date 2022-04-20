import { StyleSheet, Text, View } from "react-native";
import GLViewComp from "../components/GLViewComp";
export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text>Mainscreen</Text>
      <GLViewComp />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  glview:{

  }
});

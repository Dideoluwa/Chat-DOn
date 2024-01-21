import { StyleSheet, View, Text } from "react-native";

function NavBar() {
  return (
    <View style={styles.body}>
      <Text style={styles.paragraph}>ChatDOn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: 60,
    backgroundColor: "black",
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  paragraph: {
    display: "flex",
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
});

export default NavBar;

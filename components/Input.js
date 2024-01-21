import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
} from "react-native";

function Input(props) {
  const [inputValue, setInputValue] = useState("");

  const handlePress = () => {
    // Handle button press
    if (inputValue.length > 0) {
      props.onSubmit(inputValue);
      setInputValue("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter message..."
        style={styles.input}
        placeholderTextColor="white"
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "white",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: 35,
    justifyContent: "center",
    borderRadius: 15,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },

  input: {
    fontSize: 14,
    flex: 1,
    display: "flex",
    color: "white",
  },
  button: {
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    // padding: 20,
    color: "white",
  },
});

export default Input;

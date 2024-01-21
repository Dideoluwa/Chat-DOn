import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import NavBar from "./components/NavBar";
import Input from "./components/Input";
import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    const userMessage = {
      id: Math.random() * 50 + 1,
      user: "You",
      message,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
  };

  return (
    <KeyboardAvoidingView
      // style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView>
        <StatusBar style="auto" visible="true" />
        <View style={styles.body}>
          <NavBar />
          <ScrollView>
            <View style={styles.container}>
              {messages.map((data, index) => (
                <View key={data.id}>
                  <Text selectable style={styles.userText}>
                    {data.user}:
                  </Text>
                  <Text selectable style={styles.text}>
                    {data.message}
                  </Text>
                </View>
              ))}
            </View>
          </ScrollView>

          <View style={styles.text_input}>
            <Input onSubmit={sendMessage} />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  body: {
    height: "100%",
    backgroundColor: "black",
  },
  container: {
    color: "white",
    flex: 1,
    display: "flex",
    gap: 20,
    margin: "auto",
    flexGrow: 1,
    justifyContent: "center",
  },

  text: {
    fontSize: 18,
    color: "white",
  },

  userText: {
    fontSize: 13,
    color: "white",
  },

  text_input: {
    left: 0,
    right: 0,
    padding: 16,
    alignItems: "center",
  },
});

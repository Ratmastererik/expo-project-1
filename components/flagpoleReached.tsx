import { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

export default function FlagpoleReachedPopup() {
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState("");

  return (
    <Modal
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.overlay}>
        <View style={styles.popup}>
          <Text style={styles.title}>Write Message</Text>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            value={message}
            onChangeText={setMessage}
          />
          <Button
            title="Submit"
            onPress={() => {
              setVisible(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // dimmed background
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 8,
    marginBottom: 12,
  },
});

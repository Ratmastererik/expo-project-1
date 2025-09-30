import { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";

interface Props {
  flagpoleId: string;
}

type MessagesByFlagpole = Record<string, string[]>;

export default function FlagpoleReachedPopup({ flagpoleId }: Props) {
  const [visible, setVisible] = useState(true);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState<MessagesByFlagpole>({});

  function handleMessageSubmit(flagpoleId: string, message: string) {
    setMessages((prev) => ({
      ...prev,
      [flagpoleId]: [...(prev[flagpoleId] ?? []), message],
    }));
  }

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
            value={inputText}
            onChangeText={setInputText}
          />
          <Button
            title="Submit"
            onPress={() => {
              handleMessageSubmit(flagpoleId, inputText);
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

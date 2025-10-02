import { useAtom } from "jotai";
import { useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput } from "react-native";
import { atomFlagpoles } from "../atoms";

interface Props {
  flagpoleId: string;
}

export default function SubmitMessageForm({ flagpoleId }: Props) {
  const [inputText, setInputText] = useState("");
  const [flagpoles, setFlagpoles] = useAtom(atomFlagpoles);
  const [modalVisible, setModalVisible] = useState(true);

  function handleMessageSubmit(flagpoleId: string, inputText: string) {
    setFlagpoles((prev) =>
      prev.map((flag) =>
        flag.id === flagpoleId
          ? { ...flag, messages: [...flag.messages, inputText] }
          : flag
      )
    );
  }

  return (
    <Modal visible={modalVisible}>
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
          setModalVisible(!modalVisible);
        }}
      />
      ;
    </Modal>
  );
}

const styles = StyleSheet.create({
  popup: {
    width: "80%",
    height: "20%",
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

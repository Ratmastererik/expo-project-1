import { useAtomValue } from "jotai";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { atomFlagpoles } from "../atoms";
import { Flagpole } from "../data/flagpoles";

interface Props {
  flagpoleId: string;
}

export default function FlagpolMenu({ flagpoleId }: Props) {
  const [inputText, setInputText] = useState("");
  const [flagpoles, setFlagpoles] = useState<Flagpole[]>(
    useAtomValue(atomFlagpoles)
  );

  function handleMessageSubmit(flagpoleId: string, inputText: string) {
    setFlagpoles((prev) =>
      prev.map((flag) =>
        flag.id === flagpoleId
          ? { ...flag, messages: [...flag.messages, inputText] }
          : flag
      )
    );

    console.log(flagpoles.map((f) => f.messages));
  }

  return (
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
          }}
        />
      </View>
    </View>
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

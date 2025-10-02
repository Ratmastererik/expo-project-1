import { useAtomValue } from "jotai";
import { StyleSheet, Text, View } from "react-native";
import { atomFlagpoleMessageById } from "../atoms";

interface Prop {
  flagpoleId: string;
}

export default function MessagesList(prop: Prop) {
  const messages = useAtomValue(atomFlagpoleMessageById(prop.flagpoleId));

  return (
    <View style={styles.container}>
      {messages?.map((msg, key) => (
        <Text
          key={key}
          style={[
            styles.messageBubble,
            key % 2 === 0 ? styles.leftBubble : styles.rightBubble,
          ]}
        >
          {msg}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 8,
  },
  messageBubble: {
    maxWidth: "75%",
    padding: 10,
    borderRadius: 12,
  },
  leftBubble: {
    backgroundColor: "#f0f0f0",
    alignSelf: "flex-start",
  },
  rightBubble: {
    backgroundColor: "#007bff",
    alignSelf: "flex-end",
  },
  messageText: {
    color: "black",
  },
});

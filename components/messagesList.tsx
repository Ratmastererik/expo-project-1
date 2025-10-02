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
        <Text key={key}>{msg}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 8,
  },
});

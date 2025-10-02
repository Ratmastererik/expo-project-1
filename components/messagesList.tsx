import { useAtomValue } from "jotai";
import { Text, View } from "react-native";
import { atomFlagpoleMessageById } from "../atoms";

export default function MessagesList(flagpoleId: string) {
  const messages = useAtomValue(atomFlagpoleMessageById(flagpoleId));

  return (
    <View>
      {messages?.map((msg, key) => (
        <Text key={key}>{msg}</Text>
      ))}
    </View>
  );
}

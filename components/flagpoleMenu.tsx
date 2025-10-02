import React from "react";
import { StyleSheet, View } from "react-native";
import MessagesList from "./messagesList";
import SubmitMessageForm from "./submitMessageForm";

interface Props {
  flagpoleId: string;
}

export default function FlagpolMenu({ flagpoleId }: Props) {
  return (
    <View style={styles.overlay}>
      <MessagesList flagpoleId={flagpoleId} />
      <SubmitMessageForm flagpoleId={flagpoleId} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // dimmed background

    alignItems: "center",
  },
});

import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MessagesList from "../../components/messagesList";
import SubmitMessageForm from "../../components/submitMessageForm";

export default function FlagpoleDetailsScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();

  if (!id) {
    return (
      <View style={styles.container}>
        <Text>No flagpole ID provided</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MessagesList flagpoleId={id} />
      <SubmitMessageForm flagpoleId={id} />
      <Button title="Back to Map" onPress={() => router.navigate("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import FlagpolMenu from "../../components/flagpoleMenu";
import MessagesList from "../../components/messagesList";

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
      {MessagesList(id)}
      <FlagpolMenu flagpoleId={id} />
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

import { router, useLocalSearchParams } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import FlagpoleReachedPopup from "../../components/flagpoleReached";

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
      <FlagpoleReachedPopup flagpoleId={id} />
      <Button title="Back to Map" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

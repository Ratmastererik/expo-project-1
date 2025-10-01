import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

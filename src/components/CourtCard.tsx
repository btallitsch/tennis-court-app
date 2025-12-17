import { View, Text, StyleSheet, Pressable } from "react-native";
import { Court } from "../data/courts";

type Props = {
  court: Court;
  onPress: () => void;
};

export default function CourtCard({ court, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <Text style={styles.name}>{court.name}</Text>
      <Text>{court.city}</Text>
      <Text>
        {court.surface} • ⭐ {court.rating}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#eee",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
});

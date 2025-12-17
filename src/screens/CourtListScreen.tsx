import { View, TextInput, FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import { courts } from "../data/courts";
import CourtCard from "../components/CourtCard";

export default function CourtListScreen({ navigation }: any) {
  const [search, setSearch] = useState("");

  const filteredCourts = courts.filter(
    (court) =>
      court.name.toLowerCase().includes(search.toLowerCase()) ||
      court.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search courts"
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />

      <FlatList
        data={filteredCourts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CourtCard
            court={item}
            onPress={() =>
              navigation.navigate("CourtDetail", { courtId: item.id })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fafafa",
  },
  search: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
});

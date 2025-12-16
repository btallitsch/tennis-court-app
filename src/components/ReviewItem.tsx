import { View, Text, StyleSheet } from "react-native";
import { Review } from "../data/courts";

export default function ReviewItem({ review }: { review: Review }) {
  return (
    <View style={styles.container}>
      <Text style={styles.author}>{review.author}</Text>
      <Text>⭐ {review.rating}</Text>
      <Text>{review.comment}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  author: {
    fontWeight: "600",
  },
});

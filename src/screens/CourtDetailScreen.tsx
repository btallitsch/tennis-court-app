import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import ReviewItem from "../components/ReviewItem";
import { courts } from "../data/courts";
export default function CourtDetailScreen({ route }: any) {
  const court = courts.find((c) => c.id === route.params.courtId);
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState(court?.reviews || []);

  if (!court) return null;

  const submitReview = () => {
    if (!name || !rating) return;

    setReviews([
      ...reviews,
      {
        id: Date.now().toString(),
        author: name,
        rating: Number(rating),
        comment,
      },
    ]);

    setName("");
    setRating("");
    setComment("");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{court.name}</Text>
      <Text>{court.city}</Text>
      <Text>
        {court.surface} • ⭐ {court.rating}
      </Text>

      <Text style={styles.section}>Reviews</Text>
      {reviews.map((r) => (
        <ReviewItem key={r.id} review={r} />
      ))}

      <Text style={styles.section}>Leave a Review</Text>

      <TextInput
        placeholder="Your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Rating (1–5)"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Comment"
        value={comment}
        onChangeText={setComment}
        multiline
        style={[styles.input, { height: 80 }]}
      />

      <Button title="Submit Review" onPress={submitReview} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  section: {
    marginTop: 20,
    marginBottom: 8,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
});

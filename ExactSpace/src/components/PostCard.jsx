import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PostCard = ({ title, body }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 6,
    fontSize: 16,
  },
  body: {
    color: "#555",
  },
});

export default PostCard;

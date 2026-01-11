import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
} from "react-native";
import PostCard from "../components/PostCard";
import usePosts from "../hooks/usePosts";
import { saveSearch, getSavedSearch } from "../utils/storage";

const HomeScreen = () => {
  const { posts, loading, error, reload } = usePosts();
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    loadSavedSearch();
  }, []);

  useEffect(() => {
    filterPosts(search);
    saveSearch(search);
  }, [search, posts]);

  const loadSavedSearch = async () => {
    const saved = await getSavedSearch();
    if (saved) setSearch(saved);
  };

  const filterPosts = (text) => {
    const filtered = posts.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#4F46E5" style={{ marginTop: 50 }} />
    );
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search posts by title..."
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
      </View>

      {/* Empty State */}
      {filteredPosts.length === 0 ? (
        <Text style={styles.emptyText}>No posts found.</Text>
      ) : (
        <FlatList
          data={filteredPosts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PostCard title={item.title} body={item.body} />
          )}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={reload} />
          }
        />
      )}
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    backgroundColor: "#F5F7FB",
  },

  searchContainer: {
    backgroundColor: "#fff",
    margin: 12,
    borderRadius: 12,
    paddingHorizontal: 12,
    
    paddingVertical: 6,
    elevation: 3, 
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },

  searchInput: {
    height: 40,
    fontSize: 16,
    color: "#ab4b4b",
  },

  emptyText: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 16,
    color: "#666",
  },

  errorText: {
    textAlign: "center",
    marginTop: 40,
    color: "red",
    fontSize: 16,
  },
});

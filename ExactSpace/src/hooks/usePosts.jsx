import { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      setError("Unable to fetch posts. Check your network connection.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return { posts, loading, error, reload: loadPosts };
};

export default usePosts;

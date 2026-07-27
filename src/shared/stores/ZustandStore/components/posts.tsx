import { useEffect } from "react";
import { usePostsStore } from "../usePostsStore";
// import { usePostsStore } from "../store/zustand/usePostsStore";

const Posts = () => {
  const { posts, loading, error, fetchPosts } = usePostsStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h2>Posts</h2>

      {posts.slice(0, 10).map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
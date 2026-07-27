import { create } from "zustand";
import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
}

export const usePostsStore = create<PostState>((set) => ({
  posts: [],
  loading: false,
  error: null,

  fetchPosts: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );

      set({
        posts: response.data,
        loading: false
      });

    } catch (error: any) {
      set({
        error: error.message,
        loading: false
      });
    }
  }
}));
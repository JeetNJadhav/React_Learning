import { useCallback, useState } from "react";
import { Comment } from "./Comment";

export function CommentThread() {
  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState("");

  const createComment = (message) => {
    return {
      id: Date.now(),
      message,
      author: "Jeet",
      replies: [],
    };
  };

  const handleMessage = () => {
    if (!message.trim()) return;

    setComments((prev) => [...prev, createComment(message)]);
  };

  // this is O(N) approach
  const addReply = useCallback((comments, parentId, reply) => {
    return comments.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...comment.replies, reply],
        };
      }

      return {
        ...comment,
        replies: addReply(comment.replies, parentId, reply),
      };
    });
  }, []);

  const handleReply = useCallback((parentId, message) => {
    const newReply = createComment(message);

    setComments((prev) => addReply(prev, parentId, newReply));
  }, []);

  return (
    <div>
      <h3>Recursive nested comments</h3>
      <input
        type="text"
        placeholder="Add comment..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={handleMessage}>Add comment</button>

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} onReply={handleReply} />
      ))}
    </div>
  );
}

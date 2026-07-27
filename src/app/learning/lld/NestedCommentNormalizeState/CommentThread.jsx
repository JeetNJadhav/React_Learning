import { useCallback, useState } from "react";
import { Comment } from "./Comment";

export function CommentThread() {
  const [commentsById, setCommentsById] = useState({});
  const [rootCommentIds, setRootCommentIds] = useState([]);
  const [message, setMessage] = useState("");

  const createComment = (message) => {
    return {
      id: crypto.randomUUID(),
      message,
      author: "Jeet",
      replies: [],
    };
  };

  const handleMessage = () => {
    if (!message.trim()) return;

    const newComment = createComment(message);

    setCommentsById((prev) => ({ ...prev, [newComment.id]: newComment }));
    setRootCommentIds((prev) => [...prev, newComment.id]);
    setMessage("");
  };

  const handleReply = useCallback((parentId, message) => {
    const newReply = createComment(message);

    setCommentsById((prev) => {
      const parent = prev[parentId];

      return {
        ...prev,

        [newReply.id]: newReply,
        [parentId]: {
          ...parent,
          replies: [...parent.replies, newReply.id],
        },
      };
    });
  }, []);

  return (
    <div>
      <h3>Normalize nested comments</h3>
      <input
        type="text"
        placeholder="Add comment..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={handleMessage}>Add comment</button>

      {rootCommentIds.map((id) => (
        <Comment
          key={id}
          commentId={id}
          commentsById={commentsById}
          onReply={handleReply}
        />
      ))}
    </div>
  );
}

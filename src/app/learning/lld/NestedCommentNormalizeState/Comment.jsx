import { memo, useState } from "react";

function CommentComponent({ commentId, commentsById, onReply }) {
  const [reply, setReply] = useState(false);
  const [message, setMessage] = useState("");
  const comment = commentsById[commentId];

  const submitReply = () => {
    if (!message.trim()) return;

    onReply(comment.id, message);
    setMessage("");
    setReply(false);
  };

  console.log("--->", comment.replies);

  return (
    <div
      style={{
        marginLeft: "20px",
        marginTop: "10px",
        paddingLeft: "10px",
        borderLeft: "1px solid #ccc",
      }}
    >
      <div>{comment.message}</div>

      <button onClick={() => setReply((prev) => !prev)}>Reply</button>

      {reply && (
        <div>
          <input
            type="text"
            placeholder="reply.."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={submitReply}>Add Comment</button>
        </div>
      )}

      {/* {comment.replies.length > 0 && ( */}
      <div>
        {comment.replies.map((replyId) => (
          // <div>
          <Comment
            key={replyId}
            commentId={replyId}
            commentsById={commentsById}
            onReply={onReply}
          />
          // </div>
        ))}
      </div>
      {/* )} */}
    </div>
  );
}

export const Comment = memo(CommentComponent);

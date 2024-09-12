import { useState } from "react";

const CommentForm = ({ onSubmitComment }) => {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!commentText.trim()) {
      return; // Do nothing if the comment is empty
    }

    const newComment = {
      text: commentText,
      date: new Date().toISOString(),
    };

    onSubmitComment(newComment); // Pass the new comment to the parent

    setCommentText(""); // Clear the form after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Write your comment here"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default CommentForm;

import { useState } from "react";

const CommentForm = ({ slug, onSubmitComment }) => {
  const [commentText, setCommentText] = useState("");

  function getCurrentFormattedDate() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const now = new Date();
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    return `${day} ${month} ${year}`;
  }

  function getCurrentTimeFormatted() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      text: commentText,
      date: getCurrentFormattedDate(),
      time: getCurrentTimeFormatted(),
    };

    onSubmitComment(slug, newComment);

    setCommentText("");
    e.target.elements.comment.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={commentText}
        name="comment"
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Write your comment here"
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default CommentForm;

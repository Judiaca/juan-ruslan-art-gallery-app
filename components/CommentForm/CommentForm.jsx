import styled from "styled-components";
import { useState } from "react";

const Textarea = styled.textarea`
  display: block;
  resize: none;
  width: 100%;
  height: 150px;
  padding: 14px 20px;
  user-select: none;
  outline: none;
  border: 4px solid var(--primary-color);
  background: var(--white-color);
  margin-bottom: 20px;
  font-size: 16px;
`;

const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 16px;
  font-weight: 700;
  padding: 18px 30px 16px 30px;
  border: none;
  min-width: 150px;
  background: #c7ccdb;
  color: var(--primary-color);
  transition: 0.3s;
  font-weight: 700;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover {
    background: var(--primary-color);
    color: var(--white-color);
  }
`;

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
      <Textarea
        value={commentText}
        name="comment"
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Write your comment here"
        required
      />
      <SendButton type="submit">Add a comment</SendButton>
    </form>
  );
};

export default CommentForm;

import styles from "./commentsStyles.js";

const { CommentsSection } = styles;

const Comments = ({ comments }) => {
  return (
    <CommentsSection>
      {comments && comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>
                {comment.date} | {comment.time}
              </strong>
              <p>{comment.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <span>No comments...</span>
      )}
    </CommentsSection>
  );
};

export default Comments;

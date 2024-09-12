const Comments = ({ comments }) => {
  if (!comments || comments.length === 0) {
    return <p>No comments yet</p>;
  }

  return (
    <section>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.text}</p> {/* Show comment text */}
            <small>{new Date(comment.date).toLocaleString()}</small>{" "}
            {/* Show comment date */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Comments;

const Comments = ({ comments }) => {
  return (
    <section>
      {comments && comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <p>
                <strong>Date:</strong> {comment.date}
              </p>
              <p>
                <strong>Time:</strong> {comment.time}
              </p>
              <p>{comment.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments...</p>
      )}
    </section>
  );
};

export default Comments;

import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";

const ArtPieceDetails = ({
  slug,
  image,
  title,
  artist,
  year,
  genre,
  colors,
  artPiecesInfo,
  onToggleFavorite,
  onSubmitComment,
}) => {
  const pieceInfo = artPiecesInfo.find((piece) => piece.slug === slug);
  // const { comments = [] } = pieceInfo || {};

  const handleAddComment = (commentText) => {
    const comment = {
      text: commentText,
      timestamp: Date.now(),
    };
    onSubmitComment(slug, comment);
  };

  return (
    <article>
      <FavoriteButton
        isFavorite={
          artPiecesInfo.find((piece) => piece.slug === slug)?.isFavorite
        }
        onToggleFavorite={onToggleFavorite}
      />
      <h1>{title}</h1>
      <Image src={image} width={400} height={400} alt={artist} />
      <p>
        Artist: <span>{artist}</span>
      </p>
      <p>
        Year: <span>{year}</span>
      </p>
      <p>
        Genre: <span>{genre}</span>
      </p>
      <ul>
        {colors.map((color) => {
          return <li key={color}>{color}</li>;
        })}
      </ul>
      {/* Render comments and comment form */}
      <Comments comments={pieceInfo?.comments} />
      <CommentForm
        onSubmitComment={(comment) => onSubmitComment(slug, comment)}
      />
    </article>
  );
};

export default ArtPieceDetails;

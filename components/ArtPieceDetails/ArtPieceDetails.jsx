import Image from "next/image";
// import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
import styles from "./artPieceDetailsStyles";

const {
  Container,
  ImageContainer,
  DetailsContainer,
  Title,
  DetailsItem,
  ColorsList,
  ColorItem,
} = styles;

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
  const artPiece = artPiecesInfo.find((info) => info.slug === slug);

  return (
    <article>
      {/* <FavoriteButton
        isFavorite={artPiece?.isFavorite}
        onToggleFavorite={onToggleFavorite} */}
      {/* /> */}
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
      <Comments comments={artPiece?.comments} />
      <CommentForm slug={slug} onSubmitComment={onSubmitComment} />
    </article>
  );
};

export default ArtPieceDetails;

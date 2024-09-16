import Image from "next/image";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Comments from "../Comments/Comments";
import CommentForm from "../CommentForm/CommentForm";
import styles from "./artPieceDetailsStyles";

const { Container, Picture, Description, Colors, ColorItem } = styles;

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
    <Container>
      <Picture>
        <Image src={image} width={600} height={800} alt={artist} />
        <Colors>
          {colors.map((color) => {
            return <ColorItem key={color} color={color} />;
          })}
        </Colors>
      </Picture>
      <Description>
        <FavoriteButton
          isFavorite={artPiece?.isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <h2>{title}</h2>
        <ul>
          <li>
            Artist: <span>{artist}</span>
          </li>
          <li>
            Year: <span>{year}</span>
          </li>
          <li>
            Genre: <span>{genre}</span>
          </li>
        </ul>
        <hr />
        <Comments comments={artPiece?.comments} />
        <CommentForm slug={slug} onSubmitComment={onSubmitComment} />
      </Description>
    </Container>
  );
};

export default ArtPieceDetails;
